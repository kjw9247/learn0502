var x = 'global' // ES5 -> ES6~기반 -> let, const -> 트랜스파일러(Babel) typescript도 트랜스파일러임
// babel -> ES6 -> ES5
// 함수를 선언했다고 해서 호출 되는것은 아니다
// 불러 줘야 실행이 된다
function foo(){
  console.log(x);
  var x = 'local'
  console.log(x);
}
// 함수 호출
foo()
console.log(x);

var x = 1
x = 100

console.log(x);

// 문제 제기 - 로컬의 값을 굳이 함수 밖에서 사용하고 싶다면
// - 힌트 : return

const hap = (x,y) => {
  var tot = x + y
  return tot
}
const hap1 = (x,y) => {
  var tot = x + y
}
console.log(hap1(1,2));
console.log(hap(1,2));

var tot = hap(1,2)
console.log(tot);