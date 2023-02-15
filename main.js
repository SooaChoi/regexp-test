const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
//정규식.test(문자열)
//const regexp = new RegExp('fox', 'gi')
const regexp = /fox/gi
console.log(regexp.test(str))

//문자열.replace(정규식, 대체문자)
console.log(str.replace(regexp, 'AAA'))
console.log(str) //처음 쓴 문자열을 바꾸고 싶다면 let으로 str 재할당

console.log(str.match(/^t/gm)) //대문자 t도 찾고 싶으면 i옵션 추가
console.log(str.match(/d$/gm))

console.log(str.match(/h..p/g)) //"http"
console.log(str.match(/fox|dog/g)) //g가 없으면 둘 중에 먼저 찾아지는 것을 출력
console.log(str.match(/https?/g)) //?앞에 있는 s가 있을 수도 있고 없을 수도 있음

console.log(str.match(/d{2}/)) //"dd"
console.log(str.match(/d{2, }/)) //"dddd"
console.log(str.match(/d{2, 3}/)) //"null"

console.log(str.match(/\w{2,3}/g)) //숫자 포함 알파벳(\w)
console.log(str.match(/\b\w{2,3}\b/g)) //숫자 또는 알파벳의 경계 생성(\b)

const h = `  the hello  world   !

`
console.log(h.replace(/\s/g, '')) //공백 문자 삭제