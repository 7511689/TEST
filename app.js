// 기부 폼 컨텐츠 정의
const donationContents = {
    genie: `<div style="text-align: center; margin-bottom: 24px;"><a href="https://forms.gle/9LHVtfuwnsPjQbH47" target="_blank" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; box-shadow: 0 4px 12px rgba(0,228,183,0.3); display: inline-flex; align-items: center; gap: 8px;">📝 지니 아이디 제출 폼 작성하기</a></div><div class="placeholder-box guide-placeholder">지니뮤직 아이디 기부 상세 이미지</div>`,
    bugs: `<div style="text-align: center; margin-bottom: 24px;"><a href="https://forms.gle/3UXwndvj45rtEPWc6" target="_blank" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #0096FF; box-shadow: 0 4px 12px rgba(0,150,255,0.3); display: inline-flex; align-items: center; gap: 8px;">📝 벅스 아이디 제출 폼 작성하기</a></div><div class="placeholder-box guide-placeholder">벅스 아이디 기부 상세 이미지</div>`,
    dual: `<div class="placeholder-box guide-placeholder">듀얼넘버 가이드 상세 이미지</div>`
};

// 페이지별 HTML 템플릿 데이터
const pages = {
    home: `
        <div style="text-align: center; margin-bottom: 20px;">
            <span style="background: #D9F7F1; color: #007D62; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">Youtube MV</span>
        </div>
        <div class="youtube-mv" style="border-radius: 16px; overflow: hidden; background: #000; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
            <!-- 하단의 src="https://www.youtube.com/embed/영상ID" 부분의 영상ID를 실제 뮤비 ID로 바꿔주시면 됩니다. -->
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOGB_ozluBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
        </div>
        
        <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">실시간 차트</h2>
        <div class="chart-grid">
            <div class="chart-card">
                <div class="chart-header">
                    <span class="chart-name melon">Melon</span>
                    <span class="chart-time">14:00 기준</span>
                </div>
                <div class="chart-rank">00차트 00위 (↑3)</div>
            </div>
            <div class="chart-card">
                <div class="chart-header">
                    <span class="chart-name genie">Genie</span>
                    <span class="chart-time">14:00 기준</span>
                </div>
                <div class="chart-rank">00차트 00위 (↑3)</div>
            </div>
            <div class="chart-card">
                <div class="chart-header">
                    <span class="chart-name bugs">Bugs</span>
                    <span class="chart-time">14:00 기준</span>
                </div>
                <div class="chart-rank">00차트 00위 (↑3)</div>
            </div>
            <div class="chart-card">
                <div class="chart-header">
                    <span class="chart-name flo">FLO</span>
                    <span class="chart-time">14:00 기준</span>
                </div>
                <div class="chart-rank">00차트 00위 (↑3)</div>
            </div>
        </div>
    `,
    oneclick: `
        <h1 class="page-title">원클릭 스트리밍</h1>
        <p class="page-desc">원하시는 플랫폼의 아이콘을 클릭하면 즉시 스트리밍이 가능합니다!</p>
        
        <div class="platform-icons">
            <div class="icon-box active" onclick="changeContent(this); playOneClick('melon')"><div class="icon-placeholder"></div><span class="icon-name">멜론</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('bugs')"><div class="icon-placeholder"></div><span class="icon-name">벅스</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('genie')"><div class="icon-placeholder"></div><span class="icon-name">지니</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('flo')"><div class="icon-placeholder"></div><span class="icon-name">플로</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('vibe')"><div class="icon-placeholder"></div><span class="icon-name">바이브</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('spotify')"><div class="icon-placeholder"></div><span class="icon-name">스포티파이</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('youtube')"><div class="icon-placeholder"></div><span class="icon-name">유튜브</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('musicwave')"><div class="icon-placeholder"></div><span class="icon-name">뮤직웨이브</span></div>
        </div>

        <div class="recommended-list-wrapper">
            <h2 class="recommended-list-title">권장 스트리밍 리스트</h2>
            <div class="placeholder-box recommended-placeholder">권장 스트리밍 리스트 이미지 영역</div>
        </div>
    `,
    streaming: `
        <h1 class="page-title">스밍 가이드</h1>
        <p class="page-desc">스트리밍이 정상적으로 집계될 수 있게 가이드를 지켜주세요.</p>
        
        <div class="tabs">
            <div class="tab active" onclick="changeContent(this, 'streaming-placeholder', '멜론 스밍 가이드 이미지')">멜론</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '지니 스밍 가이드 이미지')">지니</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '플로 스밍 가이드 이미지')">플로</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '벅스 스밍 가이드 이미지')">벅스</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '스포티파이 스밍 가이드 이미지')">스포티파이</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '유튜브 뮤직 스밍 가이드 이미지')">유튜브 뮤직</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '바이브 스밍 가이드 이미지')">바이브</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '애플뮤직 스밍 가이드 이미지')">애플뮤직</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', '스테이션헤드 스밍 가이드 이미지')">스테이션헤드</div>
        </div>

        <div id="streaming-placeholder" class="placeholder-box guide-placeholder">멜론 스밍 가이드 이미지</div>
    `,
    download: `
        <h1 class="page-title">음원 다운로드 가이드</h1>
        <p class="page-desc">다운로드가 정상적으로 집계될 수 있게 가이드를 지켜주세요.</p>
        
        <div class="tabs">
            <div class="tab active" onclick="changeContent(this, 'download-placeholder', '멜론음원 다운로드 가이드 이미지')">멜론음원</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '멜론 선물하기 가이드 이미지')">멜론선물하기</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '지니음원 다운로드 가이드 이미지')">지니음원</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '지니 선물하기 가이드 이미지')">지니 선물하기</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '벅스음원 다운로드 가이드 이미지')">벅스음원</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '카카오뮤직 다운로드 가이드 이미지')">카카오뮤직</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', 'V컬러링 가이드 이미지')">V컬러링</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '멜론 뮤비 다운로드 이미지')">멜론 뮤비</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', '벅스 뮤비 다운로드 이미지')">벅스 뮤비</div>
        </div>

        <div id="download-placeholder" class="placeholder-box guide-placeholder">멜론음원 다운로드 가이드 이미지</div>
    `,
    musicshow: `
        <h1 class="page-title">음악방송 가이드</h1>
        <p class="page-desc">음악방송 1위 달성을 위한 실시간 반영 비율과 투표 일정을 한눈에 확인하세요.</p>
        
        <div class="musicshow-top">
            <div class="ms-box">
                <div class="ms-title">방송 반영 비율 <span style="color:#00E4B7;">📊</span></div>
                <div class="placeholder-box ms-placeholder">반영 비율 차트 영역</div>
            </div>
            <div class="ms-box">
                <div class="ms-title">투표 일정 <span style="color:#0096FF;">📅</span></div>
                <div class="placeholder-box ms-placeholder">일정 달력 영역</div>
            </div>
        </div>

        <div style="background: #FFFFFF; padding: 40px; border-radius: 16px; text-align: center; border: 1px solid var(--border-color);">
            <h2 style="font-size: 24px; margin-bottom: 8px;">방송사별 상세 가이드</h2>
            <p style="color: var(--text-sub); margin-bottom: 30px;">각 방송사 아이콘을 클릭하여 상세한 집계 방식과 투표 가이드를 확인하세요.</p>
            
            <div class="tabs" style="justify-content: center;">
                <div class="tab active" onclick="changeContent(this, 'musicshow-placeholder', '쇼챔피언 상세 가이드 이미지', 'musicshow-title', '쇼챔피언')">쇼챔피언</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', '엠카운트다운 상세 가이드 이미지', 'musicshow-title', '엠카운트다운')">엠카운트다운</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', '뮤직뱅크 상세 가이드 이미지', 'musicshow-title', '뮤직뱅크')">뮤직뱅크</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', '음악중심 상세 가이드 이미지', 'musicshow-title', '음악중심')">음악중심</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', '인기가요 상세 가이드 이미지', 'musicshow-title', '인기가요')">인기가요</div>
            </div>
            
            <div style="text-align: left; padding: 30px; background: #F8FBF9; border-radius: 12px; margin-top: 20px;">
                <h3 style="font-size: 20px; margin-bottom: 20px; display:flex; align-items:center; gap:10px;">
                    <span style="background:#00E4B7; color:white; width:32px; height:32px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center;">📖</span> 
                    <span id="musicshow-title">쇼챔피언 상세 가이드</span>
                </h3>
                <div id="musicshow-placeholder" class="placeholder-box" style="height: 600px;">쇼챔피언 상세 가이드 이미지</div>
            </div>
        </div>
    `,
    radio: `
        <h1 class="page-title">방송사별 라디오 원클릭</h1>
        <p class="page-desc">KBS, MBC, SBS의 주요 라디오 채널을 한 번에 확인하고 스트리밍 가이드를 바로 확인하세요.</p>

        <div class="card-grid">
            <div class="info-card active" style="border-top: 4px solid #00E4B7;" onclick="changeContent(this, 'radio-placeholder', 'KBS 라디오 상세 가이드 이미지')">
                <h3>KBS Cool FM</h3>
                <p>뮤직뱅크 방송점수 20% 반영!</p>
                <div class="info-link">가이드 보기 →</div>
            </div>
            <div class="info-card" style="border-top: 4px solid #0096FF;" onclick="changeContent(this, 'radio-placeholder', 'MBC 라디오 상세 가이드 이미지')">
                <h3>MBC FM4U</h3>
                <p>음악중심 방송점수 10% 반영!</p>
                <div class="info-link" style="color:#0096FF;">가이드 보기 →</div>
            </div>
            <div class="info-card" style="border-top: 4px solid #FF7A00;" onclick="changeContent(this, 'radio-placeholder', 'SBS 라디오 상세 가이드 이미지')">
                <h3>SBS Power FM</h3>
                <p>인기가요 방송점수 10% 반영!</p>
                <div class="info-link" style="color:#FF7A00;">가이드 보기 →</div>
            </div>
        </div>

        <div id="radio-placeholder" class="placeholder-box guide-placeholder">KBS 라디오 상세 가이드 이미지</div>
    `,
    donation: `
        <div style="text-align: center; margin-bottom: 60px;">
            <h1 class="page-title">아이디 기부</h1>
            <p class="page-desc" style="margin-bottom:0;">음원 차트 반영을 위한 스트리밍 아이디 기부.</p>
        </div>

        <div class="card-grid">
            <div class="info-card active" onclick="changeContent(this, 'donation-placeholder', donationContents.genie)">
                <div style="width:40px; height:4px; background:#00E4B7; margin-bottom:20px;"></div>
                <h3>지니뮤직 아이디 생성</h3>
                <p>간편한 인증을 통해 지니뮤직 계정을 생성하여 음총팀에 전달해 주세요!</p>
                <div class="btn-outline" style="width:100%; text-align:center; pointer-events:none;">가이드 보기 →</div>
            </div>
            <div class="info-card" onclick="changeContent(this, 'donation-placeholder', donationContents.bugs)">
                <div style="width:40px; height:4px; background:#0096FF; margin-bottom:20px;"></div>
                <h3>벅스 아이디 생성</h3>
                <p>간편한 인증을 통해 벅스뮤직 계정을 생성하여 음총팀에 전달해 주세요!</p>
                <div class="btn-outline" style="width:100%; text-align:center; pointer-events:none;">가이드 보기 →</div>
            </div>
            <div class="info-card" onclick="changeContent(this, 'donation-placeholder', donationContents.dual)">
                <div style="width:40px; height:4px; background:#FF9955; margin-bottom:20px;"></div>
                <h3>듀얼넘버 가이드</h3>
                <p>하나의 폰으로 여러 계정을 생성하는 효과적인 듀얼넘버 활용법을 안내합니다.</p>
                <div class="btn-outline" style="width:100%; text-align:center; pointer-events:none;">가이드 보기 →</div>
            </div>
        </div>

        <div id="donation-placeholder">
            ${donationContents.genie}
        </div>
    `,
    fundraising: `
        <h1 class="page-title" style="font-size: 36px;">FLARE U 활동을 위한<br>음원총공비 모금</h1>
        <p class="page-desc">음원총공 모금액은 음원총공팀의 총공을 위해서만 사용됩니다.</p>
        
        <div class="placeholder-box" style="height: 800px; box-shadow: 0 0 20px rgba(0, 228, 183, 0.3); border: 2px solid white; margin-bottom: 40px;">모금 상세 안내 포스터 영역</div>

        <div style="text-align: center; margin-bottom: 80px;">
            <a href="https://forms.gle/9smwrfLNY4hDBxZW8" target="_blank" class="btn-primary" style="padding: 20px 40px; font-size: 20px; border-radius: 50px; background-color: #00E4B7; color: #111; box-shadow: 0 4px 12px rgba(0, 228, 183, 0.4); text-decoration: none; font-weight: 800; display: inline-flex; align-items: center; gap: 10px;">💸 모금자 정보 입력 폼 작성하기</a>
        </div>
    `
};

