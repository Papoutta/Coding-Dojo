// the input is a number 
// we want to return the optimisation of the coins of the number given
// we create an empty object
// we divide the number by 25 for the quarters.
// the floor of the divition is the number of quarters
// if the floor is > 0 and the rest is = 0 we return the result (end of prog)
// if the floor of the division is = 0 : quarter = 0
// else, the quarter in our object will be pushed and equal to the floor  
// the rest of the division will stay in a memory variable.
// now the new number is the rest
// we do the same for dime , nickel and finally pennies.



//T diagram 
// input = 74
// quarter = 2, dime = 2 nickel = 0 penny = 4

// 74%25 = 24    24%10 = 4   4%5=?,  4%2=0


function fewestCoinChange(num) {
    var memory = 0
    var result = {}
    var division = num / 25
    var rest = num%25
    if (floor(division) > 0){
        result.push(quarter : floor(x))
    }
    if (rest> 0){
        memory = rest
    }
    else {
        return result = {}
    }
}