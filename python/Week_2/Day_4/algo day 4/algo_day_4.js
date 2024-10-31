// the client give us a list of data
// the goal is to provide the data that is not repeated.
// If the data is empty, we return null
// we need to loop inside the data from the start to the end.
// we are going to see if the first element is present more that one time inside the list.
// we need a second loop for that.
// in order to keep in mind the count of how much is the element present, we create a var called count = 0
// inside the second loop every time the element is present we give count +1 
// we add a condition : if count is = 1 (only one time repeated) we return the element
// else we go back to our first loop and verfy the second element etc. 

function findNonRepeated(data) {
    if (data.length == 0){
        return null
    }
    else{
        for (var i = 0; i < data.length; i++) {
            count = 0
            for (var j = 0; j < data.length; j++) {
                if (data[i] == data[j])
                    count += 1
            }
            if (count == 1)
                return data[i];
        }
        return null
    }
}

console.log(findNonRepeated([5,3,3,5,5,7]))