let enter = document.getElementById("enter");
let exit  = document.getElementById("exit");
let nav_right = document.getElementById("nav-right");



enter.onclick = function() {
    nav_right.classList.toggle("right-0");
}

exit.onclick = function() {
    nav_right.classList.toggle("right-0")
}