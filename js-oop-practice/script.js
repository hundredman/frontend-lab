// 변수 선언
const name = "홍길동";
let age = 20;
var isStudent = true;

// 배열과 객체
const skills = ["HTML", "CSS", "JavaScript"];
const user = {
  name: name,
  age: age,
  student: isStudent,
  skills: skills
};

// 조건문
if (user.age >= 18) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}

// 반복문
for (let skill of user.skills) {
  console.log("보유 기술:", skill);
}

// 함수 선언식
function greet(userObj) {
  return `안녕하세요, ${userObj.name}입니다!`;
}

console.log(greet(user));

console.log("=== this 실습 시작 ===");

// 일반 함수에서 this
function plainFunction() {
  console.log("일반 함수 this:", this);
}
plainFunction();  // window (브라우저 기준)

// 객체 메서드에서 this
const student = {
  name: "영희",
  speak: function () {
    console.log("객체 메서드 this:", this.name);
  }
};
student.speak();  // "영희"

// 일반 함수로 event listener
document.getElementById("myBtn").addEventListener("click", function () {
  console.log("일반함수 this:", this);  // 👉 HTML 버튼 요소
});

// arrow function으로 event listener
document.getElementById("myBtn").addEventListener("click", () => {
  console.log("arrow 함수 this:", this);  // 👉 window or undefined (바깥 this)
});

function Animal(type) {
  this.type = type;
  this.say = function () {
    console.log("나는 " + this.type + "입니다.");
  };
}

const cat = new Animal("고양이");
cat.say();  // 👉 "나는 고양이입니다."

console.log("=== 일반 function vs arrow function 실습 ===");

// 일반 함수와 this
const person1 = {
  name: "철수",
  sayHi: function () {
    console.log("일반 함수 this.name:", this.name);
  }
};
person1.sayHi();  // 👉 철수

// arrow 함수와 this
const person2 = {
  name: "영희",
  sayHi: () => {
    console.log("arrow 함수 this.name:", this.name);
  }
};
//person2.sayHi();  // 👉 undefined (this는 window)

// arguments 테스트
function normalFunc() {
  console.log("일반 함수 arguments:", arguments);
}
normalFunc(1, 2, 3);

const arrowFunc = () => {
  try {
    console.log("arrow 함수 arguments:", arguments);
  } catch (e) {
    console.log("arrow 함수는 arguments 사용 불가:", e.message);
  }
};
arrowFunc(4, 5, 6);

// 생성자 사용 가능 여부
function Person(name) {
  this.name = name;
}
const p1 = new Person("민수");
console.log("일반 함수 생성자:", p1.name);

try {
  const ArrowPerson = (name) => {
    this.name = name;
  };
  const p2 = new ArrowPerson("수지");  // ❌ new 사용 불가
  console.log("arrow 함수 생성자:", p2.name);
} catch (e) {
  console.log("arrow 함수는 new 사용 불가:", e.message);
}

console.log("=== 변수 총정리 실습 ===");

// var: 재선언, 재할당 가능 / 함수 스코프
var a = 1;
var a = 2;  // 재선언 가능
a = 3;      // 재할당 가능
console.log("var a:", a);  // 👉 3

// let: 재선언 불가, 재할당 가능 / 블록 스코프
let b = 1;
// let b = 2;  // ❌ 오류: 이미 선언됨
b = 3;
console.log("let b:", b);  // 👉 3

// const: 재선언 ❌, 재할당 ❌ / 블록 스코프
const c = 1;
// c = 2;     // ❌ 오류: 재할당 불가
console.log("const c:", c);

// 스코프 차이 테스트
function varScopeTest() {
  if (true) {
    var x = 10; // 함수 전체에서 유효
  }
  console.log("var x:", x);  // 👉 10
}
varScopeTest();

function letScopeTest() {
  if (true) {
    let y = 20;
  }
  // console.log("let y:", y);  // ❌ 오류: y는 if 블록 밖에서 접근 불가
}
letScopeTest();

console.log("=== 변수 호이스팅 실습 ===");

// var의 호이스팅
console.log("var before:", x);  // 👉 undefined
var x = 10;

// let의 호이스팅
// console.log("let before:", y);  // ❌ ReferenceError
let y = 20;

// const의 호이스팅
// console.log("const before:", z);  // ❌ ReferenceError
const z = 30;

console.log("=== 전역변수 window 객체 연결 ===");

var globalVar = "var로 선언됨";
let globalLet = "let으로 선언됨";
const globalConst = "const로 선언됨";

console.log("window.globalVar:", window.globalVar);     // 👉 "var로 선언됨"
console.log("window.globalLet:", window.globalLet);     // 👉 undefined
console.log("window.globalConst:", window.globalConst); // 👉 undefined

