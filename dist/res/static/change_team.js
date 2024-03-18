document.addEventListener("DOMContentLoaded", function() {
    // 연도별 정보를 업데이트하는 함수
    function updateInfo(year) {
        document.querySelectorAll('[id^="team-"]').forEach(function(el) {
            el.style.display = 'none'; // 모든 정보 숨기기
        });
        document.getElementById(`team-${year}`).style.display = 'block'; // 선택된 연도의 정보 표시

        AOS.init(); // AOS를 다시 초기화합니다.
        AOS.refresh(); // AOS 상태를 갱신합니다.
    }

    // 각 연도 버튼에 대한 이벤트 리스너 설정
    document.querySelectorAll('[id^="year-"]').forEach(function(btn) {
        btn.addEventListener('change', function() {
            if (this.checked) {
                updateInfo(this.id.split('-')[1]);
            }
        });
    });

    // 초기 정보 업데이트 (페이지 로드 시)
    const currentYear = document.querySelector('[name="year"]:checked').id.split('-')[1];
    updateInfo(currentYear);
    AOS.init();
});