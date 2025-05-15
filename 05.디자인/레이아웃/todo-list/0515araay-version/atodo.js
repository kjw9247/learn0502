//우리는 전역변수로 선언하기로 하였다.
const sampleTodos = [
  {id: 1, text: '학교가기', completed: true},
  {id: 2, text: '친구만나기', completed: false},
  {id: 3, text: '과제제출하기', completed: false},
]

// 얕은복사 & 깊은복사
// 현재 원본을 유지하기 위해 - 할일 목록 배열 복사하기
let todos = [...sampleTodos]

// 함수를 설계하기 - 기초는 아니다
// 배열에 있는 일정을 삭제하기 - 삭제된 내용은 목록에 보이지 않아야한다
// 배열에 있는 일정 중 수정하기 -> 수정한 내용은 목록에서 바뀌어 있어야 한다
// 새로고침을 담당하는 함수를 구현해 보자

function replaceAll(){
  // 기존의 값은 비운다
  // 이런 코드를 굳이 DOM API를 쓸 필요가 없다
  // items.innerHTML = ''     //이것이 초기화다
  // 복사한 todos배열의 각 항목을 화면에 표시하기
  // todos는 Array고 todo는 Array에 들어 있는 {} -object 이다
  todos.forEach(todo => {
  const item = createItem(todo)
  items.appendChild(item)  //items가 ul태그라는 인지하고 있어야한다
  })
}
const loadSampleBtn = document.querySelector('.load_sample_button')

const getTodoList = () => {
  console.log("콜백함수");
  while(items.firstChild){
    items.removeChild(items.firstChild)
  }
  sampleTodos.forEach(todo => {
    const item = createItem(todo.text)
    items.appendChild(item)
  })
}
loadSampleBtn.addEventListener('click', getTodoList)

//초기화 버튼 구현하기
const resetBtn = document.querySelector(".reset_button")
const deleteAll = () =>{
  console.log("모두 삭제");
  while(items.firstChild){
    items.removeChild(items.firstChild)
  }
}
resetBtn.addEventListener('click', deleteAll)



const items = document.querySelector(".items")
const input = document.querySelector(".footer_input")
const addBtn = document.querySelector(".footer_button")
const onAdd=()=> {
  const itemName = input.value
  console.log("사용자가 입력한 오늘의 할 일 : "+itemName);
  if(itemName === ''){
    input.focus()
    return
  }


  const item = createItem(itemName)
  items.appendChild(item)
  item.scrollIntoView({block: 'center'})
  replaceAll()
  input.value = ''
  input.focus()
}
const createItem=(itemName)=>{
  console.log(itemName);
  const itemRow = document.createElement("li")
  itemRow.innerHTML = `
    <div class="item">
      <span class="item_name">${itemName}</span>
      <button class="item-delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="item_divider"></div>
  `
  const deleteBtn = itemRow.querySelector(".item-delete")
  deleteBtn.addEventListener('click',()=>{
    items.removeChild(itemRow)
  })
  return itemRow
}

addBtn.addEventListener('click', ()=>{
  console.log('plus버튼 클릭');
  onAdd();
})
input.addEventListener('keypress', (event)=>{
  if (event.key === 'Enter') {
    console.log('엔터키를 눌렀습니다.');
    onAdd();
  }
});