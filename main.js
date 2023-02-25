console.log ("Initalized");

let number = 2;
const sumOfNumbers = [];

while (number < 1000){
    if (number % 3 == 0 && number % 15 != 0) {
        sumOfNumbers.push(number);
    }
    if (number % 5 == 0 && number % 15 != 0) {
        sumOfNumbers.push(number);
    }
    if (number % 15 == 0) {
        sumOfNumbers.push(number);
    }
    number++
} 

 console.log (sumOfNumbers.reduce((a, b) => a + b, 0));
   