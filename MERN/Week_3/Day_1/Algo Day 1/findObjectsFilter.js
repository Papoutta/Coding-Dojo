function findObjectsFilter(searchObj, items) {
    let filter = [];
    for (let i = 0; i < items.length; i++) {
        let sameValues = true;
        for (let key in searchObj) {
            if (items[i][key] !== searchObj[key]) {
                sameValues = false;
                break;
            }
        }
        if (sameValues) {
            filter.push(items[i]);
        }
    }
    return filter;
}

console.log(findObjectsFilter(
  { firstName: "Bob", age: 31 },
  [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Brian", lastName: "White", age: 21 },
    { firstName: "Bob", lastName: "Smith", age: 31 }
  ]
));
