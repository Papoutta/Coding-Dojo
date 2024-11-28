// We are going to loop through an array of numbers.
// We suppose that the first element of the array is sorted
// We compare the first element of the array with the one after it.
// If the first elem is bigger, it will be inserted in its right position.
// Now we have a new array with the two first elements sorted 
// We are going to loop to see if the third element is bigger than the elements of the array starting by the last.
// If its bigger he is inserted in its right position.
// When we finish our first loop we return the new array.


// T diagram : 

// arr = [3,2,1]
// i = 0
// j = i+1
// arr[j]>arr[j-1] True
// mem = Arr[j]
// arr[j] = arr[j-1]
// arr[j-1] = mem
// arr = [2,3,1]
// j = j - 1
// j = 0
// i = 1
// j = i + 1 = 2
//[]


// iterate through the array starting from the second element
// store the currend elem in temp var
// iterate through the sorted portion of the array witha counter j(elements before the current index)
// swap if the current element (temp) is less than the element in the position j
// Return the sorted array.

function insertionSort(arr) {
    // Start from the second element (index 1)
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];  // Store the current element in a temporary variable
        let j;

        // Use a for loop to move elements greater than temp to the right
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];  // Shift the element to the right
        }

        // Place the current element (temp) in its correct position
        arr[j + 1] = temp;
    }

    return arr;  // Return the sorted array
}

let arr = [5, 2, 9, 1, 5, 6];
let sortedArr = insertionSort(arr);
console.log(sortedArr);
