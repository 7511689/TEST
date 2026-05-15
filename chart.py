import json
import datetime
import requests
import time
from playwright.sync_api import sync_playwright

def wait_until_top_of_hour():
    """
    일꾼이 정시보다 일찍 도착했을 때(예: 30분~55분 사이), 
    종료하지 않고 정시(00분 00초)가 될 때까지 끈질기게 기다립니다.
    """
    print("⏳ 조기 출근 완료. 정시 수집을 위해 대기 모드에 진입합니다.", flush=True)
    while True:
        now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
        if now.minute == 0: 
            print(f"✅ 정시 도착! {now.strftime('%H:%M:%S')} 수집을 시작합니다.", flush=True)
            break
        # 30초마다 로그를 남겨 깃허브가 작업이 멈춘 것으로 오해하지 않게 합니다.
        if now.second % 30 == 0:
            print(f"⏳ 현재 시각 {now.strftime('%H:%M:%S')} - 정시까지 대기 중...", flush=True)
        time.sleep(1)

def get_rank_full_search(page, url, song_title="WAY 2 U"):
    """
    가이섬 차트를 최대 250위(3페이지)까지 뒤지며, 
    드래그되지 않는 화살표 이미지 속 순위 변동값까지 정밀하게 읽어옵니다.
    """
    try:
        page.goto(url, wait_until="networkidle", timeout=60000)
        
        for page_num in range(1, 4):
            # 가이섬 특유의 로딩(이미지/아이콘)을 위해 충분히 기다립니다.
            page.wait_for_timeout(8000) 
            rows = page.query_selector_all('tr, li, .chart-item')
            
            for row in rows:
                inner_html = row.inner_html()
                inner_text = row.inner_text()
                
                if song_title in inner_text:
                    # 1. 순위 추출
                    parts = [p.strip() for p in inner_text.split('\n') if p.strip()]
                    rank = "".join(filter(str.isdigit, parts[0])) if parts else "OUT"
                    
                    # 2. 변동 추출 (HTML 태그 내 아이콘/클래스 정밀 분석)
                    diff = "-"
                    if '↑' in inner_html or 'up' in inner_html.lower() or 'ico_up' in inner_html:
                        val = "".join(filter(str.isdigit, parts[1])) if len(parts) > 1 else ""
                        diff = f"▲{val}" if val else "▲"
                    elif '↓' in inner_html or 'down' in inner_html.lower() or 'ico_down' in inner_html:
                        val = "".join(filter(str.isdigit, parts[1])) if len(parts) > 1 else ""
                        diff = f"▼{val}" if val else "▼"
                    elif 'NEW' in inner_html.upper() or 'ico_new' in inner_html:
                        diff = "NEW"
                        
                    return rank, diff

            # 다음 페이지 버튼(2, 3)이 있으면 누르고, 없으면 종료합니다.
            next_btn = page.query_selector(f'a:has-text("{page_num + 1}")')
            if next_btn:
                next_btn.click()
                print(f"👉 {page_num + 1}페이지로 이동하여 탐색을 계속합니다.", flush=True)
            else: break
            
        return "OUT", "-"
    except:
        return "OUT", "-"

def main():
    now_check = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    
    # 매시 30분 이후에 일꾼이 깨어났다면, 정시까지 대기 시킵니다.
    # 깃허브가 10~20분 늦게 깨워도 30분에 설정해두면 정시 전에 도착합니다.
    if now_check.minute >= 30:
        wait_until_top_of_hour()
    
    print("🚀 차트 수집 프로세스를 시작합니다...", flush=True)
    
    # 유튜브 API 조회수 수집
    yt_key = "AIzaSyBRTNyWBiZaVnOP5NPu9Nmhj4G-SQBLoPc"
    vid_id = "dyxmlYXdxUs"
    mv_views = "0"
    try:
        res = requests.get(f"https://www.googleapis.com/youtube/v3/videos?id={vid_id}&key={yt_key}&part=statistics").json()
        mv_views = "{:,}".format(int(res['items'][0]['statistics']['viewCount']))
    except: pass

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # 멜론, 지니, 벅스 전수 조사
        m30_r, m30_d = get_rank_full_search(page, "https://가이섬.com/chart/melon/hot100-d30")
        m100_r, m100_d = get_rank_full_search(page, "https://가이섬.com/chart/melon/hot100-d100")
        genie_r, genie_d = get_rank_full_search(page, "https://가이섬.com/chart/genie/realtime")
        bugs_r, bugs_d = get_rank_full_search(page, "https://가이섬.com/chart/bugs/realtime")
        
        browser.close()

    now_final = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    data = {
        "hour": now_final.strftime("%H"),
        "m30_rank": m30_r, "m30_diff": m30_d,
        "m100_rank": m100_r, "m100_diff": m100_d,
        "genie_rank": genie_r, "genie_diff": genie_d,
        "bugs_rank": bugs_r, "bugs_diff": bugs_d,
        "mv_views": mv_views
    }

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ 최종 수집 완료: {data}", flush=True)

if __name__ == "__main__":
    main()