function loginlogout(element){
    if(element.innerHTML == "logout"){
        element.innerHTML = "login";
        return
    }
    element.innerHTML = "logout";
}

function removebutton(element){
    element.remove();
}

function alertt(){
    alert("Ninja was liked");
}