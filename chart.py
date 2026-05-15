import json
import datetime
import requests
import time
from playwright.sync_api import sync_playwright

def wait_and_fetch_accurate(browser, url, target_hour, song_title="WAY 2 U"):
    page = browser.new_page()
    max_attempts = 15 # 1분 간격으로 최대 15분까지 추적
    
    for i in range(max_attempts):
        try:
            page.goto(url, wait_until="networkidle", timeout=60000)
            page.wait_for_timeout(5000) # 로딩 안정화
            
            # 1. 현재 페이지에 표시된 차트 시간 확인 (예: "23:00" 인지 "00:00" 인지)
            content = page.content()
            # 가이섬 페이지 내의 시간 텍스트 추출 (보통 'HH:00' 형태)
            time_match = target_hour in content
            
            if time_match:
                print(f"✅ {target_hour}시 데이터 업데이트 확인됨!")
                # 2. 데이터가 확인되었으니 바로 순위 추출
                rows = page.query_selector_all('tr, li, .chart-item')
                for row in rows:
                    text = row.inner_text()
                    if song_title in text:
                        parts = [p.strip() for p in text.split('\n') if p.strip()]
                        if len(parts) >= 2:
                            rank = "".join(filter(str.isdigit, parts[0]))
                            diff = parts[1].replace('↑', '▲').replace('↓', '▼').strip()
                            if 'NEW' in diff: diff = "NEW"
                            elif not any(c in diff for c in ['▲', '▼']): diff = "-"
                            return rank, diff
                return "OUT", "-" # 시간은 맞는데 차트에 곡이 없는 경우
            
            print(f"⏳ 아직 {target_hour}시 데이터가 없습니다. 1분 후 재시도... ({i+1}/{max_attempts})")
            time.sleep(60) # 1분 대기 후 재접속
            
        except Exception as e:
            print(f"시도 중 에러: {e}")
            time.sleep(30)
            
    page.close()
    return "OUT", "-"

def main():
    now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    # 수집 목표 시간 (정시)
    target_hour = now.strftime("%H") 
    
    # 만약 55분에 실행되었다면 다음 정시를 타겟으로 함
    if now.minute >= 50:
        target_hour = (now + datetime.timedelta(hours=1)).strftime("%H")
        # 정시가 될 때까지 1차 대기
        while True:
            check_now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
            if check_now.minute == 0: break
            time.sleep(20)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 멜론 30일 차트를 기준으로 업데이트 여부를 판단하며 수집
        m30_r, m30_d = wait_and_fetch_accurate(browser, "https://가이섬.com/chart/melon/hot100-d30", target_hour)
        
        # 나머지도 순차적으로 수집
        # (이미 멜론이 업데이트된 시점이므로 나머지는 바로 가져오면 됨)
        page = browser.new_page()
        def quick_get(url):
            page.goto(url, wait_until="networkidle")
            page.wait_for_timeout(5000)
            rows = page.query_selector_all('tr, li, .chart-item')
            for r in rows:
                t = r.inner_text()
                if "WAY 2 U" in t:
                    p_list = [l.strip() for l in t.split('\n') if l.strip()]
                    rk = "".join(filter(str.isdigit, p_list[0]))
                    df = p_list[1].replace('↑', '▲').replace('↓', '▼').strip()
                    return rk, "NEW" if "NEW" in df else (df if any(c in df for c in ['▲', '▼']) else "-")
            return "OUT", "-"

        m100_r, m100_d = quick_get("https://가이섬.com/chart/melon/hot100-d100")
        genie_r, genie_d = quick_get("https://가이섬.com/chart/genie/realtime")
        bugs_r, bugs_d = quick_get("https://가이섬.com/chart/bugs/realtime")
        
        browser.close()

    # 유튜브 및 저장 로직 (생략 - 기존과 동일)
    # ...