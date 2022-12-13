const barras = document.querySelectorAll(".progress-bar");
let aumento = 85;
let indice=0;
let intervalo;

function colorearBarras(aumento,indice){
        barras[indice].style.width=aumento+"%";
        console.log(indice);
}

function descolorearBarras(){
    barras.forEach(barra => {
        barra.style.width="0%";
    });
}

setInterval(()=>{
    if(indice<barras.length){
    colorearBarras(aumento,indice);
    aumento+=5;
    indice++;
    } else{
        indice=0;
        aumento=85;
        descolorearBarras();
    }
},1000);

