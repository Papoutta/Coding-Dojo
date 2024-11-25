// Problem 1 
// Write an arrow function that checks to see if a user is older than 18.

const OlderThan18 = (age) => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(OlderThan18(20))


// Problem 2
// Write an arrow function that checks to see if it is currently raining.
const checkRain = (isRaining) => isRaining ? "Get your rain jacket!" : "No rain on today's forecast!"
console.log(checkRain(true))
console.log(checkRain(false))

// Problem 3 
// Write an arrow function that checks to see if a number is even.

const checkEvenOdd = (number) => number % 2 === 0 ? "That's an even number!" : "That's an odd number!"
console.log(checkEvenOdd(4))
console.log(checkEvenOdd(7))


//Problem 4 
// Write an arrow function that takes in two parameters and checks whether one number is greater than another.

const compareNumbers = (num1, num2) => num1 > num2 ? `${num1} is more than ${num2}!` : `${num1} is less than ${num2}!`
console.log(compareNumbers(5, 3))
console.log(compareNumbers(2, 4))