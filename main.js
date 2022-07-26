//alert('Olá Mundo!');

/* Primeira Forma ==================

function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim (){
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff (){
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash (){
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim (){
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh (){
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic (){
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom (){
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

document.querySelector('.tecla_clap').onclick = tocaSomClap;

document.querySelector('.tecla_tim').onclick = tocaSomTim;

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

document.querySelector('.tecla_toim').onclick = tocaSomToim;

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

document.querySelector('.tecla_tic').onclick = tocaSomTic;

document.querySelector('.tecla_tom').onclick = tocaSomTom;

=========== Ou desta Forma ==============================

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

listaDeTeclas[1].onclick = tocaSomClap;

listaDeTeclas[2].onclick = tocaSomTim;

listaDeTeclas[3].onclick = tocaSomPuff;

listaDeTeclas[4].onclick = tocaSomSplash;

listaDeTeclas[5].onclick = tocaSomToim;

listaDeTeclas[6].onclick = tocaSomPsh;

listaDeTeclas[7].onclick = tocaSomTic;

listaDeTeclas[8].onclick = tocaSomTom;

*/

function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else {
        //alert('Elemento não encontrado!');
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* 

let contador = 0;
// Enquanto
while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    // template string

    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}

*/


// para
for ( let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;    // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //=============================================================

    tecla.onkeydown = function (evento) {

        //console.log(evento.code == 'Space');

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        /*else if (evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }*/
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}


