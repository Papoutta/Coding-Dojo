function entries_insert(obj) {
    result = []
    for (key in obj){
        if (obj.hasOwnProperty(key)){
            result.push(key,obj[key])
        }
    }
    return result
}

const obj1 = {
    name : "Pizza",
    calories : 9001
};

const obj2 = {
    firstname : "Foo",
    lastname : "Bar",
    age : 99
};

obj1.__proto__ = obj2

console.log(entries_insert(obj1));
