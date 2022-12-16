const barras = document.querySelectorAll(".progress-bar");
let aumento = 85;
let indice=0;

function colorearBarras(aumento,indice){
        barras[indice].style.width=aumento+"%"; //A cada elemento le aplicamos el % de aumento
}

const Intervalo = setInterval(()=>{ 
    colorearBarras(aumento,indice);
    aumento+=5; //sumamos 5 al aumento cada vez que se repite el intervalo
    indice++; //sumamos uno al indice para que pase por el siguiente elemento del arreglo
    if(indice==4){//cuando el indice sea 4, limpiamos el intervalo
        clearInterval(Intervalo);
    }
},1000);