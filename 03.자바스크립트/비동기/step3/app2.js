function double(x) {
  return x * 2;
}

function calcValue(a,b){//a=10, b=20 call by value 값에 의한 호출이다
  // 2초동안 기다렸다가 콜백이 실행됨.
  setTimeout(()=>{
    const hap = a+b
    console.log(hap);
    return hap
  },2000)
}
const r = calcValue(10,20)
const y = r
console.log(y);

function calcValue2(a, b, cd){//a=10, b=20 call by value 값에 의한 호출이다
  // 2초동안 기다렸다가 콜백이 실행됨.
  setTimeout(()=>{
    cd(a+b)
  },2000)
}

const r1 = calcValue2(10,20, (result) => {
  console.log(result);
  return result
})
const y1 = r1
console.log(y1);


// new Promise 사용 해보기