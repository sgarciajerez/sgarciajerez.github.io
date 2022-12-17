(function subir_incio() {
  const Flecha = document.querySelector("#flecha_inicio");
  const Inicio = document.querySelector("#inicio");
  let distancia = Flecha.getBoundingClientRect(); //esto nos da su posición de forma dinámica
  let activar = true;

  function progresoScroll() {
    let progreso = document.documentElement.scrollTop; //esta variable lee lo separado que estemos de la parte superior de la página
    let comparar = distancia.top - 1200;
    if (progreso > comparar && activar) {
      Flecha.className = "flecha_inicio--show";
    } else {
      Flecha.className = "flecha_inicio";
    }
  }

  window.addEventListener("scroll", () => {
    progresoScroll();
  });

  Flecha.addEventListener("click", () => {
    Inicio.scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
