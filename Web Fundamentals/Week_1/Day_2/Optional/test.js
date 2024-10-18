/*
Step 1 : We have to find the largest word from the data given by the client.
Step 2 : We create a box that contains the first element of the data (arr[0]).
step 3 : We start looping inside the data from the second (arr[1]) element to last one.
step 4 : We start comparing if it is bigger or equal to the length of the box.
step 5 : Then we return the value of the box.
*/ 

function findLongestWord(words){
    var WordLargest = words[0]
    for (var i = 1; i < words.length; i++){
        if (words[i].length >= WordLargest.length) {
            WordLargest = words[i];
        }
    }
    console.log(WordLargest)
    return WordLargest

}

findLongestWord(["apple", "kiwi", "banana", "strawberry"]) 