// 누가 상태의 구조를 알고 있나? - 개발자
// 상태를 관리해야 하는 업무는 밖에 있다
// 이 함수 밖에서 사용한다
function createStore(){
  let state = {
    const : 0,
    other, // null, undefined
  }
  // createStore함수 밖(외부)에서 내안에 있는 상태값을 사용하고자 할 때
  // 사용할 함수를 선언하자
  function getState(){
    return state;
  }
  // 리턴타입도 객체 리터럴을 사용하였다
  // 바깥 쪽과 소통하는 통로는 return 바로 안에 있는 객체이다
  return {
    getState, // 고차함수
  }
}

// 어플리케이션 개발자들이 상태를 변경하는 로직(처리)을 작성해야 한다
// worker안에서 무언가를 해야한다 -> 상태를 바꿔야 한다
// 그런데 상태를 바꿔야 될 상태는 createStore 안쪽에 있다
// createStore가 상태를 갖고 있고 상태를 바꾸고자 하는 코드는
// 바깥에 있다
// worker안에 state에 undefined가 발생하는 것을 방어하기 위해 초기화 하였다
// 파라미터로 넘어온 상태를 직접 바꾸면 참조무결성 문제가 발생하므로 기존에 연결을
// 끊고 새로운 상태를 만들어야 함
// 예상하지 못한 side effect 원천적으로 차단하도록 작성할 것
function worker(state = { count : 0 }){
  // 변수는 선언이 먼저 이다 - XXX is not defined, undefined
  // -> ...은 스프레드 연산자이다 -> 깊은 복사 할 때 사용함
  // 복사본에 값이 바뀌었다
  return {...state, count: state.count + 1}
}



// 상태를 바꿔야 될 상태는 createStore 안쪽에 있다
const store = createStore()