// 배열
const fruits = ['🍓','🍒','🍊','🍕','🍔','🍟']
console.log(fruits[0]);
console.log(fruits[2]);
//원소의 갯수가 3개이지만 첫번째 방의 인덱스 값이 0부터니까
//마지막 방의 인덱스 값은 n-1이다.
//null과 undefined는 다르다.
console.log(fruits[3]);
console.log(fruits.length);//3출력 length는 배열의 원소의 갯수를 리턴한다.
//for(let i=0;i<fruits.length;i=i+1){}
//for(let i=0;i<3;i=i+1){}
//for(let i=0;i<3;i++){}
//for문을 사용하면 데이터셋이 늘었다 줄었다 하더라도
//코드를 수정하지 않아도 괜찮다.
for(let i=0;i<fruits.length;i++){//반복문
    console.log(fruits[i]);;
}
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);








// 변수 선언은 2가지 const와 let이 있다.
// const는 상수선언, let은 변수선언이다. - 재할당이 가능하다.
// for( let 선언 및 초기화 ; 조건문 if (비교 연산자(<,<=,>,>=), True/False) ; 증감연산자 ){} 기본 폼
