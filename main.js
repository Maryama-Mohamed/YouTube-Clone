
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    console.log("Sidebar clicked");
    container.classList.toggle("large-container");
}
