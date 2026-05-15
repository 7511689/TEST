import json
import datetime
import requests
import re
from playwright.sync_api import sync_playwright

def get_rank_and_diff(page, url, song_title="WAY 2 U"):
    try:
        page.goto(url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(7000) # 차트 렌더링 대기
        
        # 모든 차트 행(li 또는 div 구조)을 가져옵니다.
        # 가이섬은 보통 리스트 아이템 형식으로 곡 정보를 배치합니다.
        rows = page.query_selector_all('li, .chart-item, tr') 
        
        for row in rows:
            text = row.inner_text()
            if song_title in text:
                lines = [line.strip() for line in text.split('\n') if line.strip()]
                
                # 가이섬 구조 분석: 보통 [순위, 변동, 곡제목, 가수...] 순서입니다.
                # lines[0]은 순위(예: 56), lines[1]은 변동(예: ↑ 10 또는 NEW)
                if len(lines) >= 2:
                    rank = lines[0]
                    diff_raw = lines[1]
                    
                    # 변동값 기호 정리 (↑ -> ▲, ↓ -> ▼, NEW -> NEW)
                    diff = diff_raw.replace('↑', '▲').replace('↓', '▼').strip()
                    if not any(char in diff for char in ['▲', '▼', 'NEW']):
                        diff = "-"
                        
                    return rank, diff
        return "OUT", "-"
    except Exception as e:
        print(f"에러 발생 ({url}): {e}")
        return "OUT", "-"

def main():
    yt_key = "AIzaSyBRTNyWBiZaVnOP5NPu9Nmhj4G-SQBLoPc"
    vid_id = "dyxmlYXdxUs"
    mv_views = "0"
    
    # 1. 유튜브 조회수 수집
    try:
        res = requests.get(f"https://www.googleapis.com/youtube/v3/videos?id={vid_id}&key={yt_key}&part=statistics").json()
        mv_views = "{:,}".format(int(res['items'][0]['statistics']['viewCount']))
    except: pass

    # 2. 가이섬 차트 정밀 수집
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # 멜론 HOT100 (30일)
        m30_rank, m30_diff = get_rank_and_diff(page, "https://가이섬.com/chart/melon/hot100-d30")
        
        # 멜론 HOT100 (100일)
        m100_rank, m100_diff = get_rank_and_diff(page, "https://가이섬.com/chart/melon/hot100-d100")
        
        # 지니 실시간
        genie_rank, genie_diff = get_rank_and_diff(page, "https://가이섬.com/chart/genie/realtime")
        
        # 벅스 실시간
        bugs_rank, bugs_diff = get_rank_and_diff(page, "https://가이섬.com/chart/bugs/realtime")
        
        browser.close()

    # 3. 데이터 저장 (한국 시간 기준)
    now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    data = {
        "hour": now.strftime("%H"),
        "m30_rank": m30_rank, "m30_diff": m30_diff,
        "m100_rank": m100_rank, "m100_diff": m100_diff,
        "genie_rank": genie_rank, "genie_diff": genie_diff,
        "bugs_rank": bugs_rank, "bugs_diff": bugs_diff,
        "mv_views": mv_views
    }

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"최종 수집 완료: {data}")

if __name__ == "__main__":
    main()