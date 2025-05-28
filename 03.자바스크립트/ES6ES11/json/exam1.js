// object string의 변화등을 관찰하기

let myCar = {
  'carName':'2025년형 소나타',
  'wheelNum':4,
  'speed':0
}

const methodA = (myCar) => {

  console.log(typeof myCar);
  console.log('methodA')
  console.log(myCar.carName);
  console.log(myCar.wheelNum);
  console.log(myCar.speed);
}

methodA(myCar)

const methodB = (myCar) => {

  console.log(typeof myCar);
  console.log(myCar);
  let imsi = JSON.parse(myCar)
  console.log(typeof imsi)
  console.log(imsi.carName);
  console.log(imsi.wheelNum);
  console.log(imsi.speed);
}

methodB(JSON.stringify(myCar))