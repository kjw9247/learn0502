const xhr = new XMLHttpRequest()
const container = document.querySelector("#root")
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@ID.json"

function getData(url){
    xhr.open("GET", url, false)
    xhr.send()
    return JSON.parse(xhr.responseText)
}

const newsSource = getData(NEWS_URL)
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => {
  const id = location.hash.substring(1)
  const newsContent = getData(CONTENT_URL.replace("@ID", id))
  const title = document.createElement("h1")
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
    <a href="#">목록으로</a>
    </div>
    `

});//end of hashchange

const newsList = []
newsList.push('<ul>')
for(let i=0;i<10;i++){
  newsList.push(`
      <li>
        <a href="#$${newsSource[i].id}">"$${newsSource[i].title}(💮${newsSource[i].comments_count}"
        </a>
      </li>
    `)
}
newsList.push('</ul>');
container.innerHTML = newsList.join("")

/******************************************************************
* 라우팅 추가 부문
 ******************************************************************/
function router() {
  const routerPath = location.hash
}
//보통은 다음페이지를 클릭하거나 이전 페이지를 클릭했을 때 호출한다.
window.addEventListener("hashchange", router)
//최초 한번 호출을 위해서 추가하기
//router()