// Botón para abrir y cerrar el menú mobile 

$("#btnMobile").click(function()
{
    $("#barraMobileCaja").slideToggle(1000);
});

// Volver arriba con animaciones

$(".volverArriba").click(function()
{
    $('html, body').animate({ scrollTop : 0 }, 3000 );
})


