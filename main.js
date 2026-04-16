function generateLotto() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // 이전 결과 삭제

    for (let i = 0; i < 5; i++) {
        const numbers = [];
        while (numbers.length < 6) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        // 숫자 정렬
        numbers.sort((a, b) => a - b);
        
        // 행 생성
        const row = document.createElement('div');
        row.className = 'lotto-row';

        // 공 생성 및 색상 부여
        numbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = num;
            ball.style.backgroundColor = getBallColor(num);
            row.appendChild(ball);
        });

        resultDiv.appendChild(row);
    }
}

// 실제 로또 공 색상과 유사하게 지정
function getBallColor(num) {
    if (num <= 10) return '#fbc400'; // 노랑
    if (num <= 20) return '#69c8f2'; // 파랑
    if (num <= 30) return '#ff7285'; // 빨강
    if (num <= 40) return '#aaaaaa'; // 회색
    return '#b0d840'; // 초록
}

// 테마 토글 기능
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = '☀️ 화이트 모드';
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 다크 모드';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ 화이트 모드';
    }
});
