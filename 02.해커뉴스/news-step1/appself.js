const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open("GET", NEWS_URL, false)
xhr.send() //waiting 상황 기다리는중

const newsList = JSON.parse(xhr.responseText)
console.log(newsList);
console.log(typeof newsList);//object출력됨
//배열은 어떻게 선언하나?
let arr = []
arr = newsList
console.log(newsList.length);
console.log(arr.length);//원소의 갯수가 30개인가?
const v_root = document.querySelector("#root")
//console.log(v_root.innerHTML);
let html = "<h1>조회결과</h1><ul>";
newsList.slice(0,10).forEach(news => {
  html += `<li>${news.title}</li>`;
});
html += "</ul>";
v_root.innerHTML = html;
/*

*/
