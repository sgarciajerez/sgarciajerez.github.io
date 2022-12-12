
(function calculaIMC(){
    const BOTON = document.getElementById("boton_resultado");
    const MostrarResultado = document.getElementById("imc_resultado");
    const MostrarTuPeso = document.getElementById("peso_actual");
    const MostrarPesoIdeal = document.getElementById("peso_ideal");

    let resultado;
    let peso, peso1, peso2;
    let altura;

    pesoIdeal = () =>{
        peso1=(18.5*altura*altura).toFixed(1);
        peso2=(24.9*altura*altura).toFixed(1);
        MostrarPesoIdeal.innerHTML=`${peso1}-${peso2} kg`;
    } 

    BOTON.addEventListener('click', ()=> {
        peso = document.getElementById("peso").value;
        altura = (document.getElementById("altura").value)/100;
        resultado = (peso/(altura*altura));
        MostrarResultado.innerHTML=`${resultado.toFixed(2)}`;
        MostrarTuPeso.innerHTML=`${peso} kg`;
        pesoIdeal();
    });
        
}());