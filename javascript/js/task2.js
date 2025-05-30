// Task 2: Sum of Prime Numbers 
let range1;
let range2;
range1 = Number(prompt("Please enter the first number:"));
range2 = Number(prompt("Please enter the second number:"));

let sum = 0;

for (let i = range1; i <= range2; i++) {
    let isPrime = true;

    if (i <= 1) {
        isPrime = false; // 0 and 1 are not prime
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        sum += i; 
    }
}

console.log("Sum of prime numbers:", sum);

