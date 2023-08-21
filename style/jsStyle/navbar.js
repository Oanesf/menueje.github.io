
let hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function(){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}