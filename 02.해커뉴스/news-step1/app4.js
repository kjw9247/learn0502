const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open("GET", NEWS_URL, false)
xhr.send() //waiting 상황 기다리는중

const newsList = JSON.parse(xhr.responseText)//NodeList
//ul태그는 부모태그이므로 딱 한번만 감싸주면 된다.
//그래서 for문 밖에 써야 한다
const ul = document.createElement("ul")
//for(let i=0; i<10; i=i+1){
console.log(newList);
console.log(newList[0]);
console.log(newList[1].id);
for(let i=1; i<=10; i=i+1){
    //li태그는 10번 반복되어야 하니까 for문 안에 써야 한다.
  const li = document.createElement("li")
  li.innerText = "뉴스제목"
  //appendChild - how?
  //document.appendChild(ul)
  //ul.appendChild(document.appendChild("li"))
  ul.appendChild(li) //ul태그안에 li태그 추가를 10번 반복해줘
}

const v_root = document.querySelector("#root").appendChild(ul)  
//console.log(v_root.innerHTML);
//v_root.innerHTML = "조회결과"
/*

*/
