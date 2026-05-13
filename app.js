// 서포트 컨텐츠 정의
const supportContents = {
    genie: `<div style="text-align: center; margin-bottom: 24px;"><a href="https://forms.gle/9LHVtfuwnsPjQbH47" target="_blank" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #013972; color: #fff; box-shadow: 0 4px 12px rgba(1,57,114,0.3); display: inline-flex; align-items: center; gap: 8px;">📝 지니 아이디 제출 폼 작성하기</a></div><img src="image/Support_for_the_music_streaming_team/id_donation/genie_id_guide.jpg" class="guide-img" alt="지니아이디 생성 가이드">`,
    bugs: `<div style="text-align: center; margin-bottom: 24px;"><a href="https://forms.gle/3UXwndvj45rtEPWc6" target="_blank" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #A12D40; color: #fff; box-shadow: 0 4px 12px rgba(161,45,64,0.3); display: inline-flex; align-items: center; gap: 8px;">📝 벅스 아이디 제출 폼 작성하기</a></div><img src="image/Support_for_the_music_streaming_team/id_donation/bugs_id_guide.jpg" class="guide-img" alt="벅스아이디 생성 가이드">`,
    dual: `<img src="image/Support_for_the_music_streaming_team/id_donation/dual_number_guide.jpg" class="guide-img" alt="듀얼넘버 안내 가이드">`,
    fund: `<div style="text-align: center; margin-bottom: 24px;"><a href="https://forms.gle/9smwrfLNY4hDBxZW8" target="_blank" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #5EB0ED; color: #fff; box-shadow: 0 4px 12px rgba(94, 176, 237, 0.4); text-decoration: none; font-weight: 800; display: inline-flex; align-items: center; gap: 10px;">💸 모금자 정보 입력 폼 작성하기</a></div><img src="image/Support_for_the_music_streaming_team/fundraising/fundraising_Guide.png" class="guide-img" alt="모금 상세 안내 포스터">`,
    helper: `<div style="text-align: center; margin-bottom: 24px;"><a href="https://open.kakao.com/me/FlareU_stream" target="_blank" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #FF7A00; box-shadow: 0 4px 12px rgba(255,122,0,0.3); display: inline-flex; align-items: center; gap: 8px;">🤝 헬퍼 지원 신청 링크</a></div><img src="image/Support_for_the_music_streaming_team/Helpers_Recruitment_Guide.png" class="guide-img" alt="헬퍼 지원 가이드">`,
    album: `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; max-width: 800px; margin: 0 auto; padding: 20px 0;">
        <a href="https://fncstore.cafe24.com/category/flare-u/246/" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">FNC STORE</a>
        <a href="https://kr.ktown4u.com/artistBrandlist?grp_no=44261381" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">Ktown4U</a>
        <a href="https://search.kyobobook.co.kr/search?keyword=FLARE+U%28%ED%94%8C%EB%A0%88%EC%96%B4+%EC%9C%A0%29&gbCode=TOT" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">핫트랙스</a>
        <a href="https://www.aladin.co.kr/search/wsearchresult.aspx?AuthorSearch=%ED%94%8C%EB%A0%88%EC%96%B4+%EC%9C%A0+(FLARE+U)@10635352" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">알라딘</a>
        <a href="https://www.yes24.com/product/search?domain=ALL&query=%25ED%2594%258C%25EB%25A0%2588%25EC%2596%25B4%2520%25EC%259C%25A0&authorNo=530585&author=%ED%94%8C%EB%A0%88%EC%96%B4%20%EC%9C%A0" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">yes24</a>
        <a href="https://www.applemusic.co.kr/shop/shopbrand.html?search=FLARE%20U%20(%ED%94%8C%EB%A0%88%EC%96%B4%20%EC%9C%A0)&refer=https:" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">애플뮤직</a>
        <a href="https://artist.mnetplus.world/main/stg/flareu/shop/kr?categoryKey=01KQ6X1DATK8RATN9ER15XA9W9" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">플러스챗</a>
        <a href="https://everlineshop.com/goods/goods_search.php?Cd=&reSearchKeyword%5B%5D=%ED%94%8C%EB%A0%88%EC%96%B4+db&reSearchKey%5B%5D=all&pageNum=20&key=all&keyword=%ED%94%8C%EB%A0%88%EC%96%B4+%EC%9C%A0" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">에버라인</a>
        <a href="https://www.sound-wave.co.kr/product/search.html?banner_action=&keyword=%ED%94%8C%EB%A0%88%EC%96%B4+%EC%9C%A0" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">사운드웨이브</a>
        <a href="https://www.thebdm.co.kr/shop/shopbrand.html?search=FLARE%20U%20(%ED%94%8C%EB%A0%88%EC%96%B4%20%EC%9C%A0)&refer=https:" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">블루드림미디어</a>
        <a href="https://www.musicplant.co.kr/shop/search_result.php?search_str=%ED%94%8C%EB%A0%88%EC%96%B4+%EC%9C%A0&x=0&y=0" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">뮤직플랜트</a>
        <a href="https://shop.weverse.io/ko/shop/KRW/artists/289" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">위버스 샵</a>
        <a href="https://withmuu.com/goods/goods_list.php?brandCd=209" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">위드뮤</a>
        <a href="https://minirecord.store/search?q=%ED%94%8C%EB%A0%88%EC%96%B4%20%EC%9C%A0" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">미니레코드</a>
        <a href="https://www.mnetplusmerch.com/product/list.html?cate_no=130" target="_blank" class="btn-outline" style="text-align:center; padding: 14px 10px;">엠넷플러스머치</a>
    </div>
    <img src="image/Support_for_the_music_streaming_team/album_image.jpg" class="guide-img" alt="앨범 구매처 안내 이미지" style="margin-top: 20px;">`
};

