/* 
  문제제기
  데이터가 언제 바뀌었는지 알아야 이렇게 쓸 수 있다
  다른 컴포넌트에서 그 데이터가 바뀌었는지 어떻게 알고 getState()호출할까?
  비동기 패러다임
  구독발행 모델
  내가 어떤 함수를 줄테니(즉 구독) 데이터가 바뀌면 그 함수를 호출 해 줘
  호출 해 줘의 다른 말이 발행 해 줘
*/

function createStore(){
  let state = {
    count: 0,
  }
  function send(action){
    //send안에서 worker호출할 때 두번째 파라미터에 action을 넘겨야 함.
    //이 액션은 사용처가 다르므로 외부에서 온다.
    state = worker(state, action)
  }
  function getState(){
    return state;
  }
  return {
    getState, 
    send, 
  }
}

function worker(state = { count : 0}, action){
  switch(action.type){ // 색인:increase, decrease, reset
    case "increase":
    // 맨 앞에 ...스프레드 연산자가 있는 것은 사이드이펙트 막기 위함임
      return {...state, count: state.count + 1}
    case "decrease":
      return {...state, count: state.count - 1}
    case "reset":
      return {...state, count: 0}
  }

}

const store = createStore()
store.send({type: "increase"})
console.log(store.getState());
store.send({type: "increase"})
store.send({type: "increase"})
store.send({type: "decrease"})
store.send({type: "reset"})
store.send({type: "reset"})