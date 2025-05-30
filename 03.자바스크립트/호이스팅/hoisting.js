const btns = document.querySelectorAll('ul li')

/*
호이스팅 현상으로 모두 3만 출력 되었다
for문 안에서만 유지가 되어야 하는데 밖에서도 유지된다
for(var j=0;j<btn.length;j++){
  btns[j].addEventListener('click', () => {
    console.log(j);
  })
}
*/

for(var j=0;j<btn.length;j++){
  ((index) => {
    btns[j].addEventListener('click', () => {
      console.log(index);
    })
  })(j)
} // 즉시 실행 함수

/* 
  호이스팅이란
  블룩 안에서 선언된 지역변수가 코드 블록 밖으로 끌어 올려지면서
  강제로 전역변수화 되는 현상이다
  ES5버전에서는 var 변수 선언 바식의 호이스팅 이슈를 어떻게 해결 했을까?

  전역변수
  - 코드블록 밖에서 선언된 변수
  - 해당하는 코드 전역에 걸쳐서 접근 가능
  - 여러개의 서로 다른 함수들이 같은 값을 공유해야 할 때 사용가능
  지역변수
  - 코드 블록 안에서 선언된 변수
  - 해당 코드 블록 안에서만 접근이 가능 - undefined, XXX is not defined
*/