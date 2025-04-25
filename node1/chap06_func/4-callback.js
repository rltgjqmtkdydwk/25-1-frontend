// 1) 함수 자료형 : 함수도 값이다
// 1. 변수에 함수를 대입할 수 있고, 변수로 함수를 호출할 수도 있음
function add(a, b) {
    return a+b;
}
let a = add(3,4);
console.log(a); //7

let f = add;
console.log(typeof f); //function

let b = add(3,4);
console.log(b); //7

// 2. 변수 f에 함수를 직접 대입하는 방법
let ff = function(a,b) {
    return a+b;
}
let aa = ff(3,4)
console.log(aa);

