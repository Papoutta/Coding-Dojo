// j i is the j of the arrays inside the big array
// j j is the j of the elements inside array[i]

function diagonalDifference(arr) {
    let sumLeft = 0
    let sumRight = 0
    let i = 0
    while (i < arr.length) {
        sumLeft += arr[i][i]
        sumRight += arr[i][arr.length -i-1]
        i++
    }
    if (sumLeft > sumRight){
        return sumLeft-sumRight
    }
    return sumRight-sumLeft 
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]
console.log(diagonalDifference(matrix));


