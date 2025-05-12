const getnewsList = () => {
  const requestOptions = {
    method: "GET", //HTTP 메소드를 GET으로 설정함
    redirect: "follow" // 서버가 리다이렉트를(응답 URL) 반환할 때 자동으로 따라가기
};

// Fetch API 호출
// 브라우저가 제공하는 내장 API다  (Axios-mpm- 비동기통신 지원하는 라이브러리)
// 프레임워크와 라이브러리 차이점은 제어권을 가지고있다|가지고 있지 않다.
// 네트워크 요청을 보내고 (waiting - 비동기로 처리해야 함을 의미함)
// 응답이 언제 올지 알 수가 없다 <- 비동기로 처리해야한다
// 기다리는 동안 다른 일을 할 수 있다. -합리적 판단
// 단 순서를 약속한다 -> new Promise<Response>반환
// 응답으로 받아오는 객체는 "json포맷"으로 돌려준다.
// 그래서 나는 XMLHttpRequest대신에 fetch를 사용하기로 결정하였다.
// 리액트 프로젝트에에서는 axios를 사용할 것이다.
// JSON.parse나 JSON.stringify를 쓰지 않고도 직접 json으로 받아낸다.
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then((response) => response.json())
    .then((result) => {// 실행문을 작성 할 수 있음
      const newsFeed = result;
      const ul = document.createElement("ul")
      for(let i=0;i<10;i=i+1){
        const li = document.createElement("li")
        li.innerHTML = newsFeed[i].title
        ul.appendChild(li)
      }
      document.querySelector(".home").appendChild(ul)
    })
    .catch((error) => console.error(error));
}               







/*
전체 흐름 요약
Fetch요청 : fetch(,)
-> 응답(JSON)파싱 -> response.json()지원함
-> DOM요소 생성 및 데이터 바인딩 -> createElement, appendChild -> 직관 X
-> 페이지 삽입 : innerHTML, innerText -> 보안취약함 
-> 에러 처리 : console.error(error메세지 확인후 처리)

*/
