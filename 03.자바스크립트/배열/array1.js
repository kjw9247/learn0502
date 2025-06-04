let items = [
  {id:1, name:'벤치프레스', count: 0},
  {id:2, name:'랫플다운', count: 3},
  {id:3, name:'스쿼트', count: 5},
]

// 운동 제목 추가하기
const handleAdd = () => {
  const workouts = [...items, {id: items.length+1, name:'론지', count:0}]
  console.log(items);
  console.log(workouts);
  console.log(workouts.length);
  console.log(items.length);
}

handleAdd()


// 운동 제목 삭제하기 - filter
// filter함수는 Array객체의 prototype이다
// Array객체가 제공하는 prototype함수들은 누가 언제 호출하더라도 결과가 같다
// filter함수의 리턴타입은 Array이다
const handleDelete = (id) => {
  // filter 함수의 반환타입은 object인가 array인가
  // items와 result는 서로 다른 배열이다, 주소번지가 다르다
  const result = items.filter(item => id != item.id)
  console.log(typeof result);
  console.log(result.length);
  console.log(result);
}

handleDelete(2)
console.log(items);
// 싱글톤


/* Filter 함수
const handleDel = () => {
  const leftWorks = items.filter(items => items.count === 0)
  console.log(leftWorks);

}
handleDel()
*/