
// Carrousel
let imagenes = ['../media/panterita.jpg', '../media/panterita2.jpg', '../media/emilyypanterita.jpg'];
let contador = 0;
function carruselEnMovimiento (contenedor)
{
    contenedor.addEventListener("click", e =>
    {
        let atras = contenedor.querySelector ('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;

        if (tgt == atras)
        {
            if  (contador>0)
            {
                img.src = imagenes[contador-1];
                contador--;
            }
            else
            {
                img.src = imagenes[imagenes.length-1];
                contador= imagenes.length -1;
            }
        }
        else if (tgt==adelante)
        {
            if  (contador< imagenes.length-1)
            {
                img.src = imagenes[contador+1];
                contador++;
            }
            else
            {
                img.src = imagenes[0];
                contador= 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded",()=>
{
    let contenedor = document.querySelector(".contenedor");
    carruselEnMovimiento(contenedor);
})