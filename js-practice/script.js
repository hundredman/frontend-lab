// 실습 1: 버튼을 누르면 alert 띄우기
document.getElementById('btn-alert').addEventListener('click', function () {
  alert('안녕하세요! 자바스크립트 시작이에요!');
});

// 실습 2: 함수 선언하고 버튼으로 실행하기
function sayHello() {
  alert('Hello! 함수가 실행되었어요!');
}

document.getElementById('btn-func').addEventListener('click', function () {
  sayHello();
});

// 실습 3: 파라미터를 사용하는 함수
function sayHello(name) {
  alert(name + '님, 안녕하세요!');
}

document.getElementById('btn-greet').addEventListener('click', function () {
  const userName = document.getElementById('input-name').value;
  sayHello(userName);
});

// 실습 4: 다양한 이벤트 리스너 연습

// 1. 클릭 이벤트
document.getElementById('btn-click').addEventListener('click', function () {
  alert('클릭 이벤트 감지!');
});

// 2. 더블클릭 이벤트
document.getElementById('btn-dblclick').addEventListener('dblclick', function () {
  alert('더블클릭 이벤트 감지!');
});

// 3. 마우스 오버 이벤트
document.getElementById('input-hover').addEventListener('mouseover', function () {
  alert('마우스를 올렸어요!');
});

// 실습 5: classList로 서브메뉴 토글하기
document.getElementById('btn-menu').addEventListener('click', function () {
  document.getElementById('submenu').classList.toggle('hidden');
});

// 실습 6: jQuery로 텍스트 숨기기/보이기
$(document).ready(function () {
  $('#btn-jq-toggle').on('click', function () {
    $('#text-jq').toggle();  // 토글: 숨김 <-> 보임 전환
  });
});

// 실습 7: 모달 열기/닫기
document.getElementById('btn-modal').addEventListener('click', function () {
  document.getElementById('modal-bg').classList.remove('hidden');
});

document.getElementById('btn-close').addEventListener('click', function () {
  document.getElementById('modal-bg').classList.add('hidden');
});

// 실습 8: if/else로 입력값 검사하기
document.getElementById('btn-check').addEventListener('click', function () {
  const name = document.getElementById('input-check').value;

  if (name === '') {
    alert('⚠️ 이름을 입력하지 않았어요!');
  } else {
    alert(`환영합니다, ${name}님!`);
  }
});

// 실습 9: else if로 여러 조건 처리하기
document.getElementById('btn-check-elseif').addEventListener('click', function () {
  const name = document.getElementById('input-check').value;

  if (name === '') {
    alert('⚠️ 이름을 입력해주세요!');
  } else if (name.toLowerCase() === 'admin') {
    alert('👑 관리자님 환영합니다!');
  } else {
    alert(`${name}님 반갑습니다!`);
  }
});

// 실습 10: change 이벤트 + and/or 연산자 사용
document.getElementById('btn-validate').addEventListener('click', function () {
  const name = document.getElementById('input-username').value;
  const age = document.getElementById('input-age').value;

  // 둘 중 하나라도 빈칸이면 경고
  if (name === '' || age === '') {
    alert('⚠️ 이름과 나이를 모두 입력해주세요!');
  }
  // 나이가 100세 이상이면 제한
  else if (Number(age) > 100) {
    alert('⚠️ 나이는 100세 이하로 입력해주세요!');
  }
  // 조건을 모두 만족하면
  else {
    alert(`${name}님은 ${age}세입니다. 환영합니다!`);
  }
});

// 실습 11: 함수 + if/else 종합 실력과제
function validateLogin(username, password) {
  if (username === '' || password === '') {
    alert('⚠️ 이름과 비밀번호를 모두 입력해주세요!');
  } else if (username.toLowerCase() === 'admin' && password === '1234') {
    alert('👑 관리자님, 환영합니다!');
  } else {
    alert(`${username}님 반갑습니다!`);
  }
}

document.getElementById('btn-join').addEventListener('click', function () {
  const user = document.getElementById('input-user').value;
  const pass = document.getElementById('input-pass').value;
  validateLogin(user, pass);
});

// 실습 12: 변수 + 다크모드 토글 기능
const btnDark = document.getElementById('btn-dark');

btnDark.addEventListener('click', function () {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode'); // 토글 결과(true/false 반환)

  this.textContent = isDarkMode ? '다크모드 끄기' : '다크모드 켜기';
});

// 실습 13: 변수 + 사칙연산 계산기
document.getElementById('btn-add').addEventListener('click', function () {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const sum = num1 + num2;

  document.getElementById('result-add').textContent = `결과: ${sum}`;
});

// 실습 14: setTimeout으로 3초 후 실행
document.getElementById('btn-timer').addEventListener('click', function () {
  alert('버튼을 누르셨습니다. 3초 후 메시지가 뜹니다!');

  setTimeout(function () {
    alert('⏰ 짜잔! 3초가 지났어요.');
  }, 3000); // 3000ms = 3초
});

// 실습 15: 정규식으로 이메일 형식 검사
document.getElementById('btn-email-check').addEventListener('click', function () {
  const email = document.getElementById('input-email').value;
  const result = document.getElementById('result-email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    result.textContent = '⚠️ 이메일을 입력해주세요.';
    result.style.color = 'red';
  } else if (!emailPattern.test(email)) {
    result.textContent = '❌ 이메일 형식이 아닙니다.';
    result.style.color = 'red';
  } else {
    result.textContent = '✅ 사용 가능한 이메일입니다!';
    result.style.color = 'green';
  }
});

// 실습 16: 캐러셀 코드 3줄 슬라이드
// 실습 17: 캐러셀 양방향 + 범위 제한
const carouselList = document.getElementById('carousel-list');
const totalSlides = carouselList.children.length;
const slideWidth = 200;

let currentIndex = 0;

document.getElementById('btn-next').addEventListener('click', function () {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    carouselList.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
});

document.getElementById('btn-prev').addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    carouselList.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
});

// 실습 18: return과 소수 반올림
function divideAndRound(a, b) {
  if (b === 0) return '❌ 0으로 나눌 수 없습니다.';
  const result = a / b;
  return result.toFixed(2); // 소수 둘째 자리까지 (문자열 반환)
}

document.getElementById('btn-divide').addEventListener('click', function () {
  const num1 = Number(document.getElementById('divide-num1').value);
  const num2 = Number(document.getElementById('divide-num2').value);
  const result = divideAndRound(num1, num2);

  document.getElementById('result-divide').textContent = `결과: ${result}`;
});

// 실습 19: 스크롤 이벤트로 메뉴 보이기
window.addEventListener('scroll', function () {
  const scrollMenu = document.getElementById('scroll-menu');
  const scrollY = window.scrollY; // 현재 스크롤 위치

  if (scrollY > 200) {
    scrollMenu.classList.remove('hidden-menu'); // 메뉴 보이기
  } else {
    scrollMenu.classList.add('hidden-menu'); // 메뉴 숨기기
  }
});

// 실습 20: 스크롤 위치 따라 '위로가기' 버튼 토글
const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    btnTop.classList.remove('hidden');
  } else {
    btnTop.classList.add('hidden');
  }
});

// 클릭 시 부드럽게 최상단 이동
btnTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 실습 21: 탭 기능 + for 반복문
// 실습 22: 탭 기능 forEach + 함수로 구조화
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// 탭 전부 초기화
function clearTabs() {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));
}

// 탭 활성화
function activateTab(index) {
  tabButtons[index].classList.add('active');
  tabContents[index].classList.add('active');
}

// 이벤트 연결 (forEach 버전)
tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    clearTabs();
    activateTab(index);
  });
});