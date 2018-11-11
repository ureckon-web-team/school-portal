function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var header = document.getElementById("header");
var sticky = header.offsetTop;
function fixed() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.innerHTML = "UOSC";
    } else {
        header.classList.remove("sticky");
        header.innerHTML = "Ureckon Open School Challenge (UOSC)";
    }
}
