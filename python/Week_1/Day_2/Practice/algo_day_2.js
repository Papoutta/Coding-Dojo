// the client gives us two words either in uppercase or lowercase and we are asked to compare if the words are the same
// if the two words have the same length, we put the two words in uppercase by using a built in function and set a condition of comparing the two words
// if they are equal , the result should be true, if the two words are not equal, the result should be false.

// T Diagram :

// str1 = "ABC"
// str2 = "abc"
// str1.toUpperCase() = "ABC"
// str2.toUpperCase() = "ABC"
// result = true

// str1 = "abcD"
// str2 = "Adf"
// str1.toUpperCase() = "ABCD"
// str2.toUpperCase() = "ADF"
// result = false


function caseInsensitiveStringCompare(strA, strB) {
    if (strA.toUpperCase()==strB.toUpperCase()){
        return true
    }
    else {
        return false
    }
}
console.log(caseInsensitiveStringCompare("AbCd", "aBcD"));