var height = 0; //initialised to 0

var age = 0; //initialised to 0

// Variable to determine if the person is allowed to ride the rollercoaster and initiate it to false

var allowedToRide = "";

// The person must be at least 42 inches tall AND over the age of 10 to ride the rollercoaster
if (height >= 42 && age > 10) {
    allowedToRide = "Get on that ride, kiddo!";
} 

else {
    allowedToRide = "Sorry kiddo. Maybe next year."; 
}

console.log(allowedToRide);