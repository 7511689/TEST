import json
import datetime
import requests
import time
from playwright.sync_api import sync_playwright

def get_rank_and_diff(page, url, song_title="WAY 2 U"):
    try:
        page.goto(url, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(10000)
        
        rows = page.query_selector_all('tr, li, .chart-item')
        for row in rows:
            text = row.inner_text()
            if song_title in text:
                # 줄바꿈 기준으로 데이터를 쪼갭니다.
                # 보통 [순위, 변동, 제목, 가수...] 순서로 들어옵니다.
                parts = [p.strip() for p in text.split('\n') if p.strip()]
                
                if len(parts) >= 2:
                    # 1. 순위: 첫 번째 줄에서 숫자만 추출
                    rank = "".join(filter(str.isdigit, parts[0]))
                    
                    # 2. 변동: 두 번째 줄이나 주변 텍스트에서 기호 확인
                    diff_area = parts[1] if len(parts) > 1 else ""
                    
                    if '↑' in text or '▲' in text:
                        # 숫자만 추출해서 ▲와 합침 (예: ↑ 3 -> ▲3)
                        val = "".join(filter(str.isdigit, diff_area))
                        diff = f"▲{val}" if val else "▲"
                    elif '↓' in text or '▼' in text:
                        val = "".join(filter(str.isdigit, diff_area))
                        diff = f"▼{val}" if val else "▼"
                    elif 'NEW' in text:
                        diff = "NEW"
                    else:
                        diff = "-"
                        
                    return rank, diff
        return "OUT", "-"
    except:
        return "OUT", "-"

# 나머지 main 함수 및 실시간 감지 로직은 이전과 동일하게 유지...