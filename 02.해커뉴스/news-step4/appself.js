const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@ID.json"

function getData(url){
    xhr.open("GET", url, false)
    xhr.send()
    return JSON.parse(xhr.responseText)
}

const a = getData(NEWS_URL)

const newsList = []
newsList.push('<ul>')
for(let i=0;i<10;i++){
  newsList.push(`
      <li>
        <a href="#${4897650}">뉴스제목
        </a>
      </li>
    `)
}
newsList.push('</ul>');

document.querySelector('#root').innerHTML = newsList.join("")