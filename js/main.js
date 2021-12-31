// Botón para abrir y cerrar el menú mobile 
let btnMobile = document.getElementById("btnMobile")
let menuLista = document.getElementById("barraMobileCaja")
btnMobile.addEventListener("click", function(){
    menuLista.classList.toggle("menuVisible")
    menuLista.classList.toggle("ocultarMenu")
})
// let menuMobile = document.getElementById("barraMobileCaja")
// function mostrarMenu (){
//     btnMobile.addEventListener("click", function()
//     {
//         if (menuMobile.style.display="none")
//         {
//             menuMobile.style.display="block"
//         }
//         else if(menuMobile.style.display="block")
//         {
//             menuMobile.style.display="none"
//         }
//     })
// }


// Volver arriba con animaciones
let volverArriba = document.getElementById("volverArriba");
volverArriba.addEventListener("click", function()
{
    window.scroll({
        top: 0,
        behavior: 'smooth' 
    });
});

//Cuando la página cargue, se llaman a las funciones
// document.addEventListener("DOMContentLoaded",()=>
// {
//     mostrarMenu();
// })