function dropIt(arr, callback){
    for (let x of arr){
        if (callback(x)){
            return arr.slice(arr.indexOf(x))
        }
    }
    return []
}
const arr1 = [1,4,3,6,9,3] 
const callback1 = (elem) => elem >10

console.log(dropIt(arr1, callback1));