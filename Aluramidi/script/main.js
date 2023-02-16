function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio)
    
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
    
}

const teclado = document.querySelectorAll(".tecla")


for (let contador = 0; contador < teclado.length; contador++){
     
    const som = teclado[contador].classList[1];
    const nota = `#som_${som}`
    const tecla = teclado[contador]
    tecla.onclick = () => {
        tocaSom(nota)
    }
    
    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        
        }
    }
    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}


