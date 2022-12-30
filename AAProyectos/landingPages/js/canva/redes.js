(function cambiarVideoRedes () {

    let titulo = document.querySelectorAll(".home-video-tittle");
    let tituloSelected = document.querySelector(".home-video-tittle--show");

    let video = document.querySelectorAll(".home-video");
    let videoShow = document.querySelector(".home-video--show");


    function cambiarVideo (index) {
        videoShow.className = "home-video"
        video[index].className = "home-video--show";
        videoShow = video[index];
        console.log (videoShow);
    }
    function cambiarTitulo (index) {
        tituloSelected.className = "home-video-tittle"
        titulo[index].className = "home-video-tittle--show";
        tituloSelected = titulo[index];
    }

    titulo[0].addEventListener('click', () => {
        cambiarTitulo(0);
        cambiarVideo(0);
    })
    titulo[1].addEventListener('click', () => {
        cambiarTitulo(1);
        cambiarVideo(1);
    })
    titulo[2].addEventListener('click', () => {
        cambiarTitulo(2);
        cambiarVideo(2);
    })
    titulo[3].addEventListener('click', () => {
        cambiarTitulo(3);
        cambiarVideo(3);
    })
    titulo[4].addEventListener('click', () => {
        cambiarTitulo(4);
        cambiarVideo(4);
    })

})();


