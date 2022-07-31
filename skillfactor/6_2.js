function isPrimeNum(number){
    let isPrime = true;
    
   if (number > 1 && number < 1000) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
   } else {
    console.log(`${number} больше 1000`)
   }
}

isPrimeNum(1001)