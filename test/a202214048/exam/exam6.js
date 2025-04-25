// exam6.js
let a = [];

// 1) a 배열에 1~20 랜덤 정수 20개를 넣어라
for (let i = 0; i<20; ++i) {
    a[i] = Math.floor(Math.random() * 20 + 1);
}
console.log(a);

//2) a 배열을 내림차순 정렬하라
a.sort(compareNumber);
function compareNumber(i, j) {
  return j - i;
}
console.log(a);

// 3) a 배열에서 짝수를 모두 제거하라 // again
for (let i = a.length - 1; i >= 0; i--) {
    if ((a[i] % 2 ) == 0) {
        a.splice(i, 1);
    }
}
console.log(a);

// 4) a 배열의 모든 값을 한 줄에 하나씩 출력하라
let i = 0;
while (i < a.length) {
    console.log(a[i])
    i++;
}