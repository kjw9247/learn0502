// 0부터 9사이의 숫자 중 두 수를 입력받아서 합을 구하는
// 함수를 구현하시어
// 두수를 입력 받아서 -> 파라미터 자리의 역할이다
// 사용자 정의 함수 선언하기

// 함수 이름은 무엇인가? -> add
// add함수의 파라미터는 몇개인가? -> 2개다
// 아래 함수에는 변수의 개수는 몇개 인가? -> 3개 hap, a, b
// hap의 초기화는 얼마로 해야하나?
function add(a, b){
  //처리를 한다
  let hap = a + b
  return hap
}//end of add

console.log(add(1,2));
console.log(add(2,3));
console.log(add(3,4));
console.log(add(5,5));