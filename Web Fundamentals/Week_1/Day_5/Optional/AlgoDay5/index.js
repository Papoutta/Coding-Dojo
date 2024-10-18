/*

Step 1: The Client will give us data and want us to return his data but in reverse.
step 2: In order to keep some data in memory, we will create a box that we are going to call temp.
step 3: We are going to loop from the start of the data to the middle.
Step 4: we take the element of the data and put it inside the temp box.
step 5: we take the value of the last element minus the index of the incrementation of the data and 
put in the the place of the element.
step 6: then we take the value that we kept in memory and put it in the place of the last element.
step 7: every time we loop, 

*/ 

function reverserArr(arr){
    var temp = ""
    for(var i=0 ;i<(arr.length)/2; i++){
        temp = arr[i]
        arr[i]= arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    console.log(arr)
    return arr
}
reverserArr(["a", "b", "c", "d", "e", "f"])