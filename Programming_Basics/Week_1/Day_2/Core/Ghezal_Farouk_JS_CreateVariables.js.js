function IsAllowedToRide(height, age) {if (height >= 42 && age >= 10) {
    console.log("Is the person allowed to ride ? : Yes");
    } 
    else if ((height < 42 && age < 10 )||(height < 42 && age > 10 )||((height >= 42 && age < 10 ))) {
        console.log("Is the person allowed to ride ? : No");
    }
} 
IsAllowedToRide()

// simplified version of IsAllowedToRide
function IsAllowedToRide(height, age) {
    const isAllowed = height >= 42 && age >= 10;
    console.log(`Is the person allowed to ride? : ${isAllowed ? "Yes" : "No"}`);
}
IsAllowedToRide()