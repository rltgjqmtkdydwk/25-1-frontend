// toLowerCase, toUpperCase 메소드 : 소문자, 대문자로 변경
let to = "HeLlO wOrLd";
console.log(to.toLowerCase());
console.log(to.toUpperCase());

// concat 메소드 : 문자열 연결
let c1 = "hello";
let c2 = "world";
console.log(c1.concat(" ", c2, "!"));
console.log(c1 + " " + c2 + "!");

// trim 메소드 : 양 옆의 공백 제거
let t = " hello world ";
console.log("[%s]", t.trim());
console.log("[%s]", t);

// charAt, charCodeAt 메소드 : 각각 문자, 문자의 코드값 리턴
let ch = "hello world";
for (let i=0; i<ch.length; i++) 
    console.log("%s %s %d", ch[i], ch.charAt(i), ch.charCodeAt(i));
let char = "안녕하세요";
for (let i=0; i<char.length; i++) 
    console.log("%s %s %d", char[i], char.charAt(i), char.charCodeAt(i));

// split 메소드 : "구분 문자열"을 기준으로 잘라서 배열 리턴
let s1 = "one two three four";
let sp1 = s1.split(" ");
for (let i=0; i<sp1.length; i++)
    console.log(sp1[i]);

let s2 = "one two, three   four";
let sp2 = s2.split(/[\t ,]+/);
for (let i=0; i<sp2.length; i++)
    console.log(sp2[i]);

let s3 = "hello";
let sp3 = s3.split("");
for (let i=0; i<sp3.length; i++)
    console.log(sp3[i]);

// match 메소드 : 정규식에 맞는 형식의 문자열 찾아서 객체 리턴
let m1 = "list.jsp?pg=324&sz=15".match(/pg=[0-9]+/);
console.log(m1[0]); //pg=324(match 문자열의 첫번째 인덱스에 저장)
console.log(m1.index); //9(찾은 문자열 인덱스 위치)

let m2 = "list.jsp?pg=324&sz=15".match(/pg=([0-9]+)/);
console.log(m2[0]); //pg=324
console.log(m2.index); //9
console.log(m2[1]); //324

let m3 = "list.jsp?pg=324&sz=15".match(/pg=([0-9]+)&sz=([0-9]+)/);
console.log(m3[0]); //pg=324&sz=15
console.log(m3[1]); //324
console.log(m3[2]); //15
console.log(m3.index); //9