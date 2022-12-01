(function slider(){ //quiero hacer una función para definir archivos locales

    const imagen1 = document.getElementById("slider-img1");
    const imagen2 = document.getElementById("slider-img2");
    const imagen3 = document.getElementById("slider-img3");
    const imagen4 = document.getElementById("slider-img4");
    const circulo1= document.getElementById("muestra1");
    const circulo2= document.getElementById("muestra2");
    const circulo3= document.getElementById("muestra3");
    const circulo4= document.getElementById("muestra4");
    const titulo = document.getElementById("slider-tittle");
    let indice=0; //definimos el índice


    lista = [imagen1, imagen2, imagen3, imagen4];
    listaCirculo = [circulo1, circulo2, circulo3, circulo4];
    listaTitulo = ["- CONSULTA -", "- DIETA -", "- DEPORTE -", "- BLOG -"];

    //valores predeterminados

    imagen1.style.opacity = 100; 
    muestra1.style.width = "15px";
    muestra1.style.height = "15px";
    imagen2.style.opacity = 0;
    imagen3.style.opacity = 0;
    imagen4.style.opacity = 0;

    function ponerVisible(){
        if(indice<=3){ //cambios para cada elemento
        lista[indice].style.opacity = 100;
        listaCirculo[indice].style.width = "15px";
        listaCirculo[indice].style.height = "15px";
        titulo.innerHTML=listaTitulo[indice];
        } 
        if(indice!=0) { //devolver al elemento anterior a su posición inicial
            lista[indice-1].style.opacity =0;
            listaCirculo[indice-1].style.width = "10px";
            listaCirculo[indice-1].style.height = "10px";
        }
        if (indice>3){ //reiniciar el índice y dar valores al elemento 0
            indice=0;
            imagen1.style.opacity = 100;
            muestra1.style.width = "15px";
            muestra1.style.height = "15px";
            titulo.innerHTML=listaTitulo[0];
        }
    }

    function sumarIndice (){ //función para sumar índice
        indice++;
    }

    setInterval (function(){ //una función automática que ejecute las dos funciones anteriores
        sumarIndice();
        ponerVisible ();
    }, 3000);

}())