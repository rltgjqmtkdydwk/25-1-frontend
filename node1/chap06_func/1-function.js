// 함수 호출 #1 : 호출과 정의의 순서가 바뀌어도 상관없다
function hello(name) {
    console.log("hello"+name);
}
hello("김은총");

// 함수 호출 #3 : 계산
function add(a,b) {
    return a+b;
}
console.log(add(3,4));
console.log(add("hello", "world"));