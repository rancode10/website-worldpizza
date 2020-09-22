// MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

// click abrir
btnMenuOpen.addEventListener("click", function() {
    // menuResponsive.classList.add("active");
    menuResponsive.classList.add("active");
});

// click cerrar
btnMenuClose.addEventListener("click", function() {
    menuResponsive.classList.remove("active");
});

// cerrar menu con elementos de enlace
enlaces.addEventListener("click", function() {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
}); 

//---------------------------------------------------------------
// SLIDER DE PRODUCTOS
var contenedor = document.querySelector('.slider');
    btnIzquierdo = document.getElementById('btn-izquierda');
    btnDerecho = document.getElementById('btn-derecha');

    // EVENTO PARA EL BOTON DERECHO
    btnDerecho.addEventListener("click", function() {
        contenedor.scrollLeft += contenedor.offsetWidth;
    });

    // EVENTO PARA EL BOTON IZQUIERDO
    btnIzquierdo.addEventListener("click", function() {
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });