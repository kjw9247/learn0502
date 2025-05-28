const p = new Promise((resolve, reject)=>{
  //resolve('ok')
  setTimeout(()=>{
    reject('실패')
  },2000)
})

p.then(function(ok){
  console.log(ok);// ok 출력
}).catch((error)=>{
  console.log(error);
})