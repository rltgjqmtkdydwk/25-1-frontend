let text = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let a = [];

for (let i=0; i<text.length; ++i)
    text = text.slice(i);
    idx = text.search(/[aeiou]+/);
    a.push(idx);
    i = idx;
console.log(a);