// unshift, shift 메소드
// unshift : 배열의 선두에 항목을 추가()=add), shift : 배열의 선두에 있는 항목을 배열에서 제거하고 리턴(=remove)
let a = [];
for (let i=0; i<5; i++)
    a.unshift(i);
console.log(a.toString()); // 4,3,2,1,0

let b = [1, 3, 5, 7];
while (a.length>0) {
    let value = a.shift();
    console.log("pop value=%d, array=[%s]", value, a.toString());
}
// pop value=4, array=[3,2,1,0]
// pop value=3, array=[2,1,0]
// pop value=2, array=[1,0]
// pop value=1, array=[0]
// pop value=0, array=[]