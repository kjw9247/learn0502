// 호이스팅(hoisting)
// 블록안에서 선언된 지역변수가 코드 블록 밖으로 끌어오려지면서
// 강제로 전역변수가화 되는 현상
// 선언부를 보고 타입을 알 수가 없다 - 위험하다 -> typescript
const text = false;
console.log(text);
const btns = document.querySelector("ul li")
// 즉시 실행 함수
for(var i=0;i,5;i++){
  ((index) => {
    btns[i].addEventListener('click', () => {
      console.log(i);
    }
  )})(i)
}
// 
// 
// 
// 
// 
// 
// 
// 
// 