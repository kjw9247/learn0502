class Param{
  constructor(ival=0){
    this.ival = ival
  }
}

function testParam(){
  const p = new Param()
  p.ival = 500
  console.log(p.ival);
  const methodA = (p) => {
    p= new Param() // 복사본
    p.ival = 100 // 복사본에 전변이 100으로 재정의 되었다
    console.log('methodA : ' +p.ival);
  }
  methodA(p)
  //p= new Param()
  // 원본의 값이 얼마니?
  console.log('methodA 밖에서 : ' +p.ival);
}

testParam()