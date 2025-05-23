// pass by value / reference ?
// 클랙스 - 필드, 동사
// Object(객체) 
const userA = {
  name: '이순신',
  age: 55

}
const userB = {
  name: '강감찬',
  age: 55,
  parent: userA
}

console.log(userA);
// 아래는 원본 값을 변경했다 - 얕은복사 vs 깊은복사
userA.age = 80 // 재정의 하였다-> let
console.log(userA);
console.log(userB.parent);
