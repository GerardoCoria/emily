// Carrousel: variables generales
let panterita = document.querySelector("#panterita");
let imagenes = ['../media/panterita.jpg', '../media/panterita2.jpg', '../media/panterita3.jpg', '../media/panterita4.jpg'];

let mielcita = document.querySelector("#mielcita")
let imagenes2 = ['../media/mielcita.jpg', '../media/mielcita2.jpeg','../media/mielcita3.jpg', '../media/mielcita4.jpg', '../media/mielcita5.jpeg'];

let gataMuda = document.querySelector("#gataMuda")
let imagenes3 = ['../media/muda.jpeg', '../media/muda2.jpg']

let gatoSiames = document.querySelector('#gatoSiames')
let imagenes4 = ['../media/siames.jpg', '../media/siames2.jpg', '../media/siames3.jpg', '../media/siames4.jpg']

let moldes = document.querySelector('#moldes')
let imagenes5 = ['../media/gris1.jpg', '../media/gris2.jpg', '../media/gris3.jpg']

let contador = 0;

// Primer carrusel
function carruselEnMovimiento ()
{
    panterita.addEventListener("click", e =>
    {
        let atras = panterita.querySelector ('.atras');
        let adelante = panterita.querySelector('.adelante');
        let img = panterita.querySelector('img');
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

// Segundo carrusel
function carruselEnMovimiento2 ()
{
    mielcita.addEventListener("click", e =>
    {
            let atras = mielcita.querySelector ('.atras');
            let adelante = mielcita.querySelector('.adelante');
            let img = mielcita.querySelector('img');
            let tgt = e.target;
            if (tgt == atras)
            {
                if  (contador>0)
                {
                    img.src = imagenes2[contador-1];
                    contador--;
                }
                else
                {
                    img.src = imagenes2[imagenes2.length-1];
                    contador= imagenes2.length -1;
                }
            }
            else if (tgt==adelante)
            {
                if  (contador< imagenes2.length-1)
                {
                    img.src = imagenes2[contador+1];
                    contador++;
                }
                else
                {
                    img.src = imagenes2[0];
                    contador= 0;
                }
            }
    });
}

// Tercer carrusel
function carruselEnMovimiento3 ()
{
    gataMuda.addEventListener("click", e =>
    {
            let atras = gataMuda.querySelector ('.atras');
            let adelante = gataMuda.querySelector('.adelante');
            let img = gataMuda.querySelector('img');
            let tgt = e.target;
            if (tgt == atras)
            {
                if  (contador>0)
                {
                    img.src = imagenes3[contador-1];
                    contador--;
                }
                else
                {
                    img.src = imagenes3[imagenes3.length-1];
                    contador= imagenes3.length -1;
                }
            }
            else if (tgt==adelante)
            {
                if  (contador< imagenes3.length-1)
                {
                    img.src = imagenes3[contador+1];
                    contador++;
                }
                else
                {
                    img.src = imagenes3[0];
                    contador= 0;
                }
            }
    });
}

// Cuarto carrusel
function carruselEnMovimiento4 ()
{
    gatoSiames.addEventListener("click", e =>
    {
            let atras = gatoSiames.querySelector ('.atras');
            let adelante = gatoSiames.querySelector('.adelante');
            let img = gatoSiames.querySelector('img');
            let tgt = e.target;
            if (tgt == atras)
            {
                if  (contador>0)
                {
                    img.src = imagenes4[contador-1];
                    contador--;
                }
                else
                {
                    img.src = imagenes4[imagenes4.length-1];
                    contador= imagenes4.length -1;
                }
            }
            else if (tgt==adelante)
            {
                if  (contador< imagenes4.length-1)
                {
                    img.src = imagenes4[contador+1];
                    contador++;
                }
                else
                {
                    img.src = imagenes4[0];
                    contador= 0;
                }
            }
    });
}

// Quinto carrusel
function carruselEnMovimiento5 ()
{
    moldes.addEventListener("click", e =>
    {
            let atras = moldes.querySelector ('.atras');
            let adelante = moldes.querySelector('.adelante');
            let img = moldes.querySelector('img');
            let tgt = e.target;
            if (tgt == atras)
            {
                if  (contador>0)
                {
                    img.src = imagenes5[contador-1];
                    contador--;
                }
                else
                {
                    img.src = imagenes5[imagenes5.length-1];
                    contador= imagenes5.length -1;
                }
            }
            else if (tgt==adelante)
            {
                if  (contador< imagenes5.length-1)
                {
                    img.src = imagenes5[contador+1];
                    contador++;
                }
                else
                {
                    img.src = imagenes5[0];
                    contador= 0;
                }
            }
    });
}

//Cuando la página cargue, se llaman a las funciones
document.addEventListener("DOMContentLoaded",()=>
{
    carruselEnMovimiento();
    carruselEnMovimiento2();
    carruselEnMovimiento3();
    carruselEnMovimiento4();
    carruselEnMovimiento5();
})