{
  // 0부터 9사이에 숫자를 채번하고 그 숫자를 맞추는 게임 구현
  console.log('11');
  let jumsu = 110
  console.log(Math.floor(jumsu/10));
  switch(Math.floor(jumsu/10)){
    case 7:
      console.log('당신의 학점은 C입니다.');
      break; // break가 없다면 연달아 작동된다
    case 8:
      console.log('당신의 학점은 B입니다.');
      break; 
    case 9:
      console.log('당신의 학점은 A입니다.')
      break
    default:
      console.log('당신의 학점은 F입니다');
      break
  }// end of switch

}