// DOM 요소
const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('.nav-link');

// 원클릭 스트리밍 기기 판별 및 재생 함수
window.playOneClick = function(platform) {
    // 1. 기기 판별 (모바일 vs PC)
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|ipod|android/i.test(userAgent);

    // 2. 실제 곡 ID 세팅 (3곡 기준)
    const melonList = '600613582,601556257,600076127';
    const bugsList = '6384880|6440465|6345003';
    const bugsPcList = '6384880,6440465,6345003';
    const genieList = '112903134;114309403;111739510';
    const floList = '564653294,580145350,554618802';
    const musicwaveLink = 'https://musicwave.melon.com/musicwave.htm?a=Y&m=pY_guuANgzNwZKN8mCNOcA';
    
    const links = {
        'melon': {
            mobile: `melonapp://play?cType=1&cList=${melonList}`,
            pc: null
        },
        'genie': {
            mobile: `geniemusic://play?smlist=${genieList}`,
            pc: `https://genie.co.kr/player/shareProcessV2?xgnm=${genieList}`
        },
        'bugs': {
            mobile: `bugs3://app/tracks/play?track_id=${bugsList}`,
            pc: `https://music.bugs.co.kr/newPlayer?trackId=${bugsPcList}`
        },
        'flo': {
            mobile: `flomusic://play?trackIds=${floList}`,
            pc: null
        },
        'vibe': { mobile: null, pc: null },
        'spotify': { mobile: null, pc: null },
        'youtube': { mobile: null, pc: null },
        'musicwave': {
            mobile: musicwaveLink,
            pc: musicwaveLink
        }
    };

    // 3. 기기에 맞는 주소 추출 및 창 열기
    const targetUrl = isMobile ? links[platform].mobile : links[platform].pc;
    
    if(targetUrl) {
        if (targetUrl.startsWith('http')) {
            // PC 웹 플레이어 등 일반 주소는 팝업창(새 탭)으로 열기
            const a = document.createElement('a');
            a.href = targetUrl;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            // 모바일 딥링크(앱 실행)는 현재 창에서 그대로 연결 (빈 탭 찌꺼기 방지)
            window.location.href = targetUrl;
        }
    } else {
        const platformNames = {
            'melon': '멜론', 'genie': '지니', 'bugs': '벅스', 'flo': '플로', 
            'vibe': '바이브', 'spotify': '스포티파이', 'youtube': '유튜브 뮤직', 'musicwave': '뮤직웨이브'
        };
        
        if (!isMobile && (platform === 'melon' || platform === 'flo' || platform === 'vibe')) {
            alert(`${platformNames[platform]} 원클릭은 모바일만 지원 가능합니다.`);
        } else {
            alert('해당 플랫폼은 스밍표 작업 중입니다. 잠시만 기다려주세요!');
        }
    }
}

