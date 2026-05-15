import json
import datetime
import requests
import time
from playwright.sync_api import sync_playwright

def wait_until_top_of_hour():
    # 55분에 미리 깨어난 일꾼이 정시(00분)까지 서버를 점유하고 기다립니다.
    while True:
        now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
        if now.minute == 0: 
            print(f"✅ 정시 도착! {now.strftime('%H:%M:%S')} 수집을 시작합니다.", flush=True)
            break
        print(f"⏳ 현재 {now.strftime('%H:%M:%S')} - 정시까지 대기 중...", flush=True)
        time.sleep(20)

def get_rank_full_search(page, url, song_title="WAY 2 U"):
    try:
        page.goto(url, wait_until="networkidle", timeout=60000)
        
        # 1위부터 250위까지 3개 페이지를 샅샅이 뒤집니다.
        for page_num in range(1, 4):
            page.wait_for_timeout(8000) # 이미지/아이콘 로딩 대기 시간 확보
            rows = page.query_selector_all('tr, li, .chart-item')
            
            for row in rows:
                inner_html = row.inner_html()
                inner_text = row.inner_text()
                
                if song_title in inner_text:
                    # 1. 순위: 텍스트의 첫 줄에서 숫자만 추출
                    parts = [p.strip() for p in inner_text.split('\n') if p.strip()]
                    rank = "".join(filter(str.isdigit, parts[0])) if parts else "OUT"
                    
                    # 2. 변동: 드래그 안 되는 아이콘(이미지/클래스)을 HTML 소스에서 직접 포착
                    diff = "-"
                    # 'up'이나 '상승' 의미가 포함된 코드/이미지 감지
                    if '↑' in inner_html or 'up' in inner_html.lower() or 'ico_up' in inner_html:
                        val = "".join(filter(str.isdigit, parts[1])) if len(parts) > 1 else ""
                        diff = f"▲{val}" if val else "▲"
                    # 'down'이나 '하락' 의미가 포함된 코드/이미지 감지
                    elif '↓' in inner_html or 'down' in inner_html.lower() or 'ico_down' in inner_html:
                        val = "".join(filter(str.isdigit, parts[1])) if len(parts) > 1 else ""
                        diff = f"▼{val}" if val else "▼"
                    elif 'NEW' in inner_html.upper() or 'ico_new' in inner_html:
                        diff = "NEW"
                        
                    return rank, diff

            # 다음 페이지로 넘어가는 버튼 클릭
            next_btn = page.query_selector(f'a.page-link:has-text("{page_num + 1}")')
            if next_btn:
                next_btn.click()
                print(f"👉 {page_num + 1}페이지로 이동 중...", flush=True)
            else: break
            
        return "OUT", "-"
    except:
        return "OUT", "-"

def main():
    now_check = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    # 정시성 확보를 위해 50분~59분 사이 실행 시 정시까지 대기
    if 50 <= now_check.minute <= 59:
        wait_until_top_of_hour()
    
    print("🚀 수집을 시작합니다...", flush=True)
    
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
        
        # 멜론, 지니, 벅스 전수 조사 (250위까지)
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
    print(f"✅ 최종 결과: {data}", flush=True)

if __name__ == "__main__":
    main()