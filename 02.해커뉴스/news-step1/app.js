const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open("GET", NEWS_URL, true)
xhr.send()

const newsList = JSON.parse(xhr.responseText)
const ul = document.createElement("ul")
console.log(newsList);
console.log(newsList[0]);
console.log(newsList[1]);
for(let i=1; i<=10; i=i+1){
  const li = document.createElement("li")
  li.innerText = newsList[i].title
  ul.appendChild(li)
}

const v_root = document.querySelector("#root").appendChild(ul)  
