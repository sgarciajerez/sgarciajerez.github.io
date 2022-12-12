
(function calculaIMC(){
    const BOTON = document.getElementById("boton_resultado");
    const contenidoBoton = document.getElementById("contenidoBoton");
    const MostrarResultado = document.getElementById("imc_resultado");
    const MostrarTuPeso = document.getElementById("peso_actual");
    const MostrarPesoIdeal = document.getElementById("peso_ideal");
    const MostrarContenedor = document.getElementById("imc_container");
    let resultado;
    let peso, peso1, peso2;
    let altura;

    BOTON.addEventListener('click', () => {
        mostrarIMC();
        setTimeout(()=>{
            BOTON.style.opacity="0.5";
        }, 10);
        setTimeout(()=>{
            BOTON.style.opacity="1";
        }, 100);
        clearTimeout();
} );

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
        contenidoBoton.innerHTML="Volver a calcular";
        MostrarResultado.innerHTML=`${resultado.toFixed(2)}`;
        MostrarTuPeso.innerHTML=`${peso} kg`;
        pesoIdeal();
        MostrarContenedor.className="imc_container_resultado--show";
        } else{
            alert("Introduzca todos los datos numéricos, por favor");
        }
    }
        
}());

function seleccionarImagen (){
    const Icono_hombre = document.getElementById("icono_hombre");
    const Icono_mujer = document.getElementById("icono_mujer");

    function cambiarClaseHombre(){
        Icono_hombre.className="imagen_selected";
        Icono_mujer.className="imagen_deselected";
        setTimeout(()=>{
            Icono_hombre.style.opacity="0.5";
        }, 20);
        setTimeout(()=>{
            Icono_hombre.style.opacity="1";
        }, 100);
        clearTimeout();        
    }

    function cambiarClaseMujer(){
        Icono_hombre.className="imagen_deselected";
        Icono_mujer.className="imagen_selected";
        setTimeout(()=>{
            Icono_mujer.style.opacity="0.5";
        }, 20);
        setTimeout(()=>{
            Icono_mujer.style.opacity="1";
        }, 100);
        clearTimeout();  
    }

    Icono_hombre.addEventListener('click', ()=> cambiarClaseHombre());

    Icono_mujer.addEventListener('click', ()=> cambiarClaseMujer());

}

seleccionarImagen();