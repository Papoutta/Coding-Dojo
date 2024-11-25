// Problem 1
// Why did the code produce that output? If applicable, how would you get the index value that did not output?

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// 1. output prediction : 
// ['Tesla', 'Mercedes', 'Honda']
// 'Mercedes'

//2. output result
//Tesla
//Mercedes

//3. The first output is the first element of the array because there is no comma
//The second output is the second element of the array because there is one comma
// const [ ,,otherotherRandomCar ] = cars


//Problem 2
//Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// 1. output prediction : 
// Elon
// error

//2. output result
// Elon
// error

//3. First input is correct because we used destructuring method
//3. Seocnd input gives an error because we cant call a key alone we need to call it with the var.key :
// console.log(employee.employeeName);


//Problem 3 
//Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// 1. output prediction : 
// 12345
// 12345

//2. output result
// 12345
// undefined

//3. The first output comes from const password = '12345';
//The second output is undefined because we dont have password inside the object
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet',
//     password: '********'
// };
// const { password: hashedPassword } = person;  
// console.log(hashedPassword); 
// Output: '********'


//Problem 4
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);

// 1. output prediction : 
// False
// True

//2. output result
// False
// True

//3. first is the second element of the array : "2", and second is the 4th element : "5", 2===5 is false
// first is the second element of the array : "2", and third is the 9th element : "2", 2===2 is true
// const [,,,,fourth] = numbers;
//console.log(fourth)
// output : 6


//Problem 5 
//Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// 1. output prediction : 
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5

//2. output result
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5

//3. now key has value the value of the key "key" in lastTest
// same for secondKey
// same for secondKey
// secondKey[0] takes the first element of the array
// willThisWork takes the second element of the array (comma)

// Problem 6
// First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
        var name = names[index];
        console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

// 1. output prediction : 
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

//2. output result
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4

//3. 2 scopes : inner scope deeper scope


//Problem 7 :
//Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}     

// 1. output prediction : 
// nothing we didnt invoke the function

//2. output result
// nothing we didnt invoke the function

//3. we didnt invoke the function


//Problem 8
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name + ' was found at index ' + index);
        }
    }
    actuallyPrintingNames();
}
printNames(beatles);

// 1. output prediction : 
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

//2. output result
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

//3. const is a variable that it's value can't be changed and if is declared inside a function can be only called inside it.
// let is the same but its value can be changed.


// Problem 9
//Why did the code produce that output? Explain why each console.log looks the way it does.

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// 1. output prediction : 
//true
//true

//2. output result
//true
//false

//3. we made a deep copy of planet named planetCopy, they have the same values that's why the first console
//is true. But the two values are not === because they have different spaces in memory.  
