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

//---------------------------------------------------------------
// VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

    function validar(e) {
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComentario = document.getElementById("comentarios");
            alertSuccess = document.getElementById("alertSuccess");
            alertError = document.getElementById("alertError");

        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComentario.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");
            
            setTimeout(function() {
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000);

        } else {
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");
            
            setTimeout(function() {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            }, 2000);

            inputNombre.value = "";
            inputEmail.value = "";
            inputComentario.value = "";
        }    
    }

// EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);


    