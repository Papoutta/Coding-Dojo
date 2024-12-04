const k = 16;
const arr = [2,5,3,6,0,0,4,16];

function consecutiveSums(array, k) {
    let finalResult = [];

    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        let res = [];
        let j = i;

        while (j < array.length) {
            sum += array[j];
            res.push(array[j]);

            if (sum === k) {
                finalResult.push([...res]); 
            }
            if (sum > k) {
                break
            }

            j++;
        }
    }

    return finalResult;
}

console.log(consecutiveSums(arr, k));




// const k = 16;
// const arr = [2, 5, 3, 6, 7, 0, 0, 23, 11];

// function consecutiveSums(array, k) {
//     let finalResult = [];
    
//     for (let i = 0; i < array.length; i++) {
//         let sum = 0;
//         let res = [];
        
//         for (let j = i; j < array.length; j++) {
//             sum += array[j];
//             res.push(array[j]);
            
//             if (sum > k) {
//                 break; 
//             } else if (sum === k) {
//                 finalResult.push([...res])
//             }
//         }
//     }
    
//     return finalResult;
// }

// console.log(consecutiveSums(arr, k));
