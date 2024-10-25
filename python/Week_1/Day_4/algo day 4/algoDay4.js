// client is giving us data 
//if the length of the data is empty we want to return false
// we loop inside that data to the of the length of the data divided by two, it is possible that the length of the data is odd so 
// we need to take the number just after the division.
// now inside the loop we are going to set a condition in order to compare if the index inside the data is equal the the
// opposite of the the index inside the data minus one.
// if the comparison is correct return true else return false

//T diagram example :

// data = "aba" 
// i = 0 
// Math.ceil(length/2)-1 = 1
// data[i] = "a"
//data[-i-1] = "a"
//i = 1
//return True


function palindrome(data) {
    if (data.length === 0) {
        return false;
    }
    for (var i = 0; i < Math.floor(data.length / 2); i++) {
        if (data[i] !== data[data.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome(""));        // Output: false
console.log(palindrome("racecar")); // Output: true
console.log(palindrome("hello"));   // Output: false
console.log(palindrome("madam"));   // Output: true
