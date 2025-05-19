// 증감연산자 - for문과 if문 흐름을 바꾼다
// 데이터 정제하기 -> 데이터 전처리
let a = 0
console.log(a);

a= a + 1
console.log(a);

a++
console.log(a);

// 대입을 먼저하고 1을 증가시킨다
// 1을 증가시킨 다음에 대입한다
// ++가 뒤에 있으면 후위연산자라 한다
// 연산자가 여러개 있을 때 우선순위가 있다
let b = a++
console.log(`a:#${a}, b:${b}`);

b = ++a
console.log(`a:#${a}, b:${b}`);

// 비교 연산자, 산술연산자, 대입연산자
// == 값만비교, === 값과 타입까지 비교
console.log(2=='2');
console.log(2=='3');

// 원시형 타입
// 참조형 타입

const myCar = {
  name : "소나타",
  color : "red",
  speed : 50
}
const himCar = {
  name : "소나타",
  color : "red",
  speed : 50
}

//myCar(예 229540)의 주소번지와 himCar(예 229548)의 주소번지가 같은지 비교했기 때문에 false가 나온다
console.log(myCar==himCar);
console.log(myCar===himCar);

let herCar = himCar
console.log(herCar==himCar);
console.log(herCar===himCar);

// +연산자 주의
let text;
text = 10 + '10'
console.log(text);
let a1 = '10'
console.log(10+a1);
console.log(typeof a1);
a1 = parseInt(a1) // number 타입으로 전환 해주는 형전환 함수
console.log(typeof a1);

// 할당 연산자
let x = 1
x +=1 // 먼저 더하고 나중에 대입
console.log(x);
x *= 2
console.log(x); 