const user = new Object()
user.name = '이순신'
user.age = 60

console.log(user);

function Person(){
  this.name = '강감찬'
  this.age = 70
}
//const xhr = new XMLHttpRequest()
let p = new Person()
console.log(p);
p.age = 10
console.log(p);

p = new Person() // 복사본이다

console.log(p);