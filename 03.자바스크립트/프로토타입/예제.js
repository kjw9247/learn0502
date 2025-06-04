// prototype을 이용하면 나도 자바스크립트 처럼 흉내내기를 해본다
// 사용자가 이용하는 메뉴, 기능(프론트) 이런것을 피한다 - 자꾸 수정건이 발생함
// 백엔드 - 변화가 적다, 수정할 일이 작다
// 라이브러리 만든다, 프레임 워크 만든다
// 또는 고전적인 아이디어나 아키텍처를 직접 만들어 볼 수도 있다
// 고전적인 아이디어 - 구독발행 모델
// 아키텍처 - Flux아키텍처

function Counter(){
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function(array){
  // array = [2,5,9]
  array.forEach(function(item){
    this.sum += item // 0 -> 2 -> 7 -> 16
  }, this)
}

const obj = new Counter()
obj.add([2,5,9])
console.log(obj.sum);

const obj2 = new Counter()
obj2.add([1,3,5])
console.log(obj2.sum);

// 우리가 정의한 Counter표준이 아니다
// 또한 배포하지도 않았다 -> 그래서 구굴에서 사용이 불가하다

function Sonata(){
  this.wheelNum
  this.speed
  this.carName
}

Sonata.prototype.stop = function(wheelNum){
  console.log('stop호출', wheelNum);
}

// 하나를 공유한다 - 싱글턴 패턴
// 객체는 3개가 만들어졌지만 함수는 한 개만 만들어서 서로 공유한다
const myCar = new Sonata()
myCar.stop(4)
const herCar = new Sonata()
myCar.stop(4)
const himCar = new Sonata()
myCar.stop(4)