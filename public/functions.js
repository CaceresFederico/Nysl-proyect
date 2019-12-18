function mostrar(id){
    var paginaMostrar = document.getElementById(id);
    var paginaOcultar = document.getElementsByClassName('pages');
    for (i = 0; i < paginaOcultar.length; i++) {
    paginaOcultar[i].classList.add('hidepages');
    }
    paginaMostrar.classList.remove('hidepages');
    }