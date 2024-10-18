var countPositives = 0;
var numbers = [3,4,-1,7,16,-8,0]

function positive(){
    for (var i = 0; i < numbers.length; i++){
        if (numbers[i]> 0){
            countPositives++;
        }
    }
}
positive()
console.log("there are " + countPositives + " positive values");
