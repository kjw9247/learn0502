const xhr = new XMLHttpRequest()
const container = document.querySelector("#root")
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"
const store = {
   currentPage: 1,
}
function getData(url){
  xhr.open("GET", url, false)
  xhr.send() 
  return JSON.parse(xhr.responseText)
}
function newsDetail(){
    const id = location.hash.substring(7)
    console.log(id);
    const newsContent = getData(CONTENT_URL.replace("@id", id))
    container.innerHTML = `
      <h1>${newsContent.title}</h1>
      <div>
        <a href="#/page/${store.currentPage}">목록으로</a>
      </div>
    `
}


function newsSource(){
  let currentPage = 1
  const news = getData(NEWS_URL)
  const newsList = []
  newsList.push("<ul>")
  for(let i=(store.currentPage-1)*10;i<store.currentPage*10;i++){
    newsList.push(`
      <li>
        <a href="#${news[i].id}">
          ${news[i].title}(${news[i].comments_count})
        </a>
      </li>
    `)
  }
  newsList.push('</ul>')
  const totalPages = Math.ceil(news.length / 10)
  newsList.push(`
    <div>
      <a href="#/page/${store.currentPage > 1 ? store.currentPage-1 : store.currentPage}">이전페이지</a>
      <a href="#/page/${store.currentPage < totalPages ? store.currentPage+1 : store.currentPage}">다음페이지</a>
    </div>
  `)

  container.innerHTML = newsList.join('')
}//end of newsSource

/***********************************************************
 * 라우팅 추가 부분
 * 세가지 경우의 수:최초일때, 해시에 page가 있을때, 해시에 show가 있을때
 ***********************************************************/
function router() {
  console.log("router호출 성공");
  const routePath = location.hash
  if(routePath === ''){
    newsSource()
  }else if(routePath.indexOf('#/page/')>=0){//해시가 page일때 #/page/
    //"2"->2 "5"-> 5
    store.currentPage = Number(routePath.substring(7))
    console.log(store.currentPage);
    newsSource()
  }else{
    newsDetail()
  }
}
window.addEventListener('hashchange', router)
router()
function newsDetail(){
  const routerPath = location.hash
  if(routePath === ''){
    newsSource()
  }else{
    newsSource()
  }

  }