//algo 1

function alwaysHungry(arr) {
    var food = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            food = true;
            console.log("yummy");
        }
    }
    if (!food){
        console.log("i am hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//algo 2

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr ; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//algo 3 

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    avg = sum / arr.length
    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i ++ ) {
        if ( arr[i] > avg ) {
            count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// aglo 4

function reverse(arr) {
    // your code here
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// algo 5

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for (var i = 2; i < n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2] 
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