// 컨텐츠 변경 및 탭 활성화 함수 (인라인 이벤트에서 호출됨)
window.changeContent = function(element, targetId, text, titleId = null, titleText = null) {
    // 1. 플레이스홀더 텍스트(이미지 영역) 변경
    const target = document.getElementById(targetId);
    if(target) {
        // 부드러운 전환 효과
        target.style.transform = 'translateY(5px)';
        target.style.opacity = '0.5';
        
        setTimeout(() => {
            target.innerHTML = text;
            target.style.transform = 'translateY(0)';
            target.style.opacity = '1';
        }, 150);
    }
    
    // 2. 제목이 같이 바뀌어야 하는 경우 (예: 음악방송 가이드)
    if(titleId && titleText) {
        const titleEl = document.getElementById(titleId);
        if(titleEl) titleEl.innerText = titleText + ' 상세 가이드';
    }
    
    // 3. 탭/버튼 형제 요소들의 active 클래스 제거 후, 클릭된 요소에 추가
    if(element) {
        const parent = element.parentNode;
        const siblings = parent.children;
        for(let i=0; i<siblings.length; i++) {
            siblings[i].classList.remove('active');
        }
        element.classList.add('active');
    }
}

// 페이지 렌더링 함수
function renderPage(pageId) {
    // 1. 콘텐츠 교체 (페이드인 효과 적용을 위해 내용을 비웠다가 다시 채움)
    appContent.style.animation = 'none';
    appContent.offsetHeight; // 리플로우 강제 발생 (애니메이션 재시작 트릭)
    appContent.style.animation = null;
    
    appContent.innerHTML = pages[pageId] || pages['home'];

    // 2. 활성화된 네비게이션 스타일 업데이트
    navLinks.forEach(link => {
        if (link.dataset.target === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. 브라우저 스크롤 맨 위로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 네비게이션 클릭 이벤트 리스너
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = e.target.dataset.target;
        renderPage(targetPage);
    });
});

