function deleteCookies() {
    var elem = document.querySelector(".cookies");
    elem.remove();
}

function changedCity() {
    alert("loading weather reports...")
}

function convert() {
    var ids = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"]
    for (var i = 0; i<=ids.length ; i++){
        conv(ids[i])
    }
}

function conv(id){
    var a = document.getElementById(id)
    a.innerText = Math.floor((a.innerText)*1.8 + 32);
}