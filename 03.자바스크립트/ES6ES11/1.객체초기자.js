// 객체 초기자
// 객체 초기자는 중괄호({})로 묶인 0개 이상의 객체의 프로퍼티명과 관련 값의 *쌍*을
console.log('1');
let i = 3
console.log(i);
{
  // 컴파일을 하지 않는다 - 문법체크를 하지 않는다 - 컴파일 에러이다
  // 변수 선언시 타입을 작성하지 않는다 - 타입을 알 수 없다
  // 런타임시에 타입을 알 수 있다(결정된다)
  const x = 1
  console.log(x);

  const emp = {
    ename: 'scott',
    job: 'CLERK',
    sal : 5000,
  }
  const ename = 'tiger'
  const job = 'SALESMAN'

  const emp2 = {
    ename: ename,
    job: job
  }
  console.log(emp2);
  
  // key와 value가 동일 할 때는 생략이 가능

  const emp3 = {
    ename,
    job,
  }
  console.log(emp3);
}

// 실행방법
// node 1.객체초기자.js
// nodemon 1.객체초기자.js
// 