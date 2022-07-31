function getNumbers(array) {
    let odd = 0;
    let even = 0;
    let zero = 0;

    array.forEach(element => {
        if (element === 0){
            zero++
        } else if (element % 2 == 0){
            even++
        } else {
            odd++
        }
    });

    console.log(`Кол-во нечетных - ${odd}`)
    console.log(`Кол-во четных - ${even}`)
    console.log(`Кол-во нулей - ${zero}`)
}

getNumbers([0, 0, 0, 1, 2, 3, 4])

