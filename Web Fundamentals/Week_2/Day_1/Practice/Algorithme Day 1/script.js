// step 1: we have multiple data and we want to give a random element of this data.
// step 2: we are going to randomise a number between 0 and 1
//step 3: we are going to multiply this number by the length of the data
//step 4: the random number is going to be the position of the data.

const { element } = require("prop-types");


var liferAnswers = ["random", "random1", "random2", "random3", "random4", "random5", "random6", "random7", "random8", "random9  ", "random10"];
function randomAnswer(){
    var x = Math.random() 
    var floor = Math.floor(x*liferAnswers.length)
    var random = liferAnswers[floor]
    return random 
}
console.log(randomAnswer())

