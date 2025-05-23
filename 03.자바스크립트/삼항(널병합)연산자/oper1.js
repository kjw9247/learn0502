// 삼항 연산자
// 조건 ? 참 : 거짓

let msg

function getAlert(message){
  return message ? message : '메세지가 존재하지 않습니다'
}

msg = getAlert()
console.log(msg);
msg = getAlert(null)
console.log(msg);
msg = getAlert('null') // 문자열
console.log(msg);
msg = getAlert('undefined') // 문자열
console.log(msg);
msg = getAlert(undefined)
console.log(msg);
