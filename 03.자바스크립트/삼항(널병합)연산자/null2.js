// Nullish 병합 연산자를 사용한 경우 - 왼쪽부터 비교함
// 그러나 null, undefined는 건너 뛰고 나머지 데이터 만나면
// 처음 만나자마자 반환해줌

const n = 0
const num1 = n ?? 7
console.log(num1);

console.log(null ?? 1);
console.log(undefined ?? 1);
console.log(null ?? 1 ?? 2);
console.log(false ?? 1 ?? 2);