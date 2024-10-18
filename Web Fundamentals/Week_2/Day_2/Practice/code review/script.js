function removeBotton(element){
    element.remove();
}

function increase(id) {
    var e = document.querySelector(id);
    e.innerHTML ++
}

function decrease(id) {
    document.getElementById(id).innerHTML--;
}

function find() {
    var inputValue = document.getElementById("search").value
        alert("Input Value : " + inputValue)
        document.getElementById("search").value = ""
}