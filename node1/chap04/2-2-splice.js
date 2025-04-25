// splice 메소드 : 배열.splice(삽입 위치, 삭제할 항목 수, 삽입할 값 목록)
let a = [0, 1, 2];
a.splice(1, 0, "a"); 
console.log(a);  // [ 0, 'a', 1, 2 ]

let b = [0, 1, 2];
b.splice(1, 0, "a", "b");
console.log(b);  // [ 0, 'a', 'b', 1, 2 ]

let c = [0, 1, 2];
c.splice(1, 1, "a");
console.log(c);  // [ 0, 'a', 2 ]

let d = [0, 1, 2];
c.splice(1, 2, "a");
console.log(d);  // [ 0, 1, 2 ]

let e = [0, 1, 2];
e.splice(1, 1);
console.log(e);  // [ 0, 2 ]