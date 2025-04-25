let a = [];

for (i=0; i<100; i++) {
    a[i] = Math.round(Math.random()*100);
}

for (i=0; i<a.length; i++) {
    if (a[i]%2 == 0) {
        a.splice(i, 1);
    }
}

a = a.sort(compareNum);
console.log(a);

function compareNum(i,j) {
    return i-j;
}