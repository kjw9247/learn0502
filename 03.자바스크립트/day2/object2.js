/* 멀티라인 주석이다.
  사용자 정의 함수 선언하기, 구현하기

*/

function User() {// 생성자 함수 - 고전
    this.name = "강감찬"
    this.age = 55
}

const user = new User()
console.log(user);
console.log(user['name']+ ", " + user.name);
// 나는 강감찬 이고, 나는 55세 입니다.

console.log("나는 강감찬 이고, 나이는 55세 입니다.");
console.log("나는 "+user['name']+" 이고, 나이는 55세 입니다.");
console.log("나는 "+user.name+" 이고, 나이는 "+user[age]+"세 입니다.");
console.log(`나는 ${user.name} 이고, 나이는 ${user.age} 입니다.`);// ES6문법임 추천








// this는 윈도우


// crtl 방향키 아래
// crtl d 삭제