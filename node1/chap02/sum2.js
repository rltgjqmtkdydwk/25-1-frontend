// 2) 합계2 : 1 이상 55 이하의 모든 3의 배수를 더해서 화면에 출력하는 코드를 반복문으로 구현하시오.
let count = 0;
for (let i=1; i<=55; i++)
    if (i%3==0)
        count += i;
    else
        continue;

console.log(count);