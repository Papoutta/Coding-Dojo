function findByIdAndUpdate(id,updateObj,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
            for (key in updateObj){
                if (arr[i].hasOwnProperty(key)){
                    arr[i][key] = updateObj[key]
                }
            }
            return arr[i]
        }
        else {
            return null
        }
    }
}

const array = [
    {
        id : 1,
        names : "student1",
        isLateToday : true,
        lateCount : 16,
        redBeltStatus : false
    },
    {
        id : 2,
        names : "student2",
        isLateToday : false,
        lateCount : 14,
        redBeltStatus : true
    },
    {
        id : 3,
        names : "student3",
        isLateToday : false,
        lateCount : 10,
        redBeltStatus : true
    }
];

const objectUpdate =  {
    id : 3,
    names : "student3",
    isLateToday : true,
    lateCount : 10,
    redBeltStatus : true
}



console.log(findByIdAndUpdate(1,objectUpdate,array));