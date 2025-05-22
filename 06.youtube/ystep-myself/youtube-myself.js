const xhr = new XMLHttpRequest();
const container = document.querySelector('#root');
  const search = (query) => {
    console.log("사용자가 입력하는 키워드는 " + query);
    const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyC3x0BnoCntN8q7Jcj-1oRlPbDnLiiyQKw`
    xhr.open('GET', SEARCH_URL, false)
    xhr.send()

    const result = JSON.parse(xhr.responseText)
    const vitems = result.items.map(item => ({
      
    }))

}




  container.innerHTML = videoList.join("")
// end of search
