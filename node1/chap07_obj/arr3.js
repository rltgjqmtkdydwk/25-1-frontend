let persons = [
    { name : "홍길동", age: 16 },
    { name : "임꺽정", age: 18 },
    { name : "전우치", age: 19 },
]
console.log(persons);

persons[2] = persons[1]; // 객체가 새로 만들어지는 것이 아니라 둘다 같은 주소를 가리키고 있는 것
persons[1].age = 20

console.log(persons);
console.log(persons[1] == persons[2]); // true