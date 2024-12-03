const orderedIntersection = (arr1, arr2) => {
    let expected = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            // if (!expected.includes(arr1[i])) {
                expected.push(arr1[i])
            // }
            i++
            j++
        } else if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }
    }

    return expected
}

const arr1 = [1, 3, 3, 4, 6, 8]
const arr2 = [2, 3, 3, 5, 8]
console.log(orderedIntersection(arr1, arr2))  // Output: [3, 8]
