import json
import datetime
import requests
from playwright.sync_api import sync_playwright

def get_rank_from_chart(browser, url, song_title="WAY 2 U"):
    page = browser.new_page()
    try:
        # 차트 전체 페이지로 접속합니다.
        page.goto(url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(10000) # 충분히 로딩될 때까지 대기
        
        # 페이지 전체 텍스트에서 곡 제목 위치를 찾고 그 주변의 숫자를 가져옵니다.
        content = page.content()
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(content, 'html.parser')
        
        # 모든 테이블 행(tr)을 뒤져서 우리 곡 제목이 있는지 확인합니다.
        for row in soup.select('tr'):
            row_text = row.get_text()
            if song_title in row_text:
                # 해당 행에서 순위(보통 숫자로 시작)를 추출합니다.
                import re
                match = re.search(r'(\d+)', row_text)
                if match:
                    return match.group(1)
        return "OUT"
    except Exception as e:
        print(f"에러 발생: {e}")
        return "OUT"
    finally:
        page.close()

def main():
    yt_key = "AIzaSyBRTNyWBiZaVnOP5NPu9Nmhj4G-SQBLoPc"
    vid_id = "dyxmlYXdxUs"
    mv_views = "0"
    
    # 1. 유튜브 조회수 (이건 잘 되니까 그대로 유지)
    try:
        res = requests.get(f"https://www.googleapis.com/youtube/v3/videos?id={vid_id}&key={yt_key}&part=statistics").json()
        mv_views = "{:,}".format(int(res['items'][0]['statistics']['viewCount']))
    except: pass

    # 2. 가상 브라우저로 전체 차트 페이지 훑기
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 상세페이지가 아닌 '실시간 차트 리스트' 주소로 접근합니다.
        m30 = get_rank_from_chart(browser, "https://가이섬.com/chart/melon/hot100-d30")
        genie = get_rank_from_chart(browser, "https://가이섬.com/chart/genie/realtime")
        bugs = get_rank_from_chart(browser, "https://가이섬.com/chart/bugs/realtime")
        
        browser.close()

    # 3. 결과 정리 및 저장
    now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
    data = {
        "hour": now.strftime("%H"),
        "m30_rank": m30, "m30_diff": "-",
        "genie_rank": genie, "genie_diff": "-",
        "bugs_rank": bugs, "bugs_diff": "-",
        "mv_views": mv_views
    }

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"최종 수집 데이터: {data}")

if __name__ == "__main__":
    main()