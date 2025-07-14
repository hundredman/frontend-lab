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

// 실습 23: 이벤트 버블링과 event 객체
document.getElementById('card-example').addEventListener('click', function (event) {
  alert('🟦 카드가 클릭되었습니다!');
  console.log('event.target:', event.target);           // 실제 클릭된 요소
  console.log('event.currentTarget:', event.currentTarget); // 이벤트가 연결된 요소
});

// 실습 24: 이벤트 위임 + dataset 활용
document.getElementById('button-group').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const index = event.target.dataset.index; // data-index 값 가져오기
    alert(`📌 ${index}번 버튼을 눌렀습니다.`);
  }
});

// 실습 25: 템플릿 리터럴로 데이터 바인딩
let user = {
  name: '지은',
  age: 28,
  hobby: '독서'
};

let infoBox = document.getElementById('user-info');
infoBox.innerHTML = `
  <p>이름: ${user.name}</p>
  <p>나이: ${user.age}</p>
  <p>취미: ${user.hobby}</p>
`;

// 실습 26: select 인풋 값 가져오기
document.getElementById('btn-animal').addEventListener('click', function () {
  let selected = document.getElementById('animal-select').value;
  let result = document.getElementById('animal-result');

  if (selected === 'dog') {
    result.textContent = '🐶 강아지를 좋아하시는군요!';
  } else if (selected === 'cat') {
    result.textContent = '🐱 고양이를 좋아하시는군요!';
  } else if (selected === 'rabbit') {
    result.textContent = '🐰 토끼를 좋아하시는군요!';
  } else {
    result.textContent = '동물을 선택해주세요!';
  }
});

// 실습 27: 선택값에 따라 HTML 생성해서 넣기
document.getElementById('btn-animal-img').addEventListener('click', function () {
  const selected = document.getElementById('animal-select-2').value;
  const box = document.getElementById('animal-image-box');
  box.innerHTML = ''; // 이전에 있던 내용 비우기

  if (!selected) {
    box.textContent = '동물을 선택해주세요!';
    return;
  }

  const img = document.createElement('img');
  img.width = 200;

  if (selected === 'dog') {
    img.src = 'https://picsum.photos/400/200?random=1';
  } else if (selected === 'cat') {
    img.src = 'https://picsum.photos/400/200?random=2';
  } else if (selected === 'rabbit') {
    img.src = 'https://picsum.photos/400/200?random=3';
  }

  box.appendChild(img);
});

// 실습 28: forEach와 for...in 사용법
const hobbies = ['독서', '게임', '등산'];

document.getElementById('btn-show-hobby').addEventListener('click', function () {
  const list = document.getElementById('hobby-list');
  list.innerHTML = ''; // 초기화

  hobbies.forEach(function (hobby) {
    const li = document.createElement('li');
    li.textContent = hobby;
    list.appendChild(li);
  });
});

const user2 = {
  name: '수민',
  age: 27,
  job: '프론트엔드 개발자'
};

document.getElementById('btn-show-user').addEventListener('click', function () {
  const list = document.getElementById('user-info-list');
  list.innerHTML = '';

  for (let key in user2) {
    const li = document.createElement('li');
    li.textContent = `${key}: ${user2[key]}`;
    list.appendChild(li);
  }
});

// 실습 29: 상품 목록을 반복문으로 출력
const products = [
  { name: '노트북', price: 1200000 },
  { name: '키보드', price: 50000 },
  { name: '마우스', price: 30000 }
];

