// 주문을 한다 - 등록 - INSERT - POST(REST API)
// 무엇을 주문 할 것인가?
const 주문 = (f1, f2) => { // 구현
  console.log('주문', f1, f2);
}
// 파라미터에 대한 정보는 API를 찾아본다
// 파라미터의 갯수
// 파라미터의 타입 ***(문자열, 숫자, 불리언)***
주문('🍒','🍓') // 호출 - 파라미터, 매개변수, 인자값

// 70, 80, 90 평균을 구하시오
// 평균을 구하기 위해서는 총점을 먼저 구해야 한다
const testPoint = [70, 80, 90]
// 합은 항상 변하기 때문에 const X let O
let total = 0 

for (let i=0;i<testPoint.length;i=i+1){
  total = total + testPoint[i]
}

let avg = total/3.0

function funcTotal () {
  return total  // ***
}

function funcTotal2 () {
  total = 100
}

function funcAvg (total) {
  let avg = total/3.0
  //함수 안에서만 출력 할 수 있다
  console.log(avg);
}

const hap = funcTotal ()
// 함수에서 return을 사용했으니까.. 함수 밖에서 출력 할 수 있다
console.log(hap);
const hap2 = funcTotal2 ()
console.log(hap2);

const avg1 = funcAvg(hap)
console.log(avg1); // return이 없기 때문에 결과가 안나옴