import json
import datetime
import requests
import time
from playwright.sync_api import sync_playwright

def wait_until_top_of_hour():
    print("⏳ 조기 출근 완료. 정시 수집을 위해 대기 모드에 진입합니다.", flush=True)
    while True:
        now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
        if now.minute == 0: 
            print(f"✅ 정시 도착! {now.strftime('%H:%M:%S')} 수집을 시작합니다.", flush=True)
            break
        if now.second % 30 == 0:
            print(f"⏳ 현재 시각 {now.strftime('%H:%M:%S')} - 정시까지 대기 중...", flush=True)
        time.sleep(1)

def get_rank_full_search(page, url, song_title="WAY 2 U"):
    try:
        # 페이지 접속
        page.goto(url, wait_until="domcontentloaded", timeout=60000)
        
        # ------------------------------------------------------------------
        # 🔥 가이섬 Next.js 고속 JSON 파서 구역 (지니 차트 오류 우회용)
        # ------------------------------------------------------------------
        try:
            next_data_element = page.locator('#__NEXT_DATA__')
            if next_data_element.count() > 0:
                script_text = next_data_element.inner_text()
                raw_json = json.loads(script_text)
                
                chart_list = raw_json.get('props', {}).get('pageProps', {}).get('data', {}).get('data', [])
                
                if isinstance(chart_list, list) and len(chart_list) > 0:
                    for item in chart_list:
                        song_obj = item.get('song', {})
                        song_name = song_obj.get('name', '')
                        
                        if song_title.lower() in song_name.lower():
                            ranking = item.get('ranking', 'OUT')
                            previous = item.get('previous')
                            
                            rank = str(ranking)
                            diff = "-"
                            
                            if previous is not None and previous != '-':
                                try:
                                    p_num = int(previous)
                                    r_num = int(ranking)
                                    if p_num == 0:
                                        diff = "NEW"
                                    else:
                                        diff_num = p_num - r_num
                                        if diff_num > 0:
                                            diff = f"▲{diff_num}"
                                        elif diff_num < 0:
                                            diff = f"▼{abs(diff_num)}"
                                        else:
                                            diff = "-"
                                except:
                                    pass
                            
                            print(f"🎯 [가이섬 덤프 가로채기 성공] {song_name} -> {rank}위 ({diff})", flush=True)
                            return rank, diff
        except Exception as json_err:
            print(f"⚠️ JSON 사전 파싱 건너뜀 (기존 UI 크롤링으로 자동 대체): {json_err}", flush=True)
        # ------------------------------------------------------------------

        # 차트 행이 실제로 렌더링될 때까지만 대기 (최대 10초)
        try:
            page.wait_for_selector('tr, li, .chart-item', timeout=10000)
        except:
            pass
            
        # 기존의 백업 스크래핑 로직
        for page_num in range(1, 4):
            rows = page.query_selector_all('tr, li, .chart-item')
            for row in rows:
                inner_html = row.inner_html()
                inner_text = row.inner_text()
                if song_title in inner_text:
                    parts = [p.strip() for p in inner_text.split('\n') if p.strip()]
                    rank = "".join(filter(str.isdigit, parts[0])) if parts else "OUT"
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
            next_btn = page.query_selector(f'a:has-text("{page_num + 1}")')
            if next_btn:
                next_btn.click()
                print(f"👉 {page_num + 1}페이지로 이동 중...", flush=True)
            else: break
        return "OUT", "-"
    except: return "OUT", "-"

def main():
    now_check = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    if now_check.minute >= 25: # 25분 이후 실행 시 대기 모드
        wait_until_top_of_hour()
    
    print("🚀 차트 수집 프로세스를 시작합니다...", flush=True)
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
        m30_r, m30_d = get_rank_full_search(page, "https://가이섬.com/chart/melon/hot100-d30")
        
        page100 = browser.new_page()
        m100_r, m100_d = get_rank_full_search(page100, "https://가이섬.com/chart/melon/hot100-d100")
        page100.close()
        
        genie_r, genie_d = get_rank_full_search(page, "https://가이섬.com/chart/genie/realtime")
        
        # ✨ [버그 수정 완료] data_bugs_r 오타를 원래 규격인 bugs_r로 완벽 교체!
        bugs_r, bugs_d = get_rank_full_search(page, "https://가이섬.com/chart/bugs/realtime")
        browser.close()

    now_final = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    data = {
        "hour": now_final.strftime("%H"),
        "m30_rank": m30_r, "m30_diff": m30_d, "m100_rank": m100_r, "m100_diff": m100_d,
        "genie_rank": genie_r, "genie_diff": genie_d, "bugs_rank": bugs_r, "bugs_diff": bugs_d,
        "mv_views": mv_views
    }
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ 최종 수집 완료: {data}", flush=True)

if __name__ == "__main__":
    main()
