let open = document.querySelector("#open");
let close = document.querySelector("#close");
let menu = document.querySelector(".menu");

open.addEventListener("click", function() {
    menu.style.left = 0;
    open.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click", function() {
    menu.style.left = "100%";
    close.style.display = "none";
    open.style.display = "block";
})