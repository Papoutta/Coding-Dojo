function greetSomeone(person, time) {
    if(person == "Count Doku"){
        console.log("I'm comming for you, Doku !") 
    }

     else if (time>18) {
        console.log("Good night", person + "!");
    }

    else {
        console.log("Good Day", person + "!");
    }
}
greetSomeone("Count Doku", 5); 