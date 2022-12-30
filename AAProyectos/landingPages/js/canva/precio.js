(() => {

    const PRICE_PRO = document.getElementById('price-pro');
    const PRICE_EQUIPOS = document.getElementById('price-equipo');
    let spanPrecio = document.querySelectorAll (".price-text-cambio");

    const BUTTON_MES = document.getElementById('button-mes');
    const BUTTON_ANO = document.getElementById('button-ano');

    function cambiarPrecio(cambiar) {
        if (cambiar){
            PRICE_PRO.innerHTML = "109,99€";
            PRICE_EQUIPOS.innerHTML = "139,99€";
        
            spanPrecio.forEach(span => {
                span.innerHTML="año";
            });
        } else {
            PRICE_PRO.innerHTML = "11,99€";
            PRICE_EQUIPOS.innerHTML = "13,99€";
        
            spanPrecio.forEach(span => {
                span.innerHTML="mes";
            });
        }
    }

    function cambiarColorAno() {
        BUTTON_ANO.className="button-selected";
        BUTTON_MES.className="button-unselected";
    }
    function cambiarColorMes() {
        BUTTON_MES.className="button-selected";
        BUTTON_ANO.className="button-unselected";
    }

    BUTTON_ANO.addEventListener('click', ()=>{
        cambiarPrecio(true);
        cambiarColorAno();
    });

    BUTTON_MES.addEventListener('click', ()=>{
        cambiarPrecio(false);
        cambiarColorMes();
    });

})();