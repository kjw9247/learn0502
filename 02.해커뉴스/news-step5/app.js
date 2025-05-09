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
}//end of getData

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
  //1-10, 11-20, 21-30
  //0-9, 10-19, 20-29
  for(let i=(store.currentPage-1)*10;i<store.currentPage*10;i++){
    newsList.push(`
      <li>
        <a href="#/show/${news[i].id}">
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

function router() {
  console.log("router호출 성공");
  const routePath = location.hash
  // == 값만 비교,  === 값도 비교하고 타입도 비교함.
  if(routePath === ''){
    newsSource()
  }else if(routePath.indexOf('#/page/')>=0){//해시가 page일때 #/page/
    //"2"->2 "5"-> 5
    store.currentPage = Number(routePath.substring(7))
    console.log(store.currentPage);
    newsSource()
  }else{//해시가 show일때 #/show/
    newsDetail()
  }
}
//보통은 다음페이지를 클릭하거나 이전 페이지를 클릭했을 때 호출한다.
//아래코드는 hashchange 가 발생했을 때 호출되는 함수를 두번째
//파라미터에 적는다. ->함수 호출이다.
//함수 호출시에 파라미터의 갯수나 타입을 맞춰야 한다.
window.addEventListener('hashchange', router)
//최초 한 번 호출을 위해서 추가하기
router()