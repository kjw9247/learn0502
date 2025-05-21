// Spread syntax - 주소의 참조값만 복사해 온다
const emp = { key: 'empno' } // 사원번호 사원집합의 primary key(기본키)
const dept = { key: 'deptno' } // 부서번호 부서집합의 primary key(기본키)
const array = [emp, dept]
console.log(array);
// 배열을 복사 해야 한다면.....
// spread syntax를 활용하여 복사할 수 있다.
const arrayCopy = [...array]
console.log(arrayCopy);

console.log(array == arrayCopy); // false
console.log(array === arrayCopy); // false

// array가 가르키는 배열과 arrayCopy가 가르키는 배열이 다르다

console.log(arrayCopy==[...arrayCopy, {key:'email'}])
console.log(arrayCopy)
console.log(...arrayCopy, {key:'email'})

const arrayCopy2 = [...arrayCopy, {key:'email'}]
console.log(arrayCopy == arrayCopy2);
/*
1. 얕은복사 (Shallow Copy)
객체를 복사할 때 해당 객체만 복사하여 새 객체를 생성한다
복사된 객체의 인스턴스 변수는 원본 격체의 인스턴스 변수와 같은 메러리 주소를 참조한다
따라서, 해당 메모리의 주소 값이 변경 된다면 원본 객체 및
복사 및 복사 자체의 인스턴스 변수 값이 변동된다
2. 깊은 복사 (Deep Copy)
객체를 복사할 때 해당 객체와 인스턴스 변수까지 복사하는 방식
전부를 복사하여 새 주소에 담기 때문에 참조를 공유하지 않는다

*/