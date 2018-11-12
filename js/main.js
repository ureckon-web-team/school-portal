function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var header = document.getElementById("header");
var sticky = header.offsetTop;
function fixed() {
    if (window.pageYOffset >=sticky) {
        header.classList.add("sticky");
        header.innerHTML = "UOSC <br>(11-12 Jan 2019)";
        document.getElementById("main").style.visibility = "hidden";
		document.getElementById("side").style.visibility = "visible";
    } else {
        header.classList.remove("sticky");
        header.innerHTML = "Ureckon Open School Challenge (UOSC)";
        document.getElementById("main").style.visibility = "visible";
		document.getElementById("side").style.visibility = "hidden";
    }
}