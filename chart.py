import json
import datetime
import requests
from bs4 import BeautifulSoup
import os

# --- 설정값 ---
MELON_URL = "https://가이섬.com/song/melon/601956117"
GENIE_URL = "https://가이섬.com/song/genie/115011900"
BUGS_URL  = "https://가이섬.com/song/bugs/6464779"
# 유튜브 API 키 (여기에 직접 넣으셔도 됩니다)
YOUTUBE_API_KEY = "AIzaSyBRTNyWBiZaVnOP5NPu9Nmhj4G-SQBLoPc"
VIDEO_ID = "dyxmlYXdxUs"

def get_rank_from_gaisum(url):
    # 가짜 신분증(헤더)을 더 강력하게 설정합니다.
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
    }
    try:
        # 가이섬은 접속 시 딜레이가 있을 수 있어 타임아웃을 넉넉히 잡습니다.
        res = requests.get(url, headers=headers, timeout=20)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, 'html.parser')
        
        # 가이섬 상세페이지에서 순위 숫자가 들어있는 정확한 위치를 찾습니다.
        # 만약 .cnt-rank로 안 될 경우를 대비해 여러 후보를 탐색합니다.
        rank_el = soup.select_one('.cnt-rank') or soup.select_one('.rank')
        
        if rank_el:
            return rank_el.text.strip().replace("위", "")
        return "OUT"
    except Exception as e:
        print(f"가이섬 수집 에러: {e}")
        return "OUT"

def get_youtube_views():
    try:
        url = f"https://www.googleapis.com/youtube/v3/videos?id={VIDEO_ID}&key={YOUTUBE_API_KEY}&part=statistics"
        response = requests.get(url).json()
        views = response['items'][0]['statistics']['viewCount']
        return "{:,}".format(int(views))
    except:
        return "0"

def calculate_diff(current, last):
    if current == "OUT": return "OUT"
    if not last or last == "OUT": return "-"
    try:
        curr_num = int(current)
        last_num = int(last)
        if curr_num < last_num: return f"▲{last_num - curr_num}"
        elif curr_num > last_num: return f"▼{curr_num - last_num}"
        else: return "-"
    except:
        return "-"

# 1. 기존 데이터 불러오기
try:
    with open('data.json', 'r', encoding='utf-8') as f:
        last_data = json.load(f)
except:
    last_data = {}

# 2. 데이터 수집
m30_curr = get_rank_from_gaisum(MELON_URL)
genie_curr = get_rank_from_gaisum(GENIE_URL)
bugs_curr = get_rank_from_gaisum(BUGS_URL)
mv_curr = get_youtube_views()

# 3. 데이터 통합 (한국 시간 기준으로 강제 설정)
now = datetime.datetime.utcnow() + datetime.timedelta(hours=9)
data = {
    "hour": now.strftime("%H"),
    "m30_rank": m30_curr,
    "m30_diff": calculate_diff(m30_curr, last_data.get("m30_rank")),
    "genie_rank": genie_curr,
    "genie_diff": calculate_diff(genie_curr, last_data.get("genie_rank")),
    "bugs_rank": bugs_curr,
    "bugs_diff": calculate_diff(bugs_curr, last_data.get("bugs_rank")),
    "mv_views": mv_curr if mv_curr != "0" else last_data.get("mv_views", "0")
}

# 4. 저장
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)