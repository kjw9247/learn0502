// 1. 즉시실행함수
(function(){
  var i = 1 
  console.log('여기');
})()

// console.log(i); // i is not  defined

// 2. 네임스페이스 객체
const dept = {}
dept.deptno = 10
dept.dname = '개발부'
dept.loc = '제주'
console.log(dept.loc);
console.log(dept['loc']);


// 3. 모듈패턴
{
  var Counter = (function(){
    console.log('counter');
    var num = 0
    return {
      increase(){
        return ++num
      },
      decrease(){
        return --num
      }
    }
  })()
  console.log(Counter.num);
  console.log(Counter.increase());
  console.log(Counter.increase());
  var other = Counter.increase()
  console.log(other);
  console.log(Counter.increase());
  console.log(Counter.increase());
}

// 4. ES6 모듈
// 더는 전변을 사용 할 수 없다 - let, const
// ES6모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다
// 어째서 어려운가? ES5 문법으로 트랜스파일러를 할 수 있는 코드만 써야 한다
// script 태그에 type=module을 추가해서 로드된 자바스크립트는 모듈로서 동작함
// -> webpack이나 Babel활용한 프로젝트 구성할 때