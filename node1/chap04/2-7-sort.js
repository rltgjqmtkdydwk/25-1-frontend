//sort : 문자열인 것 처럼 정렬
let a = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9];
a.sort();
console.log(a); //[ 1, 10, 11, 2, 3, 4,  5,  6, 7, 8, 9 ]

// 숫자처럼 정렬하기 : 대소 비교하기
function compareNum(i, j) {
    return i-j;
}
a.sort(compareNum);
console.log(a); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

// 내림차순 정렬하기
function compareNumReverse(i, j) {
    return j-i;
}
a.sort(compareNumReverse);
console.log(a); //[ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

//reverse : 항목의 순서 뒤집기
let r = [];
for (let i = 0; i < 5; ++i)
  r.push(i)
r.reverse();
console.log(r); //[ 4, 3, 2, 1, 0 ]