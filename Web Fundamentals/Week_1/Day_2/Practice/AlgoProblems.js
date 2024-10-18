function stringRepeat(str, repeatAmount) {
    var newString = "";
    for (var i = 0; i < repeatAmount; i++) {
        newString += str;
    }
    console.log(newString)
    return newString;
}

stringRepeat("hello ",10)



/* The function asks the client to give us 2 words or sentences each one in a value str1 and str2.
When sr2 is longer than str1 meaning there is more letters, we want our function to return the result :
str1 + str2 (expl if the fisrt value is hello and the second is "my friend", 
the result should be "hello my friend")
If the two values have the same nbr of index, we want the function to return the result :
str1 + str2
If str1 is longer than str2, the result should be str2 + str1

*/

/* T diagram :
str1 = "hello"
str2 = "sam"
str1.length = 5
str2.length = 3
result = "hello sam"

str1 = "hello"
str2 = "samuel"
str1.length = 5
str2.length = 6
result = "hello samuel"

str1 = "carol"
str2 = "hello"
str1.length = 5
str2.length = 5
result = "carol hello"
*/ 

function LowerString(str1, str2) {
    if (str1.length > str2.length){
        console.log(str2 +" "+ str1)
        return str2 +" "+ str1;
    }
    else {
        console.log(str1 +" "+ str2)
        return str1 +" "+ str2;
    }
}
LowerString("my friend", "hello") 