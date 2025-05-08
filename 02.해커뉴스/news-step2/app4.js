const xhr = new XMLHttpRequest()
//제목을 클릭했을때 제목을 읽어와서 다른 화면에 출력하기
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@ID.json"
xhr.open("GET", NEWS_URL, false)
xhr.send()

const newsList = JSON.parse(xhr.responseText)
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => {
    const id = location.hash.substring(1)
    xhr.open("GET", CONTENT_URL.replace("@ID", id), false)
    xhr.send()
    const newsContent = JSON.parse(xhr.responseText)
    console.log(newsContent);
    title.innerText = newsContent.title
    content.appendChild(title)
  });
  const title = document.createElement("h1")

for(let i=1; i<=10; i=i+1){
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = `#${newsList[i].id}`
  a.innerText = `${newsList[i].title}(💮${newsList[i].comments_count})`

  li.appendChild(a)
  ul.appendChild(li)
}

const v_root = document.querySelector("#root").appendChild(ul) 
document.querySelector("#root").appendChild(content) 