// We are going to loop through a list of numbers assuming that there is no duplicates.
// We declare a let that takes in memory the index of a certain element its first value is the value of
// the first index of the array.

// Inside the loop we are going to loop again.
// We are going to compare if the memory is less than the other elements.
// If the element compared to the first one is lower, memory takes the value of the index of the lower element.
// If the element is higher than the memory we continue to loop
// When we finish the second loop we give +1 to the iteration of the first loop so when we loop again we dont loop
// on the first element.
// We repeat with the second value of the array starting by the second index because the first one is the lower element.

// arr = [3,2,9,5,1,4,8]
// i = 0
// j = i+1
// mem = i = 0
// arr[mem] < arr[j] == False , 3 < 2 == False
// mem = j = 1
// j++
// j = 1


function selectionSort(arr) {
    const n = arr.length;
    
    // Outer loop: iterate over the entire array
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;  // Assume the minimum is the first element in the unsorted part
        
        // Inner loop: find the smallest element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {  // If we find a smaller element
                minIdx = j;  // Update the index of the smallest element
            }
        }
        
        // Swap the found minimum element with the first element of the unsorted part
        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}

// Example usage:
let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array:", arr);
