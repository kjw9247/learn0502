const container = document.querySelector('#root');
// 비동기 통신 객체 생성하가
let xhr = new XMLHttpRequest() // 인스턴스화 -> 생성자 함수가 호출됨
xhr = new XMLHttpRequest() 
const key = 'AIzaSyC3x0BnoCntN8q7Jcj-1oRlPbDnLiiyQKw'
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
xhr.open('Get', YOUTUBE_URL, false) // xhr = 인스턴스 변수
xhr.send()

const result = xhr.responseText
const result2 = JSON.parse(xhr.responseText) // JSON.parse() : 문자열을 객체로 변환
console.log(result);
console.log(result2.items);
console.log(result2.items.length);
const x = result2.items // []
const y = x.length



container.innerHTML = '출력 결과'