const streamingBasicContents = {
    basic: `<img src="image/Streaming_basics/Basic_Streaming_Guide.png" class="guide-img" alt="스트리밍 기초 가이드 이미지">`,
    soundassist: `<img src="image/Streaming_basics/Sound_Assistant_Guide.png" class="guide-img" alt="사운드 어시스턴트 가이드 이미지">`,
    automate: `<div class="placeholder-box guide-placeholder">오토메이트 가이드 이미지</div>`,
    duckad: `<div class="img-sequence"><img src="image/Streaming_basics/Duckad_Guide1.png" class="guide-img" alt="덕애드 가이드 1"><img src="image/Streaming_basics/Duckad_Guide2.png" class="guide-img" alt="덕애드 가이드 2"><img src="image/Streaming_basics/Duckad_Guide3.png" class="guide-img" alt="덕애드 가이드 3"></div>`
};

// 가이드 컨텐츠 정의
const streamingContents = {
    melon: `<div class="img-sequence"><img src="image/streaming_guide/melon_guide_1.png" class="guide-img" alt="멜론스밍가이드_1"><img src="image/streaming_guide/melon_guide_2.png" class="guide-img" alt="멜론스밍가이드_2"></div>`,
    bugs: `<div class="img-sequence"><img src="image/streaming_guide/bugs_guide_1.png" class="guide-img" alt="벅스스밍가이드_1"><img src="image/streaming_guide/bugs_guide_2.png" class="guide-img" alt="벅스스밍가이드_2"></div>`,
    genie: `<div class="img-sequence"><img src="image/streaming_guide/genie_guide.png" class="guide-img" alt="지니스밍가이드"><img src="image/streaming_guide/genie_guide_app_setting.png" class="guide-img" alt="지니앱설정"></div>`,
    genieShare: `<div style="text-align: center; margin-bottom: 24px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <a href="#" target="_blank" class="btn-primary" style="padding: 12px 20px; font-size: 15px; border-radius: 50px; background-color: #5EB0ED; color: #fff; text-decoration: none;">지니 음악나누기 바로가기1</a>
        <a href="#" target="_blank" class="btn-primary" style="padding: 12px 20px; font-size: 15px; border-radius: 50px; background-color: #5EB0ED; color: #fff; text-decoration: none;">지니 음악나누기 바로가기2</a>
        <a href="#" target="_blank" class="btn-primary" style="padding: 12px 20px; font-size: 15px; border-radius: 50px; background-color: #5EB0ED; color: #fff; text-decoration: none;">지니 음악나누기 바로가기3</a>
        <a href="#" target="_blank" class="btn-primary" style="padding: 12px 20px; font-size: 15px; border-radius: 50px; background-color: #5EB0ED; color: #fff; text-decoration: none;">지니 음악나누기 바로가기4</a>
        <a href="#" target="_blank" class="btn-primary" style="padding: 12px 20px; font-size: 15px; border-radius: 50px; background-color: #5EB0ED; color: #fff; text-decoration: none;">지니 음악나누기 바로가기5</a>
    </div>
    <img src="image/streaming_guide/Genie_Music_Sharing_Guide.png" class="guide-img" alt="지니 음악나누기 가이드 이미지">`,
    flo: `<div class="img-sequence"><img src="image/streaming_guide/flo_guide.png" class="guide-img" alt="플로스밍가이드"><img src="image/streaming_guide/flo_app_setting_guide.png" class="guide-img" alt="플로앱설정"></div>`,
    spotify: `<div class="img-sequence"><img src="image/streaming_guide/Spotify_Streaming_Guide.png" class="guide-img" alt="스포티파이 스트리밍 가이드"><img src="image/streaming_guide/Spotify_App_Settings_Guide.png" class="guide-img" alt="스포티파이 앱설정 가이드"><img src="image/streaming_guide/Spotify_Playlist_Guide.png" class="guide-img" alt="스포티파이 플레이리스트 가이드"><img src="image/streaming_guide/Spotify_Streaming_Guide_Eng.png" class="guide-img" alt="스포티파이 영어 스트리밍 가이드"><img src="image/streaming_guide/Spotify_App_Settings_Guide_Eng.png" class="guide-img" alt="스포티파이 영어 앱설정 가이드"></div>`,
    youtube: `<div class="img-sequence"><img src="image/streaming_guide/YouTube_music_video_streaming_guide.png" class="guide-img" alt="유튜브 뮤비 스트리밍 가이드"><img src="image/streaming_guide/YouTube_music_video_streaming_guide_Eng.png" class="guide-img" alt="유튜브 뮤비 스트리밍 가이드(영문)"></div>`,
    mubit: `<div class="img-sequence"><img src="image/streaming_guide/Mubit_Video_Guide.png" class="guide-img" alt="뮤빗 가이드"><img src="image/streaming_guide/Higher_Video_Guide.png" class="guide-img" alt="하이어 뮤비 가이드"></div>`,
    samsung: `<div class="placeholder-box guide-placeholder">삼성뮤직(멜론) 가이드 이미지</div>`
};

