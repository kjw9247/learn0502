const items = document.querySelector(".items") // ul

const input = document.querySelector(".footer_input") // input

const addBtn = document.querySelector(".footer_button")// 홈버튼 플러스


// input태그에서 엔터를 쳤을 때 또는 plus버튼을 클릭했을 때
//재사용을 위해서 함수로 설계 하였다.
const onAdd = () => {
  // 사용자가 입력한 친구만나기를 읽어와서 createItem함수를 호출할 때
  // 파라미터로 넘긴다.
  const itemName = input.value
  console.log("사용자가 입력한 오늘의 할 일 : " +itemName);
  //
  //
  //
  //
  // if(0) false, 
  // if(500)
  // 혹시 아무것도 입력하지 않고서 엔터나 버튼을 클릭한건가?
  // 조건문은 우리 프로그램의 흐름을 바꾼다
  if(itemName === ''){
    input.focus
    // if문 아래쪽에 있는 코드는 실행 기회를 갖지 못한다
    return // if문 안에서 return을 만나면 해당 함수를 빠져 나간다
  }// end of if
  const item = createItem(itemName)
  items.appendChild(item)
  //새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'})
  input.value = ''
  input.focus()
}// end of onAdd
// onAdd 즉 이벤트가 발동되었을 때 인터셉트 하여서 사용자가 입력한 itemName을
// ul(.item)태그 아래 li태그에 삽입한다
const createItem=(itemName) => {
  console.log(itemName);//사용자가 엔터치거나 push버턴을 눌렀을 결정된다
  const itemRow = document.createElement("li")
  itemRow.innerHTML = `
    <div class="item">
      <span class="item_name">${itemName}</span>
      <button class="item_delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="item_divider"></div>
  `
  const deleteBtn = itemRow.querySelector(".item_delete")
  deleteBtn.addEventListener('click',()=>{
    items.removeChild(itemRow)
  })
  return itemRow
}


addBtn.addEventListener('click', () => {
  console.log('push버튼 클릭');
  onAdd();
})

input.addEventListener('keydown', (event) => {
  console.log(event.key);// 13
  if (event.key === 'Enter'){
    // 엔터키를 눌렀을 때 수행할 동작
    console.log('엔터키를 눌렀습니다');
    onAdd();
  }
})
