
//loop that is going to stop when treadmill_distance arrives to 6 miles

for (var treadmill_distance = 0; treadmill_distance < 6; treadmill_distance++){

// Condition to know if the distance is a pair number because every 2 miles we need to give a candy

    if (treadmill_distance%2!==0){  
        console.log("gets a candy")
    }
    else (
        console.log("no candy")
    )
}