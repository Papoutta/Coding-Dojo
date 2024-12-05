//Function that takes two params
function twoSums(arr, target) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i+1; j < arr.length; j++) {
    //         if (arr[i]+arr[j]==target){
    //             return [i,j]
    //         }
    //     }
    // }

//Initialistaion of incrementations
    let i = 0
    let j = 1
// While loop beggining from first index i of array till its end
    while (i < arr.length){
        //Check if the sum of the elements at index[i] and index[j] are = to target
        if (arr[i]+arr[j]==target){
            //if true return result
            return [i,j]
        }
        //if index j reach the end of array, increment index[i] and set index[j] to next of index[i]
        else if (j==arr.length){
            i++
            j=i+1
        }
        //otherwise move index2 to the next element
        else {
            j++
        }
    }
    return []
}
console.log(twoSums([3,2,3],6));
