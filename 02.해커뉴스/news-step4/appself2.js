const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@ID.json"

function getData(url){
    xhr.open("GET", url, false)
    xhr.send()
    return JSON.parse(xhr.responseText)
}

const a = getData(NEWS_URL)

window.addEventListener("hashchange",() => {
  const id = location.hash.substring(1)
  const newsList = getData(CONTENT_URL.replace("@ID", id))
  const ul = document.createElement("ul")
  const newsContent = JSON.parse(xhr.responseText)
  console.log(newsContent);
  const title = document.createElement("h1")
  title.innerText = newsContent.title
  content.appendChild(title)
});



const newsList = []



newsList.push('<ul>')
for(let i=0;i<10;i++){
  newsList.push(`
      <li>
        <a href="#$${newsList[i].id}", innerText ="$${newsList[i].title}(💮${newsList[i].comments_count}">뉴스제목
        </a>
      </li>
    `)
}
newsList.push('</ul>');

document.querySelector('#root').innerHTML = newsList.join("")