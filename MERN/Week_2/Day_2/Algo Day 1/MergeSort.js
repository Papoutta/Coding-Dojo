function mergeSort(array){
    if (array.length == 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    console.log(middle,left, right);
    // return(merge(left,right))
}

mergeSort([7,2]);

function merge(left,right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while(){
        if (left[leftIndex]<right[rightIndex]){
        }
    }
}


// write based case if the array has one elem, return the array
// find the middleindex of the array
// split the array into left and write 
// recursive for splitting the array
// return merge the two sorted halves

// compare elements from both arrays and add the smallest to the result
// if the current element in the left array is smaller, add it the the result and move the left index to the next element
// if the current element in the right array is smaller add it to the result and increment the rightIndex

// add any remaining elements from the left array 
// add any remaining elements from the right array 
// return result
