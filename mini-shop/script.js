const products = [
  { name: '노트북', price: 1200000 },
  { name: '키보드', price: 50000 },
  { name: '마우스', price: 30000 },
  { name: '웹캠', price: 90000 },
];

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const btnFilter = document.getElementById('btn-filter');
const btnJoin = document.getElementById('btn-join');
const btnDark = document.getElementById('btn-dark');

let cart = JSON.parse(localStorage.getItem('cart')) || {};

function renderProducts(arr) {
  productList.innerHTML = '';
  arr.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `${product.name} - ${product.price.toLocaleString()}원 <button data-name="${product.name}">담기</button>`;
    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = '';
  for (let name in cart) {
    const li = document.createElement('li');
    li.innerHTML = `${name} (${cart[name]}개) <button data-name="${name}" class="btn-remove">삭제</button>`;
    cartList.appendChild(li);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

productList.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const name = e.target.dataset.name;
    cart[name] = (cart[name] || 0) + 1;
    renderCart();
  }
});

cartList.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-remove')) {
    const name = e.target.dataset.name;
    delete cart[name];
    renderCart();
  }
});

btnFilter.addEventListener('click', function () {
  const filtered = products.filter(p => p.price <= 100000);
  renderProducts(filtered);
});

btnJoin.addEventListener('click', function () {
  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;

  if (name === '' || email === '') {
    alert('⚠️ 이름과 이메일을 모두 입력해주세요.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('이메일 형식이 올바르지 않습니다.');
  } else {
    alert(`${name}님 가입을 환영합니다!`);
  }
});

btnDark.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// 초기 실행
renderProducts(products);
renderCart();