console.log("=== 참조 개념 실습 ===");

// 기본형
let a2 = 10;
let b2 = a2;
b2 = 20;
console.log("a2:", a2);  // 👉 10 (값 복사)

// 참조형
let obj1 = { name: "철수" };
let obj2 = obj1;
obj2.name = "영희";
console.log("obj1.name:", obj1.name);  // 👉 "영희" (같은 객체 참조 중)

console.log("=== Template Literal 실습 ===");

const name2 = "영희";
const age2 = 22;

// 변수 삽입
const msg1 = `이름은 ${name2}이고, 나이는 ${age2}살입니다.`;
console.log(msg1);

// 줄바꿈 포함 문자열
const msg2 = `안녕하세요
${name2}입니다.
올해 ${age2}살이에요.`;
console.log(msg2);

const a3 = 5;
const b3 = 3;
console.log(`a + b = ${a3 + b3}`);  // 👉 a + b = 8

function double(x) {
  return x * 2;
}
console.log(`두 배는 ${double(10)}`);  // 👉 두 배는 20

function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const value = values[i] !== undefined ? String(values[i]).toUpperCase() : "";
    return acc + str + value;
  }, "");
}

const lang = "JavaScript";
const level = "Intermediate";

const sentence = highlight`프로그래밍 언어는 ${lang}이고, 수준은 ${level}입니다.`;
console.log(sentence)

console.log("=== Spread Operator 기본 ===");

const fruits = ["사과", "바나나"];
const newFruits = [...fruits];  // 복사

console.log("복사한 배열:", newFruits);  // ["사과", "바나나"]
console.log("같은 배열인가?", fruits === newFruits);  // false (깊은 복사)

const moreFruits = ["포도", ...fruits, "딸기"];
console.log("병합된 배열:", moreFruits);  // ["포도", "사과", "바나나", "딸기"]

console.log("=== Spread Operator 객체 확장 ===");

const userInfo = { name: "철수", age: 20 };
const extendedInfo = { ...userInfo, job: "개발자" };

console.log("복사된 객체:", extendedInfo);
// 👉 { name: '철수', age: 20, job: '개발자' }

const overrideInfo = { ...userInfo, age: 30 };
console.log("속성 덮어쓰기:", overrideInfo);
// 👉 { name: '철수', age: 30 }

console.log("=== Spread + apply/call 실습 ===");

function showInfo(name, age, city) {
  console.log(`${name}은 ${city}에 사는 ${age}살입니다.`);
}

const infoArr = ["민수", 25, "서울"];

// apply 사용
showInfo.apply(null, infoArr);

// call 사용
showInfo.call(null, "민수", 25, "서울");

// Spread 사용
showInfo(...infoArr);

console.log("=== Default Parameter 실습 ===");

function welcome(name = "이름 없음", lang = "한국어") {
  console.log(`${name}님, 환영합니다! (${lang})`);
}

welcome();                    // 👉 이름 없음, 한국어
welcome("철수");              // 👉 철수, 한국어
welcome("영희", "English");   // 👉 영희, English

function showArguments() {
  console.log("arguments 객체:", arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`인자 ${i + 1}:`, arguments[i]);
  }
}

showArguments("사과", "바나나", "포도");

const arrowFunc2 = () => {
  try {
    console.log(arguments);
  } catch (e) {
    console.log("arrow 함수에는 arguments가 없음:", e.message);
  }
};

arrowFunc2("A", "B");

console.log("=== Rest Parameter 실습 ===");

function sumAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log("합계:", total);
}

sumAll(1, 2, 3);        // 👉 6
sumAll(5, 10, 15, 20);  // 👉 50

console.log("=== 기본형 복사 ===");

let a4 = 100;
let b4 = a4;  // 값 복사
b4 = 200;

console.log("a:", a4);  // 👉 100
console.log("b:", b4);  // 👉 200

console.log("=== 참조형 복사 ===");

let obj3 = { name: "영희" };
let obj4 = obj3;  // 참조 복사 (같은 객체를 가리킴)
obj4.name = "철수";

console.log("obj3.name:", obj3.name);  // 👉 "철수"
console.log("obj4.name:", obj4.name);  // 👉 "철수"

console.log("=== 참조형 완전 복사 ===");

let user1 = { name: "민수" };
let user2 = { ...user1 };  // 진짜 복사 (새 객체 생성)

user2.name = "지수";

console.log("user1.name:", user1.name);  // 👉 "민수"
console.log("user2.name:", user2.name);  // 👉 "지수"

console.log("=== 생성자 함수 실습 ===");

function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    console.log(`제 이름은 ${this.name}, 나이는 ${this.age}살입니다.`);
  };
}

