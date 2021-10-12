// Botón para abrir y cerrar el menú mobile 

let btnMobile = document.getElementById("btnMobile");
let menuLista = document.getElementById("barraMobileCaja");
btnMobile.addEventListener("click", function()
{
    menuLista.classList.toggle("menuMobile");
})

// Volver arriba con animaciones
let volverArriba = document.getElementById("volverArriba");
volverArriba.addEventListener("click", function()
{
    window.scroll({
        top: 0,
        behavior: 'smooth' 
    });
});

