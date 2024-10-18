function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var s3 = pizzaOven("Thick Crust", "white sauce", ["gruyere", "mozarella"], ["onions", "ham", "pepperoni"])
var s4 = pizzaOven("Stuffed Crust", "BBQ sauce", ["gouda", "mozarella", "roquefor"], ["onions", "ham", "pepperoni"])


console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);