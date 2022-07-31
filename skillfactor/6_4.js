const numbers = function (a, b) {
    timer = setInterval(() => {
        if (a <= b) {
            console.log(a)
            a++;
        } else {
            clearInterval(timer)
        }
    }, 1000);
}

numbers(5, 15);