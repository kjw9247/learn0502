const container = document.querySelector('#root');
// 조건 검색 결과를 화면에 출력

// input type='text'에서 입력 후 엔터를 쳤을 때
  const handleSearch = (event) => {
  if(13 == event.keyCode){
    const keyword = document.querySelector('.input');
    let word = keyword.value
    search(word)
  }
}


const search = (query) => {
  console.log("사용자가 입력하는 키워드는 " + query);
}// end of search


container.innerHTML = '조회결과'

/*
1. 키워드를 입력한 뒤 엔터를 치거나 검색이미지 버튼을 클릭했을 때 유튜브 서버에 요청을 한다
const xhr = new XMLHttpRequest()
xhr.open
xhr.send

function onKeyPress(e){
  if(e.keycode === 13){
    search(사용자가 입력한 키워드)
  }
}

2. 이벤트 소스가 두 가지 경우이므로 함수를 설계한다
- search(키워드), 조회결과처리, 결과를 가지고 하면을 처리한다
- 조회하는 함수와 화면을 처리하는 함수 두개를 가져야 되나?
  - 리턴타입은 꼭 필요한가? 아니면 전변으로 하면 괜찮은가?
- 그냥 하나로 하면 되지 않을까?
- 두개로 하는 것과 하나로 하는 것 중 어떤 쪽이 더 나은 선택인가?

3. 조건검색을 해야 하므로 사용자로부터 키워드를 입력받는다

 */ 