const p3 = new Person2("철수", 25);
const p4 = new Person2("영희", 30);

p3.introduce();  // 👉 철수 소개
p4.introduce();  // 👉 영희 소개

console.log("=== prototype 메서드 공유 실습 ===");

function Animal2(type) {
  this.type = type;
}

// 메서드 공유
Animal2.prototype.speak = function () {
  console.log(`저는 ${this.type}입니다.`);
};

const cat2 = new Animal2("고양이");
const dog2 = new Animal2("강아지");

cat2.speak();  // 👉 저는 고양이입니다.
dog2.speak();  // 👉 저는 강아지입니다.

console.log(cat2.speak === dog2.speak);  // 👉 true ✅

console.log("=== prototype 직접 조작 실습 ===");

const walker = {
  walk() {
    console.log(`${this.name}가 걷고 있습니다.`);
  }
};

const robot = {
  name: "로봇1"
};

// 방법 1: __proto__
robot.__proto__ = walker;
robot.walk();

// 방법 2: Object.create
const robot2 = Object.create(walker);
robot2.name = "로봇2";
robot2.walk();

// 방법 3: setPrototypeOf
const robot3 = { name: "로봇3" };
Object.setPrototypeOf(robot3, walker);
robot3.walk();

console.log("=== class 문법 실습 ===");

class Animal3 {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`저는 ${this.type}입니다.`);
  }
}

const cat3 = new Animal3("고양이");
const dog3 = new Animal3("강아지");

cat3.speak();  // 👉 저는 고양이입니다.
dog3.speak();  // 👉 저는 강아지입니다.

console.log(cat3.speak === dog3.speak);  // 👉 true (prototype 공유)