const downloadContents = {
    melon: `<div class="img-sequence"><img src="image/download_guide/melon_mobile.png" class="guide-img" alt="멜론다운모바일"><img src="image/download_guide/melon_pc.png" class="guide-img" alt="멜론다운PC"></div>`,
    melonGift: `<img src="image/download_guide/Melon_Gift_Guide1.jpg" class="guide-img" alt="멜론 선물하기 가이드 이미지">`,
    bugs: `<div class="img-sequence"><img src="image/download_guide/bugs_mobile.png" class="guide-img" alt="벅스다운모바일"><img src="image/download_guide/bugs_pc.png" class="guide-img" alt="벅스다운PC"></div>`,
    genie: `<div class="img-sequence"><img src="image/download_guide/genie_mobile.png" class="guide-img" alt="지니다운모바일"><img src="image/download_guide/genie_pc.png" class="guide-img" alt="지니다운PC"></div>`,
    mv: `<div class="placeholder-box guide-placeholder">뮤비 다운로드 가이드 이미지</div>`,
    kakao: `<img src="image/download_guide/KakaoMusic_Down_Guide.png" class="guide-img" alt="카카오뮤직 다운로드 가이드 이미지">`,
    vcolor: `<div class="placeholder-box guide-placeholder">V컬러링 가이드 이미지</div>`
};

const musicshowContents = {
    showchamp: `<div class="img-sequence"><img src="image/musicshow_guide/showchamp_basic.png" class="guide-img" alt="쇼챔피언가이드"><img src="image/musicshow_guide/showchamp_resources.png" class="guide-img" alt="쇼챔피언재화"></div>`,
    mcount: `<div class="img-sequence"><img src="image/musicshow_guide/mcount_basic.png" class="guide-img" alt="엠카가이드"></div>`,
    musicbank: `<div class="img-sequence"><img src="image/musicshow_guide/musicbank_basic.png" class="guide-img" alt="뮤뱅가이드"><img src="image/musicshow_guide/musicbank_resources.png" class="guide-img" alt="뮤뱅재화"></div>`,
    musiccore: `<div class="img-sequence"><img src="image/musicshow_guide/musiccore_basic.png" class="guide-img" alt="음중가이드"><img src="image/musicshow_guide/musiccore_resources.png" class="guide-img" alt="음중재화"><img src="image/musicshow_guide/musiccore_stagem_basic.png" class="guide-img" alt="음중스테이지엠픽"><img src="image/musicshow_guide/musiccore_stagem_resources.png" class="guide-img" alt="음중스테이지엠픽재화"></div>`,
    inkigayo: `<div class="img-sequence"><img src="image/musicshow_guide/inkigayo_basic.png" class="guide-img" alt="인가가이드"><img src="image/musicshow_guide/inkigayo_linc_resources.png" class="guide-img" alt="인가링크재화"><img src="image/musicshow_guide/inkigayo_higher_resources.png" class="guide-img" alt="인가하이어재화"></div>`
};

