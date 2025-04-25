// 1초 간격으로 현재 시각을 출력하는 코드를 구현하시오. 10번 출력 후 clear
const id = setInterval((msg) => console.log(msg, new Date()), 1000, "1초간격");
setTimeout(() => clearInterval(id), 11000);