console.log("=== class 상속 extends / super 실습 ===");

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  move() {
    console.log(`${this.brand} 차량이 이동합니다.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);  // 부모 생성자 호출
    this.model = model;
  }
  info() {
    console.log(`${this.brand}의 ${this.model} 모델입니다.`);
  }
}

const myCar = new Car("현대", "아반떼");
myCar.move();  // 👉 현대 차량이 이동합니다.
myCar.info();  // 👉 현대의 아반떼 모델입니다.

console.log("=== 조합 Composition 실습 ===");

const canWalk = {
  walk() {
    console.log(`${this.name}가 걷습니다.`);
  }
};

const canTalk = {
  talk() {
    console.log(`${this.name}가 말합니다.`);
  }
};

function createHuman(name) {
  const human = { name };
  return Object.assign(human, canWalk, canTalk);
}

const person = createHuman("철수");
person.walk();  // 👉 철수가 걷습니다.
person.talk();  // 👉 철수가 말합니다.

console.log("=== getter / setter 실습 ===");

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    console.log("이름을 읽었습니다.");
    return this._name;
  }

  set name(value) {
    if (value.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다.");
      return;
    }
    console.log("이름을 변경했습니다.");
    this._name = value;
  }
}

const user3 = new User("영희");
console.log(user3.name);  // 👉 읽기
user3.name = "철";        // 👉 너무 짧아서 거부
user3.name = "철수";      // 👉 변경됨
console.log(user3.name);  // 👉 확인

console.log("=== 구조 분해 할당 실습 ===");

// 배열 구조분해
const colors = ["빨강", "초록", "파랑"];
const [red, , blue] = colors;
console.log(red);  // 👉 빨강
console.log(blue); // 👉 파랑

// 객체 구조분해
const book = {
  title: "자바스크립트 입문",
  year: 2023,
  author: "홍길동"
};

const { title, author, year: publishedYear } = book;
console.log(`${title} - ${author} (${publishedYear})`);

// 함수 인자에서 구조분해
function printBook({ title, author }) {
  console.log(`${title} by ${author}`);
}
printBook(book);

// 모듈 가져오기
import { greet2, version } from './utils.js';

console.log(greet2("철수"));  // 👉 안녕하세요, 철수님!
console.log(version);       // 👉 v1.0

// console.log("=== Stack & Queue 실습 ===");

// function first() {
//   console.log("첫 번째 함수 시작");
//   second();
//   console.log("첫 번째 함수 끝");
// }

// function second() {
//   console.log("두 번째 함수 실행");
// }

// first();

// console.log("setTimeout 전");

// setTimeout(() => {
//   console.log("setTimeout 안");
// }, 0);

// console.log("setTimeout 후");

// 예상 출력:
// 첫 번째 함수 시작
// 두 번째 함수 실행
// 첫 번째 함수 끝
// setTimeout 전
// setTimeout 후
// setTimeout 안

// console.log("=== 콜백 함수 & 비동기 실습 ===");

// function doAsyncJob(jobName, delay, callback) {
//   console.log(`${jobName} 시작`);
//   setTimeout(() => {
//     console.log(`${jobName} 완료`);
//     callback();
//   }, delay);
// }

// doAsyncJob("1단계", 1000, () => {
//   doAsyncJob("2단계", 1000, () => {
//     doAsyncJob("3단계", 1000, () => {
//       console.log("모든 작업 완료!");
//     });
//   });
// });

// console.log("=== Promise 실습 ===");

// function fakeJob(name, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (name) {
//         console.log(`${name} 작업 완료`);
//         resolve(`${name} 성공`);
//       } else {
//         reject("작업 이름 없음");
//       }
//     }, ms);
//   });
// }

// fakeJob("1단계", 1000)
//   .then((result) => {
//     console.log(result);
//     return fakeJob("2단계", 1000);
//   })
//   .then((result) => {
//     console.log(result);
//     return fakeJob("", 1000); // 오류 유도
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("오류 발생:", err);
//   });

// console.log("=== async/await 실습 ===");

// function fakeJob(name, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (name) {
//         console.log(`${name} 완료`);
//         resolve(`${name} 성공`);
//       } else {
//         reject("이름 없음");
//       }
//     }, ms);
//   });
// }

// async function processJobs() {
//   try {
//     const r1 = await fakeJob("1단계", 1000);
//     console.log(r1);
//     const r2 = await fakeJob("2단계", 1000);
//     console.log(r2);
//     const r3 = await fakeJob("", 1000);  // 오류 유도
//     console.log(r3);
//   } catch (e) {
//     console.log("🚨 오류 발생:", e);
//   }
//   console.log("작업 종료");
// }

// processJobs();

console.log("=== 반복문 for...in / for...of 실습 ===");

const book2 = {
  title: "자바스크립트",
  year: 2024,
  author: "홍길동"
};

// for...in: key 순회
for (let key in book2) {
  console.log(`key: ${key}, value: ${book2[key]}`);
}

const colors2 = ["빨강", "초록", "파랑"];

// for...of: value 순회
for (let color of colors) {
  console.log(`color: ${color}`);
}

// 문자열도 for...of 가능
for (let ch of "ABC") {
  console.log(ch);  // 👉 A B C
}

// 객체는 for...of 불가능
try {
  for (let item of book2) {
    console.log(item);
  }
} catch (e) {
  console.log("❌ 객체는 for...of 사용 불가:", e.message);
}

console.log("=== Symbol 실습 ===");

const secretKey = Symbol("secret");

const user4 = {
  name: "철수",
  age: 30,
  [secretKey]: "top-secret"
};

// 일반 반복에서 Symbol 키는 나오지 않음
for (let key in user4) {
  console.log("key:", key);  // name, age만 출력
}

// JSON에서도 무시됨
console.log("JSON:", JSON.stringify(user4));

// 직접 접근은 가능
console.log("비밀:", user4[secretKey]);

// 전역 Symbol
const globalSym1 = Symbol.for("token");
const globalSym2 = Symbol.for("token");

console.log("같은 전역 심볼인가?", globalSym1 === globalSym2);  // true

console.log("=== Set 실습 ===");

const fruitSet = new Set(["사과", "바나나", "사과"]);
console.log(fruitSet);  // 👉 중복 제거됨

fruitSet.add("포도");
console.log("포함 여부:", fruitSet.has("바나나"));  // 👉 true
fruitSet.delete("사과");
console.log(fruitSet);  // 👉 Set(2) {'바나나', '포도'}

const nums = [1, 1, 2, 3, 3, 4];
const uniqueNums = [...new Set(nums)];
console.log("중복 제거된 배열:", uniqueNums);  // 👉 [1,2,3,4]

console.log("=== Map 실습 ===");

const userMap = new Map();
userMap.set("name", "영희");
userMap.set("age", 22);
userMap.set(true, "활성 사용자");

console.log("이름:", userMap.get("name"));  // 👉 영희
console.log("활성 상태:", userMap.get(true));  // 👉 활성 사용자

for (let [key, value] of userMap) {
  console.log(`키: ${key}, 값: ${value}`);
}

class MyGreeting extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>안녕하세요! 👋</p>";
  }
}

customElements.define("my-greeting", MyGreeting);

// ?. / ?? 연산자
const user5 = {
  name: "영희",
  profile: {
    email: "younghee@example.com"
  }
};

console.log("이메일:", user5.profile?.email);        // 👉 존재하므로 출력
console.log("전화번호:", user5.profile?.phone);      // 👉 undefined
console.log("주소:", user5.address?.city ?? "주소 없음");  // 👉 "주소 없음"