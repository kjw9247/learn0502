const menuItems = document.querySelectorAll('#menu li')
// console.log(menuItems); // 한가지 타입만 있다
// console.log(menuItems.length); // 한가지 타입만 있다
// const menuItems2 = document.querySelectorAll('li')
// console.log('문자열 : ' +menuItems); // 두가지 타입이 있다
// console.log('문자열 : ' +menuItems.length); // 두가지 타입이 있다


menuItems.forEach((element, index) => {
  console.log(element, index);
  element.addEventListener('click', function(){
    if (this.style.backgroundColor === 'gray' ){
      this.style.backgroundColor = '';
    } else {
      this.style.backgroundColor = 'gray';
    }
});
});