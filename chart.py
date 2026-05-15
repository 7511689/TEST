import json
import datetime
import requests
import time
from playwright.sync_api import sync_playwright

def wait_until_top_of_hour():
    # 정시(00분)가 될 때까지 서버에서 대기합니다.
    while True:
        now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
        if now.minute == 0: # 정시 도착 시 탈출
            break
        print(f"현재 {now.strftime('%H:%M:%S')} - 정시까지 대기 중...")
        time.sleep(20) # 20초마다 확인

def get_rank_and_diff(page, url, song_title="WAY 2 U"):
    try:
        page.goto(url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(10000) # 차트 반영을 위한 충분한 로딩 대기
        
        rows = page.query_selector_all('tr, li, .chart-item')
        for row in rows:
            text = row.inner_text()
            if song_title in text:
                parts = [p.strip() for p in text.split('\n') if p.strip()]
                if len(parts) >= 2:
                    # 현재 성공한 로직 유지: 첫 줄에서 숫자만 추출
                    rank = "".join(filter(str.isdigit, parts[0]))
                    diff = parts[1].replace('↑', '▲').replace('↓', '▼').strip()
                    if 'NEW' in diff: diff = "NEW"
                    elif not any(c in diff for c in ['▲', '▼']): diff = "-"
                    return rank, diff
        return "OUT", "-"
    except:
        return "OUT", "-"

def main():
    # 55분에 깨어나서 00분이 될 때까지 기다립니다.
    # (수동 Run workflow 시에는 00분이 아니면 즉시 실행됩니다)
    now_check = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    if now_check.minute >= 50:
        wait_until_top_of_hour()
    
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
        
        m30_r, m30_d = get_rank_and_diff(page, "https://가이섬.com/chart/melon/hot100-d30")
        m100_r, m100_d = get_rank_and_diff(page, "https://가이섬.com/chart/melon/hot100-d100")
        genie_r, genie_d = get_rank_and_diff(page, "https://가이섬.com/chart/genie/realtime")
        bugs_r, bugs_d = get_rank_and_diff(page, "https://가이섬.com/chart/bugs/realtime")
        
        browser.close()

    now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    data = {
        "hour": now.strftime("%H"),
        "m30_rank": m30_r, "m30_diff": m30_d,
        "m100_rank": m100_r, "m100_diff": m100_d,
        "genie_rank": genie_r, "genie_diff": genie_d,
        "bugs_rank": bugs_r, "bugs_diff": bugs_d,
        "mv_views": mv_views
    }

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()