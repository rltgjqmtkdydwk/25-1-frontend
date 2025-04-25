let person = { name: "홍길동", age: 16, english: 90, math: 85, history: 95 };
console.log(person); // { name: '홍길동', age: 16, english: 90, math: 85, history: 95 }

let { name, age, ...scores } = person; // person의 나머지 속성을 scores의 속성으로 복사
let person1 = { name, age, scores };
console.log(person1); // { ~, scores: { english: 90, math: 85, history: 95 } }

let person2 = { name, age, ...scores }; // scores의 속성들을 person2에 복사
console.log(person2); // { name: '홍길동', age: 16, english: 90, math: 85, history: 95 }