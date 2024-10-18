console.log("page loaded...");

function removeProfile (id){
    var element = document.querySelector(id);
    element.remove();
}

function editProfile (id){
    var element = document.querySelector(id);
    element.innerHTML = "Doe Jane"
}