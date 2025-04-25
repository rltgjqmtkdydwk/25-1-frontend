// slice 메소드 : 배열.slice(시작 위치, 끝 위치)
// 끝 위치를 생략하면 끝까지라는 뜻
let a = [0, 1, 2, 3];
console.log(a.slice(0,1)); //[0]
console.log(a.slice(0,2)); //[0,1]
console.log(a.slice(1,2)); //[1]
console.log(a.slice(1,3)); //[1,2]

let b = a.slice(0); //배열의 복제
console.log(b); //[ 0, 1, 2, 3 ]