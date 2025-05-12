const insa = () => {
    //결합도를 낮추는 코드를 작성해 보자
    console.log("인사 함수 호출 성공");//로그(공통된 관심사: AOP)
    const N_root = document.querySelector("#root")
    console.log(N_root);
    N_root.innerText = ("페이지 진입 성공")
}               