const sampleTodos = [
  { id: 1, text: '학교가기', completed: true },
  { id: 2, text: '친구만나기', completed: false },
  { id: 3, text: '영화보기', completed: false },
]

// 현재 할일 목록을 저장할 배열
let todos = [...sampleTodos]

// 1
const items = document.querySelector('.items')
// 2
const input = document.querySelector('.footer_input')
// 3
const addBtn = document.querySelector('.footer_button')
const resetBtn = document.querySelector('.reset_button')
const loadSampleBtn = document.querySelector('.load_sample_button')

// 할일 목록을 화면에 표시하는 함수
function displayTodos() {
  // 기존 목록 비우기
  items.innerHTML = ''
  // todos 배열의 각 항목을 화면에 표시
  todos.forEach(todo => {
    const item = createItem(todo)
    items.appendChild(item)
  })
}

function onAdd() {
  console.log('onAdd 호출')
  const text = input.value

  if (text === '') {
    input.focus()
    return
  }

  // 새로운 할일 객체 생성
  const newTodo = {
    id: Date.now(), // 현재 시간을 id로 사용
    text: text,
    completed: false,
  }

  // todos 배열에 새로운 할일 추가
  todos.push(newTodo)

  // 화면 업데이트
  displayTodos()

  // 새로 추가된 아이템으로 스크롤링
  const lastItem = items.lastElementChild
  lastItem.scrollIntoView({ block: 'center' })

  // 입력창 초기화
  input.value = ''
  input.focus()
} //end of onAdd

const createItem = todo => {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item_row')
  itemRow.innerHTML = `
  <div class="item">
    <span class="item_name">${todo.text}</span>
    <button class="item-delete">
      <i class="fas fa-trash"></i>
    </button>
  </div>
  <div class="item_divider"></div>
  `

  const deleteBtn = itemRow.querySelector('.item-delete')
  deleteBtn.addEventListener('click', () => {
    console.log('삭제 버튼 클릭')
    // todos 배열에서 해당 항목 제거
    todos = todos.filter(item => item.id !== todo.id)
    // 화면 업데이트
    displayTodos()
  })

  return itemRow
} //end of createItem

// 초기 화면 로드
window.addEventListener('load', () => {
  console.log('load 호출')
  displayTodos()
}) //

addBtn.addEventListener('click', () => {
  console.log('plus버튼 클릭')
  onAdd()
})

input.addEventListener('keypress', event => {
  console.log('key ===> ' + event.key)
  if (event.key === 'Enter') {
    console.log('Enter 키 눌림')
    onAdd()
  }
})

// 샘플 데이터 로드 버튼 클릭 이벤트
loadSampleBtn.addEventListener('click', () => {
  console.log('샘플 데이터 로드 버튼 클릭')
  // todos 배열을 sampleTodos로 초기화
  todos = [...sampleTodos]
  // 화면 업데이트
  displayTodos()
})

// 초기화 버튼 클릭 이벤트
resetBtn.addEventListener('click', () => {
  console.log('초기화 버튼 클릭')
  // todos 배열 비우기
  todos = []
  // 화면 업데이트
  displayTodos()
})