// 초기 로딩 시 홈 화면 렌더링
window.addEventListener('DOMContentLoaded', () => {
    renderPage('home');
});

// --- 모바일 UI 및 라이트박스 제어 로직 ---
// 햄버거 메뉴 토글
window.toggleMobileMenu = function() {
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    if(navMenu && menuBtn) {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    }
}

// 라이트박스(이미지 확대) 열기
window.openLightbox = function(element) {
    const lightbox = document.getElementById('lightbox');
    if(!lightbox) return;
    lightbox.innerHTML = '';
    
    const clone = element.cloneNode(true);
    clone.style.width = '100%';
    clone.style.height = 'auto';
    clone.style.maxHeight = '90vh';
    clone.style.margin = '0';
    clone.style.cursor = 'zoom-out';
    clone.classList.remove('placeholder-box'); // 기존 호버/클릭 효과 제거
    clone.style.backgroundColor = '#fff';
    clone.style.color = '#111';
    
    lightbox.appendChild(clone);
    lightbox.style.display = 'flex';
    setTimeout(() => lightbox.classList.add('active'), 10);
}

// 라이트박스 닫기
window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if(!lightbox) return;
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightbox.innerHTML = '';
    }, 300);
}

// 전역 클릭 이벤트 (이벤트 위임)
document.body.addEventListener('click', function(e) {
    // 1. 모바일 메뉴 외부 클릭 시 닫기
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    }
    
    // 2. 모바일에서 메뉴 링크 클릭 시 즉시 닫기
    if (e.target.classList.contains('nav-link')) {
        if (navMenu) navMenu.classList.remove('active');
        if (menuBtn) menuBtn.classList.remove('active');
    }

    // 3. 라이트박스 실행 (회색 이미지 박스 클릭 시)
    const placeholder = e.target.closest('.placeholder-box');
    // 아이콘 박스 등 다른 클릭 요소가 아닐 때만 실행
    if (placeholder && !placeholder.closest('.icon-box')) {
        window.openLightbox(placeholder);
    }
});
