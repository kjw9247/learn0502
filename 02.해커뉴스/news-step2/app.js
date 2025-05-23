const xhr = new XMLHttpRequest()
//제목을 클릭했을때 제목을 읽어와서 다른 화면에 출력하기
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@ID.json"
xhr.open("GET", NEWS_URL, false)
xhr.send()

const newsList = JSON.parse(xhr.responseText)
const ul = document.createElement("ul")

//개발자가 호출하는 함수가 아니라 시스템에서 이벤트가 감지되었을 때
//자동으로 호출된다 - callback
//뉴스제목을 클릭하면 URL이 바뀌는데 그것을 감지하는게 hashchange
window.addEventListener("hashchange",() => {
    const id = location.hash.substring(1)
    xhr.open("GET", CONTENT_URL.replace("@ID", id), false)
    xhr.send()
    const newsContent = JSON.parse(xhr.responseText)
    console.log(newsContent);
    const title = document.createElement("h1")
    title.innerText = newsContent.title
    content.appendChild(title)

  });


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