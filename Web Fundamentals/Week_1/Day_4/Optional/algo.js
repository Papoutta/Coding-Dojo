/* 
step 1: The client will give us data and wants us to find if a certain element is inside his data.
step 2: If the data given is empty, the result will be -1.
step 3: In order to find the searched item we need to loop from the start of the data until the element is found.
step 4: If the item that we are seraching for is present inside the data the result will be it's position.
step 5 : If the element is not found in the data the result will be -1
step 6 : If the item that we are seraching for is present two or more times, the result will be it's first position.
*/

/* 
T diagram 

arr = ["a","b","c"]
search item = "c"
i[0]="a"
i[1] = "b"
i[2] = "c"
expected result = 2

*/


function IndexOf(arr, searchedItem) {
    if (arr.length===0){
        return -1;
    }
    
    for (var i=0; i<arr.length; i++){
        if (arr[i]===searchedItem) {
            return i;
        }
    }
    if (i===arr.length) {
        return -1;
    }
    
}
var x = IndexOf(['a','b','d'],"c")
console.log(x)