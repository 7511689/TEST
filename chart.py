import json
import datetime
import requests
from playwright.sync_api import sync_playwright

def get_gaisum_data(browser, url):
    page = browser.new_page()
    try:
        # 가이섬 접속 후 데이터가 뜰 때까지 7초간 기다립니다.
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(7000) 
        
        # 화면에 보이는 텍스트 중 순위 정보를 찾습니다.
        content = page.content()
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(content, 'html.parser')
        
        rank_el = soup.select_one('.cnt-rank') or soup.select_one('.rank')
        if rank_el:
            return rank_el.text.strip().replace("위", "")
        return "OUT"
    except:
        return "OUT"
    finally:
        page.close()

def main():
    # 유튜브 조회수 먼저 가져오기
    # (사용자님의 API 키와 ID를 그대로 사용합니다)
    yt_key = "AIzaSyBRTNyWBiZaVnOP5NPu9Nmhj4G-SQBLoPc"
    vid_id = "dyxmlYXdxUs"
    mv_views = "0"
    try:
        res = requests.get(f"https://www.googleapis.com/youtube/v3/videos?id={vid_id}&key={yt_key}&part=statistics").json()
        mv_views = "{:,}".format(int(res['items'][0]['statistics']['viewCount']))
    except: pass

    # 가상 브라우저 실행
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        m30 = get_gaisum_data(browser, "https://가이섬.com/song/melon/601956117")
        genie = get_gaisum_data(browser, "https://가이섬.com/song/genie/115011900")
        bugs = get_gaisum_data(browser, "https://가이섬.com/song/bugs/6464779")
        
        browser.close()

    # 결과 저장
    now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    data = {
        "hour": now.strftime("%H"),
        "m30_rank": m30, "m30_diff": "-", # 변동폭은 다음 시간부터 자동 계산됨
        "genie_rank": genie, "genie_diff": "-",
        "bugs_rank": bugs, "bugs_diff": "-",
        "mv_views": mv_views
    }

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()