document.getElementById('btn-show-products').addEventListener('click', function () {
  const list = document.getElementById('product-display-list');
  list.innerHTML = ''; // 초기화

  for (let i = 0; i < products.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${products[i].name} - ${products[i].price.toLocaleString()}원`;
    list.appendChild(li);
  }
});

// 실습 30: Ajax로 상품 더보기
let page = 1;

document.getElementById('btn-more').addEventListener('click', function () {
  if (page === 1) {
    fetch('products-page2.json')
      .then(res => res.json())
      .then(data => {
        data.forEach(function (item) {
          let li = document.createElement('li');
          li.textContent = `${item.name} - ${item.price.toLocaleString()}원`;
          document.getElementById('product-more-list').appendChild(li);
        });
        page++; // 다음에 누르면 더 이상 안 불러오도록
      })
      .catch(error => {
        console.log('에러 발생:', error);
      });
  } else {
    alert('더 이상 상품이 없습니다.');
  }
});

// 실습 31: sort, map, filter 상품 정렬 기능 숙제
const productData = [
  { name: '모니터', price: 250000 },
  { name: '키보드', price: 50000 },
  { name: '마우스', price: 30000 },
  { name: '웹캠', price: 90000 }
];

function renderProducts(arr) {
  const ul = document.getElementById('product-sort-list');
  ul.innerHTML = '';
  arr.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()}원`;
    ul.appendChild(li);
  });
}

// 기본 출력
renderProducts(productData);

// 가격순 정렬
document.getElementById('btn-sort-price').addEventListener('click', function () {
  const sorted = [...productData].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
});

// 10만 원 이하 필터
document.getElementById('btn-filter-cheap').addEventListener('click', function () {
  const filtered = productData.filter(item => item.price <= 100000);
  renderProducts(filtered);
});

// 실습 32: DOM 개념 & load 이벤트
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn-dom').addEventListener('click', function () {
    alert('✅ DOM이 완전히 로드된 후 버튼 이벤트가 연결되었습니다.');
  });
});

// 실습 33: 장바구니 기능과 localStorage
// 실습 34: 장바구니 기능 - 중복 방지, 수량 표시, 삭제
let cart = JSON.parse(localStorage.getItem('cart')) || {};

function renderCart() {
  const ul = document.getElementById('cart-list');
  ul.innerHTML = '';

  for (let name in cart) {
    const li = document.createElement('li');
    li.innerHTML = `
      ${name} (${cart[name]}개)
      <button data-name="${name}" class="btn-remove">삭제</button>
    `;
    ul.appendChild(li);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

renderCart();

document.getElementById('product-cart-list').addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const productName = e.target.dataset.name;
    cart[productName] = (cart[productName] || 0) + 1;
    renderCart();
  }
});

document.getElementById('cart-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-remove')) {
    const name = e.target.dataset.name;
    delete cart[name];
    renderCart();
  }
});

// 실습 36: 스크롤 위치에 따라 변하는 애니메이션
window.addEventListener('scroll', function () {
  const scrollBox = document.getElementById('scroll-box');
  if (window.scrollY > 300) {
    scrollBox.classList.add('show');
  } else {
    scrollBox.classList.remove('show');
  }
});

// 실습 37: 캐러셀에 스와이프 기능 추가
// 실습 38: 캐러셀 스와이프 기능 개선
let startX = 0;
let startY = 0;
let currentIndex2 = 0;

const carouselList2 = document.getElementById('carousel-list2');
const itemCount = carouselList2.children.length;

carouselList2.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

carouselList2.addEventListener('touchend', function (e) {
  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;

  let diffX = endX - startX;
  let diffY = endY - startY;

  // 수평 스와이프 거리 50px 이상 + 수직보다 수평이 더 클 때만 반응
  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0 && currentIndex2 > 0) {
      currentIndex2--; // 오른쪽으로 스와이프 (이전)
    } else if (diffX < 0 && currentIndex2 < itemCount - 1) {
      currentIndex2++; // 왼쪽으로 스와이프 (다음)
    }
    carouselList2.style.transform = `translateX(-${200 * currentIndex2}px)`;
  }
});

// 실습 39: switch 문법 사용하기
document.getElementById('btn-color').addEventListener('click', function () {
  const selected = document.getElementById('color-select').value;
  const result = document.getElementById('color-result');

  switch (selected) {
    case 'red':
      result.textContent = '🔴 빨강은 열정을 나타내요!';
      break;
    case 'blue':
      result.textContent = '🔵 파랑은 차분함을 뜻해요.';
      break;
    case 'green':
      result.textContent = '🟢 초록은 평화를 상징해요.';
      break;
    default:
      result.textContent = '색상을 선택해주세요!';
  }
});