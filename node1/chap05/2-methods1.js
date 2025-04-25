// indexOf 메소드 : 문자열의 부분 문자열의 위치 인덱스 리턴
let io = "one two one two";
console.log(io.indexOf("two")); //4
console.log(io.indexOf("two", 5)); //12
console.log(io.indexOf("Two")); //-1

// lastIndexOf 메소드 : 시작 인덱스부터 거꾸로 찾은 위치를 리턴
let lio = "one two one two";
console.log(lio.lastIndexOf("two")); //12
console.log(lio.lastIndexOf("two", 11)); //4
console.log(lio.lastIndexOf("Two")); //-1

// search 메소드 : (/정규식/) 찾은 위치 리턴
let s = "hello world";
console.log(s.search(/[A-Z]/)); //6

// slice 메소드 : (시작위치, 끝위치) 부분 문자열 리턴. 음수면 역방향 인덱스
let sl = "abcdefgh";
console.log(sl.slice(2,4)); //cd
console.log(sl.slice(2)); //cdefgh
console.log(sl.slice(-3)); //fgh

// substring 메소드 : slice랑 비슷함. (시작위치, 끝위치)에 음수 사용 불가
let sub = "abcdefgh";
console.log(sub.substring(2, 4)); //cd
console.log(sub.substring(2)); //cdefgh
console.log(sub.substring(sub.length - 3)); //fgh

// substr 메소드 : slice랑 비슷함. (시작위치, 부분 문자열의 길이)
let subst = "abcdefgh";
console.log(subst.substr(2, 2)); //cd
console.log(subst.substr(2)); //cdefgh
console.log(subst.substr(-3)); //fgh

// replace 메소드 : 정규식사용ok. 같은 문자가 있어도 첫번째 문자열만 치환
let r = "hello world";
console.log(r.replace("o", "O")); //hellO world
console.log(r) //hello world
let rr = "hello world";
console.log(rr.replace(/o/g, "O")); //hellO wOrld
console.log(rr) //hello world
