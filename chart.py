import json
import datetime
import sys
import os
import requests
from bs4 import BeautifulSoup

# --- 설정값 ---
MELON_URL = "https://가이섬.com/song/melon/601956117"
GENIE_URL = "https://가이섬.com/song/genie/115011900"
BUGS_URL  = "https://가이섬.com/song/bugs/6464779"
YOUTUBE_API_KEY = os.environ.get("AIzaSyBRTNyWBiZaVnOP5NPu9Nmhj4G-SQBLoPc", "") # 깃허브 Secret에 등록한 경우 사용
VIDEO_ID = "dyxmlYXdxUs"

def get_rank_from_gaisum(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    try:
        res = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(res.text, 'html.parser')
        # 가이섬 상세페이지 상단에 크게 적힌 현재 순위 숫자를 가져옵니다.
        rank_text = soup.select_one('.cnt-rank').text.strip()
        return rank_text.replace("위", "")
    except:
        return "OUT"

def calculate_diff(current, last):
    if current == "OUT": return "OUT"
    if not last or last == "OUT": return "-"
    
    curr_num = int(current)
    last_num = int(last)
    
    if curr_num < last_num: return f"▲{last_num - curr_num}"
    elif curr_num > last_num: return f"▼{curr_num - last_num}"
    else: return "-"

# 1. 기존 데이터(지난 시간 성적) 불러오기
try:
    with open('data.json', 'r', encoding='utf-8') as f:
        last_data = json.load(f)
except:
    last_data = {}

# 2. 현재 성적 긁어오기
m30_curr = get_rank_from_gaisum(MELON_URL)
genie_curr = get_rank_from_gaisum(GENIE_URL)
bugs_curr = get_rank_from_gaisum(BUGS_URL)

# 3. 변동폭 직접 계산하기
data = {
    "hour": datetime.datetime.now().strftime("%H"),
    "m30_rank": m30_curr,
    "m30_diff": calculate_diff(m30_curr, last_data.get("m30_rank")),
    "genie_rank": genie_curr,
    "genie_diff": calculate_diff(genie_curr, last_data.get("genie_rank")),
    "bugs_rank": bugs_curr,
    "bugs_diff": calculate_diff(bugs_curr, last_data.get("bugs_rank")),
    "mv_views": last_data.get("mv_views", "0") # 유튜브 조회수는 기존값 유지 혹은 API 연동
}

# 4. 저장하기
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)