const radioContents = {
    kbs: `<div style="text-align: center; margin-bottom: 24px;"><a href="sms:%238910?body=%EC%9A%94%EC%A6%98%20%EB%82%A0%EC%94%A8%EB%9E%91%20%EC%A0%95%EB%A7%90%20%EC%9E%98%20%EC%96%B4%EC%9A%B8%EB%A6%AC%EB%8A%94%20%EB%85%B8%EB%9E%98%EB%9D%BC%20%EC%8B%A0%EC%B2%AD%ED%95%B4%EB%B4%85%EB%8B%88%EB%8B%A4%20:)%20%EB%93%A3%EA%B3%A0%20%EC%9E%88%EC%9C%BC%EB%A9%B4%20%EA%B4%9C%ED%9E%88%20%EA%B8%B0%EB%B6%84%EA%B9%8C%EC%A7%80%20%EC%82%B0%EB%9C%BB%ED%95%B4%EC%A7%80%EB%8A%94%20%EA%B3%A1%EC%9D%B4%EC%97%90%EC%9A%94.%ED%94%8C%EB%A0%88%EC%96%B4%EC%9C%A0%EC%9D%98%20WAY%202%20U%20%EB%93%A4%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94!" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #AEC83E; color: #fff; box-shadow: 0 4px 12px rgba(174,200,62,0.3); display: inline-flex; align-items: center; gap: 8px;">KBS CoolFM 바로 신청</a></div><img src="image/Radio/Radio_KBS.png" class="guide-img" alt="KBS 라디오 상세 가이드">`,
    mbc: `<div style="text-align: center; margin-bottom: 24px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;"><a href="sms:%238001?body=%EC%9A%94%EC%A6%98%20%EB%82%A0%EC%94%A8%EB%9E%91%20%EC%A0%95%EB%A7%90%20%EC%9E%98%20%EC%96%B4%EC%9A%B8%EB%A6%AC%EB%8A%94%20%EB%85%B8%EB%9E%98%EB%9D%BC%20%EC%8B%A0%EC%B2%AD%ED%95%B4%EB%B4%85%EB%8B%88%EB%8B%A4%20:)%20%EB%93%A3%EA%B3%A0%20%EC%9E%88%EC%9C%BC%EB%A9%B4%20%EA%B4%9C%ED%9E%88%20%EA%B8%B0%EB%B6%84%EA%B9%8C%EC%A7%80%20%EC%82%B0%EB%9C%BB%ED%95%B4%EC%A7%80%EB%8A%94%20%EA%B3%A1%EC%9D%B4%EC%97%90%EC%9A%94.%ED%94%8C%EB%A0%88%EC%96%B4%EC%9C%A0%EC%9D%98%20WAY%202%20U%20%EB%93%A4%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94!" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #7F57DE; color: #fff; box-shadow: 0 4px 12px rgba(127,87,222,0.3); display: inline-flex; align-items: center; gap: 8px;">MBC 표준FM 바로 신청</a><a href="sms:%238000?body=%EC%9A%94%EC%A6%98%20%EB%82%A0%EC%94%A8%EB%9E%91%20%EC%A0%95%EB%A7%90%20%EC%9E%98%20%EC%96%B4%EC%9A%B8%EB%A6%AC%EB%8A%94%20%EB%85%B8%EB%9E%98%EB%9D%BC%20%EC%8B%A0%EC%B2%AD%ED%95%B4%EB%B4%85%EB%8B%88%EB%8B%A4%20:)%20%EB%93%A3%EA%B3%A0%20%EC%9E%88%EC%9C%BC%EB%A9%B4%20%EA%B4%9C%ED%9E%88%20%EA%B8%B0%EB%B6%84%EA%B9%8C%EC%A7%80%20%EC%82%B0%EB%9C%BB%ED%95%B4%EC%A7%80%EB%8A%94%20%EA%B3%A1%EC%9D%B4%EC%97%90%EC%9A%94.%ED%94%8C%EB%A0%88%EC%96%B4%EC%9C%A0%EC%9D%98%20WAY%202%20U%20%EB%93%A4%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94!" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #7F57DE; color: #fff; box-shadow: 0 4px 12px rgba(127,87,222,0.3); display: inline-flex; align-items: center; gap: 8px;">MBC FM4U 바로 신청</a></div><img src="image/Radio/Radio_MBC.png" class="guide-img" alt="MBC 라디오 상세 가이드">`,
    sbs: `<div style="text-align: center; margin-bottom: 24px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;"><a href="sms:%231077?body=%EC%9A%94%EC%A6%98%20%EB%82%A0%EC%94%A8%EB%9E%91%20%EC%A0%95%EB%A7%90%20%EC%9E%98%20%EC%96%B4%EC%9A%B8%EB%A6%AC%EB%8A%94%20%EB%85%B8%EB%9E%98%EB%9D%BC%20%EC%8B%A0%EC%B2%AD%ED%95%B4%EB%B4%85%EB%8B%88%EB%8B%A4%20:)%20%EB%93%A3%EA%B3%A0%20%EC%9E%88%EC%9C%BC%EB%A9%B4%20%EA%B4%9C%ED%9E%88%20%EA%B8%B0%EB%B6%84%EA%B9%8C%EC%A7%80%20%EC%82%B0%EB%9C%BB%ED%95%B4%EC%A7%80%EB%8A%94%20%EA%B3%A1%EC%9D%B4%EC%97%90%EC%9A%94.%ED%94%8C%EB%A0%88%EC%96%B4%EC%9C%A0%EC%9D%98%20WAY%202%20U%20%EB%93%A4%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94!" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #82C6F8; color: #111; box-shadow: 0 4px 12px rgba(130,198,248,0.3); display: inline-flex; align-items: center; gap: 8px;">SBS 파워FM 바로 신청</a><a href="sms:%231035?body=%EC%9A%94%EC%A6%98%20%EB%82%A0%EC%94%A8%EB%9E%91%20%EC%A0%95%EB%A7%90%20%EC%9E%98%20%EC%96%B4%EC%9A%B8%EB%A6%AC%EB%8A%94%20%EB%85%B8%EB%9E%98%EB%9D%BC%20%EC%8B%A0%EC%B2%AD%ED%95%B4%EB%B4%85%EB%8B%88%EB%8B%A4%20:)%20%EB%93%A3%EA%B3%A0%20%EC%9E%88%EC%9C%BC%EB%A9%B4%20%EA%B4%9C%ED%9E%88%20%EA%B8%B0%EB%B6%84%EA%B9%8C%EC%A7%80%20%EC%82%B0%EB%9C%BB%ED%95%B4%EC%A7%80%EB%8A%94%20%EA%B3%A1%EC%9D%B4%EC%97%90%EC%9A%94.%ED%94%8C%EB%A0%88%EC%96%B4%EC%9C%A0%EC%9D%98%20WAY%202%20U%20%EB%93%A4%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94!" class="btn-primary" style="padding: 16px 40px; font-size: 18px; border-radius: 50px; background-color: #82C6F8; color: #111; box-shadow: 0 4px 12px rgba(130,198,248,0.3); display: inline-flex; align-items: center; gap: 8px;">SBS 러브FM 바로 신청</a></div><img src="image/Radio/Radio_SBS.png" class="guide-img" alt="SBS 라디오 상세 가이드">`
};

