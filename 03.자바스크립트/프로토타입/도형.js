// 자바스크립트는 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을
// 지원하는 멀티 패러다임 프로그래밍 언어이다

const circle = {
  radius: 5, // 원의 반지름
  // 원의 지름을 구하는 함수
  getDiameter(){
    return 2 * this.radius
  },
  getArea(){
    return Math.PI*this.radius**2
  }
}

console.log(circle);
console.log(circle.getArea());
console.log(circle.getDiameter());

function Circle(radius){
  this.radius = radius
  this.getArea = function(){
    return Math.PI * this.radius**2
  }
}

// c1과 c2를 활용하면 서로 다른 원의 면적을 구할 수 있다
const c1 = new Circle(1)
const c2 = new Circle(3)

console.log(c1.getArea());
console.log(c2.getArea());

console.log(c1.getArea === c2.getArea);

// 동일한 기능을 제공하는 함수를 매번 새로 생성하는게 맞는것인가?
// 하나로 통일하면 안되는 것인가?

// 프로토타입이 등장하게 된 배경
// Circle생성자 함수는 인스턴스를 생성 할 때마다 동일한 동작을 하는
// getArea메서드를 중복 생성하고 모든 중복 인스턴스가 중복 소유한다
// getArea 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다