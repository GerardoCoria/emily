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


// Carrousel
let imagenes = ['../media/panterita.jpg', '../media/panterita2.jpg', '../media/emilyypanterita.jpg'],

cont = 0;
function carrusel (contenedor)
{
    contenedor.addEventListener("click", e =>
    {
        let  atras = contenedor.querySelector ('.atras'),
        adelante = contenedor.querySelector('.adelante')
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if (tgt == atras)
        {
            if  (cont >0)
            {
                img.src = imagenes[cont-1];
                cont--;
            }
            else
            {
                img.src = imagenes[imagenes.length-1];
                cont = imagenes.length -1;
            }
        }
            else if (tgt==adelante)
            if  (cont < imagenes.length-1)
            {
                img.src = imagenes[cont+1];
                cont++;
            }
            else
            {
                img.src = imagenes[0];
                cont = 0;
            }
    });
}

document.addEventListener("DOMContentLoaded",()=>
{
    let contenedor = document.querySelector(".contenedor");
    carrusel(contenedor);
})