// 페이지별 HTML 템플릿 데이터
const pages = {
    home: `
        <div style="text-align: center; margin-bottom: 20px;">
            <span style="background: #E5F3FD; color: #1072B8; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">Youtube MV</span>
        </div>
        <div class="youtube-mv" style="border-radius: 16px; overflow: hidden; background: #000; box-shadow: 0 8px 24px rgba(0,0,0,0.1);">
            <!-- 하단의 src="https://www.youtube.com/embed/영상ID" 부분의 영상ID를 실제 뮤비 ID로 바꿔주시면 됩니다. -->
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bHgc0kmHYTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: block;"></iframe>
        </div>
        
        <div class="carousel-container" id="main-carousel">
            <div class="carousel-track" id="carousel-track">
                <a href="#" class="carousel-item" onclick="gotoTab('streaming', '음악나누기'); return false;">
                    <img src="image/Home/Carousel_Banner1.png" alt="지니 음악나누기 바로가기">
                </a>
                <a href="#" class="carousel-item" onclick="playOneClick('musicwave'); return false;">
                    <img src="image/Home/Carousel_Banner2.png" alt="멜론 뮤직웨이브 바로가기">
                </a>
                <a href="#" class="carousel-item" onclick="gotoTab('streaming', '음악나누기'); return false;" aria-hidden="true">
                    <img src="image/Home/Carousel_Banner1.png" alt="지니 음악나누기 바로가기">
                </a>
            </div>
            <button class="carousel-btn prev" onclick="moveCarousel(-1)">&#10094;</button>
            <button class="carousel-btn next" onclick="moveCarousel(1)">&#10095;</button>
            <div class="carousel-indicators">
                <span class="dot active" onclick="currentCarousel(0)"></span>
                <span class="dot" onclick="currentCarousel(1)"></span>
            </div>
        </div>

        <div class="pill-btn-grid home-shortcuts">
            <div class="pill-btn" style="background-color: #F8FBFE;" onclick="document.querySelector('[data-target=\\'oneclick\\']').click()"><span class="pill-icon">🎵</span> 원클릭 스밍</div>
            <div class="pill-btn" style="background-color: #FEFAED;" onclick="document.querySelector('[data-target=\\'radio\\']').click()"><span class="pill-icon">📻</span> 라디오 원클릭</div>
            <div class="pill-btn" style="background-color: #F9F1F6;" onclick="document.querySelector('[data-target=\\'support\\']').click()"><span class="pill-icon">🤝</span> 음총 서포트</div>
        </div>

        <div class="official-links-wrapper">
            <a href="https://www.youtube.com/@flareu_official" target="_blank" rel="noopener noreferrer" class="official-link-item" title="공식 유튜브">
                <img src="image/Home/youtube_icon.png" class="official-icon-img" alt="YT">
                <span class="official-link-text">공식 유튜브</span>
            </a>
            <a href="https://instagram.com/flareu_official" target="_blank" rel="noopener noreferrer" class="official-link-item" title="공식 인스타그램">
                <img src="image/Home/instagram_icon.png" class="official-icon-img" alt="IG">
                <span class="official-link-text">공식 인스타</span>
            </a>
            <a href="https://x.com/flareu_official" target="_blank" rel="noopener noreferrer" class="official-link-item" title="공식 X">
                <img src="image/Home/X_icon.png" class="official-icon-img" alt="X">
                <span class="official-link-text">공식 X</span>
            </a>
            <a href="https://flareu.oopy.io/" target="_blank" rel="noopener noreferrer" class="official-link-item" title="공식 사이트">
                <img src="image/Home/site_icon.png" class="official-icon-img" alt="WEB">
                <span class="official-link-text">공식 사이트</span>
            </a>
            <a href="https://x.com/FlareU_stream" target="_blank" rel="noopener noreferrer" class="official-link-item" title="음총팀 X">
                <img src="image/Home/X_icon.png" class="official-icon-img" alt="X">
                <span class="official-link-text">음총팀 X</span>
            </a>
        </div>
    `,
    oneclick: `
        <h1 class="page-title">원클릭 스트리밍</h1>
        <p class="page-desc">원하시는 플랫폼의 아이콘을 클릭하면 즉시 스트리밍이 가능합니다!</p>
        
        <div class="platform-icons">
            <div class="icon-box" onclick="changeContent(this); playOneClick('melon')"><img src="image/oneclick_streaming/melon.png" class="icon-img" alt="멜론"><span class="icon-name">멜론</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('bugs')"><img src="image/oneclick_streaming/bugs.png" class="icon-img" alt="벅스"><span class="icon-name">벅스</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('genie')"><img src="image/oneclick_streaming/genie.png" class="icon-img" alt="지니"><span class="icon-name">지니</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('flo')"><img src="image/oneclick_streaming/flo.png" class="icon-img" alt="플로"><span class="icon-name">플로</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('spotify')"><img src="image/oneclick_streaming/spotify.png" class="icon-img" alt="스포티파이"><span class="icon-name">스포티파이</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('apple')"><img src="image/oneclick_streaming/applemusic_logo.webp" class="icon-img" alt="애플"><span class="icon-name">애플뮤직</span></div>
            <div class="icon-box" onclick="changeContent(this); playOneClick('musicwave')"><img src="image/oneclick_streaming/melon_musicwave.png" class="icon-img" alt="뮤직웨이브"><span class="icon-name">뮤직웨이브</span></div>
        </div>

        <div class="recommended-list-wrapper">
            <h2 class="recommended-list-title">권장 스트리밍 리스트</h2>
            <img src="image/oneclick_streaming/Recommended_streaming_list.jpg" class="guide-img" alt="권장 스트리밍 리스트 이미지">
        </div>
    `,
    streaming: `
        <h1 class="page-title">스밍 가이드</h1>
        <p class="page-desc">스트리밍이 정상적으로 집계될 수 있게 가이드를 지켜주세요.</p>
        
        <div class="tabs">
            <div class="tab active" onclick="changeContent(this, 'streaming-placeholder', streamingContents.melon)">멜론</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.bugs)">벅스</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.genie)">지니</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.genieShare)">지니 음악나누기</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.flo)">플로</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.spotify)">스포티파이</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.youtube)">유튜브 뮤비</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.mubit)">뮤빗/하이어 뮤비</div>
            <div class="tab" onclick="changeContent(this, 'streaming-placeholder', streamingContents.samsung)">삼성뮤직(멜론)</div>
        </div>

        <div id="streaming-placeholder">
            ${streamingContents.melon}
        </div>
        <p style="text-align: right; font-size: 11px; color: #888; margin-top: 8px;">※ 이미지를 터치하면 더 크게 볼 수 있습니다.</p>
    `,
    download: `
        <h1 class="page-title">음원 다운로드 가이드</h1>
        <p class="page-desc">다운로드가 정상적으로 집계될 수 있게 가이드를 지켜주세요.</p>
        
        <div class="tabs download-tabs">
            <div class="tab active" onclick="changeContent(this, 'download-placeholder', downloadContents.melon)">멜론 음원</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', downloadContents.melonGift)">멜론 선물하기</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', downloadContents.bugs)">벅스 음원</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', downloadContents.genie)">지니 음원</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', downloadContents.mv)">뮤비 다운</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', downloadContents.kakao)">카카오뮤직</div>
            <div class="tab" onclick="changeContent(this, 'download-placeholder', downloadContents.vcolor)">V컬러링</div>
        </div>

        <div id="download-placeholder">
            ${downloadContents.melon}
        </div>
        <p style="text-align: right; font-size: 11px; color: #888; margin-top: 8px;">※ 이미지를 터치하면 더 크게 볼 수 있습니다.</p>
    `,
    musicshow: `
        <h1 class="page-title">음악방송 가이드</h1>
        <p class="page-desc">음악방송 1위 달성을 위한 실시간 반영 비율과 투표 일정을 한눈에 확인하세요.</p>
        
        <div class="musicshow-top">
            <div class="ms-box">
                <div class="ms-title">방송 반영 비율 <span style="color:#00E4B7;">📊</span></div>
                <img src="image/musicshow_guide/musicshow_ratio.png" class="guide-img" alt="반영비율">
            </div>
            <div class="ms-box">
                <div class="ms-title">투표 일정 <span style="color:#0096FF;">📅</span></div>
                <img src="image/musicshow_guide/musicshow_schedule.png" class="guide-img" alt="투표일정">
            </div>
        </div>

        <div style="background: #FFFFFF; padding: 40px; border-radius: 16px; text-align: center; border: 1px solid var(--border-color);">
            <h2 style="font-size: 24px; margin-bottom: 8px;">방송사별 상세 가이드</h2>
            <p style="color: var(--text-sub); margin-bottom: 30px;">각 방송사 아이콘을 클릭하여 상세한 집계 방식과 투표 가이드를 확인하세요.</p>
            
            <div class="tabs" style="justify-content: center;">
                <div class="tab active" onclick="changeContent(this, 'musicshow-placeholder', musicshowContents.showchamp, 'musicshow-title', '쇼챔피언')">쇼챔피언</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', musicshowContents.mcount, 'musicshow-title', '엠카운트다운')">엠카운트다운</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', musicshowContents.musicbank, 'musicshow-title', '뮤직뱅크')">뮤직뱅크</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', musicshowContents.musiccore, 'musicshow-title', '음악중심')">음악중심</div>
                <div class="tab" onclick="changeContent(this, 'musicshow-placeholder', musicshowContents.inkigayo, 'musicshow-title', '인기가요')">인기가요</div>
            </div>
            
            <div style="text-align: left; margin-top: 20px;">
                <h3 style="font-size: 20px; margin-bottom: 20px; display:flex; align-items:center; gap:10px;">
                    <span style="background:#00E4B7; color:white; width:32px; height:32px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center;">📖</span> 
                    <span id="musicshow-title">쇼챔피언 상세 가이드</span>
                </h3>
                <div id="musicshow-placeholder">
                    ${musicshowContents.showchamp}
                </div>
                <p style="text-align: right; font-size: 11px; color: #888; margin-top: 8px;">※ 이미지를 터치하면 더 크게 볼 수 있습니다.</p>
            </div>
        </div>
    `,
    radio: `
        <h1 class="page-title">방송사별 라디오 원클릭</h1>
        <p class="page-desc">KBS, MBC, SBS의 주요 라디오 채널을 한 번에 확인하고 스트리밍 가이드를 바로 확인하세요.</p>

        <div class="card-grid">
            <div class="info-card active" style="border-top: 4px solid #DDEA8D;" onclick="changeContent(this, 'radio-placeholder', radioContents.kbs)">
                <h3>KBS</h3>
                <p>뮤직뱅크 방송점수 20% 반영!</p>
                <div class="info-link" style="color:#AEC83E;">가이드 보기 →</div>
            </div>
            <div class="info-card" style="border-top: 4px solid #7F57DE;" onclick="changeContent(this, 'radio-placeholder', radioContents.mbc)">
                <h3>MBC</h3>
                <p>음악중심 방송점수 10% 반영!</p>
                <div class="info-link" style="color:#7F57DE;">가이드 보기 →</div>
            </div>
            <div class="info-card" style="border-top: 4px solid #82C6F8;" onclick="changeContent(this, 'radio-placeholder', radioContents.sbs)">
                <h3>SBS</h3>
                <p>인기가요 방송점수 10% 반영!</p>
                <div class="info-link" style="color:#82C6F8;">가이드 보기 →</div>
            </div>
        </div>

        <div id="radio-placeholder">
            ${radioContents.kbs}
        </div>
    `,
    streaming_basic: `
        <h1 class="page-title">스트리밍 기초</h1>
        <p class="page-desc">스트리밍을 위한 기본 설정과 유용한 앱 사용법을 안내합니다.</p>
        
        <div class="tabs">
            <div class="tab active" onclick="changeContent(this, 'streaming-basic-placeholder', streamingBasicContents.basic)">스트리밍 기초 가이드</div>
            <div class="tab" onclick="changeContent(this, 'streaming-basic-placeholder', streamingBasicContents.soundassist)">사운드 어시스턴트</div>
            <div class="tab" onclick="changeContent(this, 'streaming-basic-placeholder', streamingBasicContents.automate)">오토메이트 가이드</div>
            <div class="tab" onclick="changeContent(this, 'streaming-basic-placeholder', streamingBasicContents.duckad)">덕애드 가이드</div>
        </div>

        <div id="streaming-basic-placeholder">
            ${streamingBasicContents.basic}
        </div>
        <p style="text-align: right; font-size: 11px; color: #888; margin-top: 8px;">※ 이미지를 터치하면 더 크게 볼 수 있습니다.</p>
    `,
    support: `
        <div style="text-align: center; margin-bottom: 40px;">
            <h1 class="page-title">음총 서포트</h1>
            <p class="page-desc" style="margin-bottom:0;">음원 차트 반영을 위한 서포트에 참여해주세요.</p>
        </div>

        <div class="pill-btn-grid">
            <div class="pill-btn active" style="background-color: #EDF3F8;" onclick="changeContent(this, 'support-placeholder', supportContents.genie)"><span class="pill-icon">🧞‍♂️</span> 지니 아이디 기부</div>
            <div class="pill-btn" style="background-color: #F9EBED;" onclick="changeContent(this, 'support-placeholder', supportContents.bugs)"><span class="pill-icon">🎧</span> 벅스 아이디 기부</div>
            <div class="pill-btn" style="background-color: #EEF4FA;" onclick="changeContent(this, 'support-placeholder', supportContents.dual)"><span class="pill-icon">📱</span> 듀얼넘버 가이드</div>
            <div class="pill-btn" style="background-color: #E6F7F1;" onclick="changeContent(this, 'support-placeholder', supportContents.fund)"><span class="pill-icon">💸</span> 모금 참여</div>
            <div class="pill-btn" style="background-color: #FEF0E7;" onclick="changeContent(this, 'support-placeholder', supportContents.helper)"><span class="pill-icon">🤝</span> 헬퍼 지원</div>
            <div class="pill-btn" style="background-color: #E5F6FE;" onclick="changeContent(this, 'support-placeholder', supportContents.album)"><span class="pill-icon">💿</span> 앨범 구매</div>
        </div>

        <div id="support-placeholder">
            ${supportContents.genie}
        </div>
    `
};

