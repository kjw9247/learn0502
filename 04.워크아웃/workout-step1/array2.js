const items = [
  {id:10, name: '벤치프레스', count: 5},
  {id:20, name: '렛풀다운', count: 3},
  {id:30, name: '스쿼트', count: 7},
]
let workouts = []
//운동 제목 추가하기
const handleAdd = (myName, count) => {
  console.log('handleAdd : ' +myName);
  workouts = [...items, {id: items.length+1, name: myName, count: count+1}];
  console.log(workouts);
  return workouts
}

//운동 제목 삭제하기
const handleDelete = (id) => {// 30
  const imsi = workouts.filter((item) => item.id != id)
  console.log(imsi);
  
}
// 자바스크립트에서는 어떤 이름에 싱글 또는 더블 퀘티이션이
// 없으면 변수 취급
handleAdd('론지', 9)
printItems()
handleDelete(30)

// 추가한 다음에도 추가된 내용을 확인 하고 싶고,
// 또 삭제한 다음에도 삭제가 잘 되었는지 확인 하고 싶다면
// 함수 설계
// 사용자 정의 함수 구현하기
function printItems(){
  for(let i=0; i<items.length; i++){
    console.log(`${items[i].name}, ${items[i]['count']}`);
  }
}








/* for(let i=0;i<items.length;i++) {
  console.log(items[i].name);
}

const allItems = [...items, {id:50, name:'사이클', count:3}]

for(let i=0; i<allItems.length; i++){
  console.log(allItems[i].name);
} */



/* const myCars = [
  {sno:1, carName:"소나타", wheelNum: 4},
  {sno:2, carName:"그랜져", wheelNum: 4},
  {sno:3, carName:"소렌토", wheelNum: 4},
]

for(let i=0;i<myCars.length;i++){
  console.log(myCars[i].carName);
}

const yourCar = [...myCars, {sno:5, carName:"레이", wheelNum: 4}]

for(let i=0;i<yourCar.length;i++){
  console.log(yourCar[i].carName);
} */






