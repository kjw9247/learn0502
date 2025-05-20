import { DeptVO } from "./DeptVO.js"
// ES6 import문 지원 - Module
// NodeJS지원 - require('express') - commonJS
const myDVO = new DeptVO(50, '개발부', '부산')
myDVO.deptno = 60
myDVO.deptno = 50
myDVO.loc = '서울'
console.log(myDVO.deptno);
console.log(myDVO.dname);
console.log(myDVO.loc);

// 자바스크립트를 둘로 나누어서 테스트 해보기