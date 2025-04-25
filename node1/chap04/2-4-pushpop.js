// push, pop 메소드 : stack처럼 사용함.
// push : 배열의 끝에 항목 추가, pop : 배열의 끝 항목을 제거하고 리턴
let a = [];
for (let i=0; i<5; ++i)
    a.push(i);
console.log(a.toString());

let b = [1, 3, 5, 7];
while (b.length>0) {
    let value = b.pop();
    console.log("pop value=%d, array=[%s]", value, b.toString());
}
