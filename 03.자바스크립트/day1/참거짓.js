// 참 거짓
// false
// 0
// null
// undefined
// NaN(Not a Number)
// ''빈문자열
// 

// if문은 조건문이다 조건을 만족할 때만 실행기회를 갖는다
// 조건을 만족하지 못하면 단 한 번도 실행되지 않는다
// if 괄호안에는 참인지 거짓인지 판별하는 조건식이 온다
// 괄호안에는 비교연산자가 올 수 있다
// 실행문 한 줄이라면 좌중괄호와 우중괄호는 생략할 수 있다.
if(true) console.log('참');

if(123) console.log('123은 참이다');

if(0) console.log('123은 참이다');

if(`0`){
//if(0){
  console.log('참');
}else{
  console.log(`거짓`);
}

if(NaN){
  console.log('if');
}else{
  console.log(`else`);
}

console.log(1+'1');
console.log(1+parseInt('1'));
console.log(1+parseInt('안녕'));

console.log(null);
console.log(typeof null);

if(NaN){

}else{
  console.log('여기가 출력되었다면 NaN 너는 false분명히');
}

if(null){

}else{
  console.log('여기가 출력되었다면 null 너는 false분명히');
}

if(undefined){

}else{
  console.log('여기가 출력되었다면 undefined 너는 false분명히');
}

if(''){

}else{
  console.log('여기가 출력되었다면 "" 너는 false분명히');
}