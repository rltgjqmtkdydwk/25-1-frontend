function test1(f) {
    let result = f(3,4);
    console.log(result);
}

const add = (a,b) => {
    return a+b;
}

const multiply = (a,b) => {
    return a*b;
}

test1(add);
test1(multiply);