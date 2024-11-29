function factorial(n) {
    if (n == 0 || n==1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5));



function power(x, p) {
    if (p == 0) {
        return 1;
    }
    return x * power(x, p-1)
}

console.log(power(2, 3));