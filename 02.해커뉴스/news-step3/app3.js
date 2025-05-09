const xhr = new XMLHttpRequest()
//제목을 클릭했을때 제목을 읽어와서 다른 화면에 출력하기
const content = document.createElement("div")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@ID.json"

//getData함수의 파라미터 자리에 url에 대입되는 값은 언제 결정되나?
//호출할 때 결정된다.
//파라미터 자리에 선언된 변수는 지역변수이다. - 기초
function getData(url){
  xhr.open("GET", url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
  //이 함수는 return이 필요하다? O
}//end of getData

const newsList = getData(NEWS_URL)
const ul = document.createElement("ul")

window.addEventListener("hashchange",() => {
    const id = location.hash.substring(1)
    const newsList = getData(CONTENT_URL.replace("@ID", id))
    const ul = document.createElement("ul")
    const newsContent = JSON.parse(xhr.responseText)
    console.log(newsContent);
    content.innerHTML = ""
    const title = document.createElement("h1")
    title.innerText = newsContent.title
    content.replaceChildren(title)//
  });
  /*
  replacerChildren()함수는 한번의 호출로 기존이 모든 자식 요소를 제거하고
  새로운 요소를 추가하는 작업을 동시에 수행합니다.
  이전 방법과 비교했을 때 코드가 간결합니다.
  성능이 좋다(DOM조직이 한 번만 발생하기에 가독성이 좋다)
  innerHTML이나 while 루프를 사용하는 것보다 더 효율적인 방법이다.
  */


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