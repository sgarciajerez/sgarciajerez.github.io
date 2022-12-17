const Barras = document.querySelectorAll(".progress-bar");
const DivBars = document.getElementById('bars');
let aumento = 85;
let indice=0;
let activar=true;

function colorearBarras(aumento,indice){
    Barras[indice].style.width=aumento+"%"; //A cada elemento le aplicamos el % de aumento
}

function mediaQuery(){ //un media query personalizado para hacer responsive el efecto
    let query;
    if(innerWidth<1200 && innerWidth>=1080){
        query=180;
    } else if(innerWidth<1080 && innerWidth>=768){
        query=700;
    } else if(innerWidth<768 && innerWidth>=550){
        query=500;
    } else if (innerWidth<550){
        query=370;
    }else{
        query=200;
    }
    return query;
}

function progresoScroll(){
    let progreso = document.documentElement.scrollTop; //esta variable lee lo separado que estemos de la parte superior de la página
    let comparativo = mediaQuery(); //este valor cambia en función del tamaño de la pantalla

    if(progreso > comparativo && activar){ 
        activar = false; //ponemos False para solo entrar una vez
        const Intervalo = setInterval(()=>{ 
            colorearBarras(aumento,indice);
            aumento+=5; //sumamos 5 al aumento cada vez que se repite el intervalo
            indice++; //sumamos uno al indice para que pase por el siguiente elemento del arreglo
            if(indice>=4){//cuando el indice sea 4, limpiamos el intervalo
                clearInterval(Intervalo);
            }
        },500);
    }
}

window.addEventListener('scroll', () =>{
        progresoScroll();
})