// 이전 index.html 버전을 위해 id_donation 탭과 support 탭을 동일하게 연결 (캐시 문제 방지)
pages['id_donation'] = pages['support'];

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
    
    // 안드로이드 환경에서는 intent 스킴을 사용하여 멜론 앱을 강제로 열어줍니다.
    const isAndroid = /android/i.test(userAgent);
    const musicwaveMobile = isAndroid 
        ? 'intent://musicwave.melon.com/musicwave.htm?a=Y&m=pY_guuANgzNwZKN8mCNOcA#Intent;scheme=https;package=com.iloen.melon;end'
        : musicwaveLink;
    
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
        'apple': { mobile: null, pc: null },
        'youtube': { mobile: null, pc: null },
        'musicwave': {
            mobile: musicwaveMobile,
            pc: musicwaveLink
        }
    };

    // 3. 기기에 맞는 주소 추출 및 창 열기
    const targetUrl = isMobile ? links[platform].mobile : links[platform].pc;
    
    if(targetUrl) {
        if (!isMobile && targetUrl.startsWith('http')) {
            // PC 웹 플레이어는 팝업창(새 탭)으로 열기
            const a = document.createElement('a');
            a.href = targetUrl;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            // 모바일은 딥링크(앱 실행) 처리를 위해 현재 창에서 그대로 연결
            // (뮤직웨이브 등 웹 주소를 쓰는 경우에도 모바일에서는 앱으로 자동 연결되도록 유도)
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

// 특정 탭으로 바로 이동하는 글로벌 함수
window.gotoTab = function(pageId, tabText) {
    const navLink = document.querySelector(`[data-target='${pageId}']`);
    if(navLink) navLink.click();
    setTimeout(() => {
        const tabs = document.querySelectorAll('.tab');
        for(let tab of tabs) {
            if(tab.innerText.includes(tabText)) {
                tab.click();
                break;
            }
        }
    }, 50);
};

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

            // 라디오 원클릭, 음총 서포트 페이지인 경우 하단 이미지로 스크롤
            if (targetId === 'radio-placeholder' || targetId === 'support-placeholder') {
                const headerOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
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
    
    if (pageId === 'home') {
        startCarousel();
    }
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

    if (clone.tagName.toLowerCase() === 'img') {
        clone.style.objectFit = 'contain';
        clone.style.backgroundColor = 'transparent';
    }
    
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

    // 3. 라이트박스 실행 (회색 이미지 박스 또는 가이드 이미지 클릭 시)
    const placeholder = e.target.closest('.placeholder-box');
    const guideImg = e.target.closest('.guide-img');
    
    if (placeholder && !placeholder.closest('.icon-box')) {
        window.openLightbox(placeholder);
    } else if (guideImg) {
        window.openLightbox(guideImg);
    }
});

// Carousel JS Logic
window.carouselIndex = 0;
window.carouselInterval = null;

window.moveCarousel = function(step) {
    showCarousel(window.carouselIndex + step);
};

window.currentCarousel = function(index) {
    showCarousel(index);
};

window.showCarousel = function(index) {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    if(!track || dots.length === 0) return;
    
    if (index > 2) {
        track.style.transition = 'none';
        track.style.transform = `translateX(0)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
            showCarousel(1);
        }, 10);
        return;
    }
    if (index < 0) {
        track.style.transition = 'none';
        track.style.transform = `translateX(-66.666%)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
            showCarousel(1);
        }, 10);
        return;
    }

    track.style.transform = `translateX(-${index * 33.333}%)`;
    
    if (index === 2) {
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = `translateX(0)`;
            window.carouselIndex = 0;
        }, 500);
    }
    
    window.carouselIndex = index === 2 ? 0 : index;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === window.carouselIndex);
    });
    
    resetCarouselInterval();
};

window.resetCarouselInterval = function() {
    if(window.carouselInterval) clearInterval(window.carouselInterval);
    window.carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000); 
};

function startCarousel() {
    window.carouselIndex = 0;
    const track = document.getElementById('carousel-track');
    if(track) {
        track.style.transition = 'none';
        track.style.transform = `translateX(0)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
        }, 10);
    }
    resetCarouselInterval();
}
