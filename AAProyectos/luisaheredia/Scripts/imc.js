
(function calculaIMC(){
    const BOTON = document.getElementById("boton_resultado");
    const MostrarResultado = document.getElementById("imc_resultado");
    const MostrarTuPeso = document.getElementById("peso_actual");
    const MostrarPesoIdeal = document.getElementById("peso_ideal");
    const MostrarContenedor = document.getElementById("imc_container");
    let resultado;
    let peso, peso1, peso2;
    let altura;

    BOTON.addEventListener('click', () => mostrarIMC());

    function pesoIdeal() {
        peso1=(18.5*altura*altura).toFixed(1);
        peso2=(24.9*altura*altura).toFixed(1);
        MostrarPesoIdeal.innerHTML=`${peso1}-${peso2} kg`;
    } 

    function mostrarIMC(){
        peso = document.getElementById("peso").value;
        altura = (document.getElementById("altura").value)/100;
        if (peso!==0 && altura!==0){
        resultado = (peso/(altura*altura));
        BOTON.innerHTML="Volver a calcular";
        MostrarResultado.innerHTML=`${resultado.toFixed(2)}`;
        MostrarTuPeso.innerHTML=`${peso} kg`;
        pesoIdeal();
        setTimeout( ()=> {
            MostrarContenedor.className="imc_container_resultado--show";
        }, 470);
        clearTimeout();
        } else{
            alert("Introduzca todos los datos numéricos, por favor");
        }
    }
        
}());

function seleccionarImagen (){
    const Icono_hombre = document.getElementById("icono_hombre");
    function cambiarClase(){
        Icono_hombre.className="imagen_selected";
    }

    Icono_hombre.addEventListener('click', ()=> cambiarClase());

}

seleccionarImagen();