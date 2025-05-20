import { msg, insa, names, Pirde } from './module1.js'
console.log(msg);
// msg = '안녕' msg is read only 재정의가 불가하다
// insa = '내일봐'
console.log(insa);
// 3<3 -> false : for문 블록을 빠져나간다
// for문안에서 어떤 조건을 만족하면 빠져나가기를 할 때 break 사용 할수 있다
// 무한루프를 방지하는 코드를 작성한다
for(let i=0;i<names.length;i++){// i++ 후위연산잔 i=i+1
  if(i=1){// i가 0이므로 조건을 만족하지 않으니까 다시 for문으로 올라감
    break
  }
  console.log(names[1]);//i
}
console.log('여기');
console.log(Pride);
const himCar = new Pride
console.log(himCar.speed);
himCar.speedDown()
himCar.speedDown()
himCar.speedDown()
console.log(himCar.Pride)
const herCar = new Pride
console.log(herCar.Pride)
;