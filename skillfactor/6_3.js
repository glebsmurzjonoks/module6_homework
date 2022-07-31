function firstFunction(a) {
    function secondFunction(b) {
        return a + b;
    }
    return secondFunction(10);
}

console.log(firstFunction(10));