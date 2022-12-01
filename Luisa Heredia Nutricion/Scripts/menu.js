(function menu_desplegable(){

    document.addEventListener('DOMContentLoaded', init);

    const menu_abre = document.getElementById("menu_abre");
    const menu_cierra = document.getElementById("menu_cierra");
    const menu_cerrado = document.getElementById("menu_close");
    const menu_abierto = document.getElementById("menu_open");

    function init(){
        let query = window.matchMedia('(max-width:1080px)');

        const ifMatchesChange = e =>{

        if(e.matches){
            menu_cerrado.style.display="flex";
            menu_abre.addEventListener('click', () => {
                //color verde pero con rgba para tocar la opacidad
                //cambia color del icono para dar sensación de animación
                menu_abre.style.backgroundColor="rgba(96, 191, 174, 0.4";
                setTimeout (function(){
                    menu_cerrado.style.display="none";
                    menu_abierto.style.display="block";
                    menu_abre.style.backgroundColor="var(--color-amarillo)";
                }, 100);
            });
        
        
            menu_cierra.addEventListener('click', () =>{
                menu_cierra.style.backgroundColor="rgba(96, 191, 174, 0.4)";
                setTimeout(function(){
                menu_abierto.style.display="none";
                menu_cerrado.style.display="flex";
                menu_cierra.style.backgroundColor="var(--color-amarillo)";
                },100);
                
            });        
        } else{
            menu_abierto.style.display="none";
            menu_cerrado.style.display="none";
        }
    }
        
        query.addListener(ifMatchesChange);
        ifMatchesChange(query);
    }

    


  
   
}());




