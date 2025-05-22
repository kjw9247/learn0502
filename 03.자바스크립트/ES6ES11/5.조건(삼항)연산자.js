const isDog = true

{
  const isDog = false// true 
  {
    let component
    if(isDog){
      component = '진돗개'
    }else{
      component = '물고기'
    }
    console.log(component);

    {
      const component = isDog ? '진돗개' : '물고기'
      console.log(component);
      console.log(isDog ? '진돗개' : '물고기');
    }
  }
}