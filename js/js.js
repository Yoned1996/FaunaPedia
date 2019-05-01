
const $start = document.getElementById('start');
const $principal = document.getElementById('principal');
const $nav = document.getElementById('nav');

$start.addEventListener('click',iniciar);

function iniciar(){
    $principal.style.animation='fadeOut 2s forwards';
    $principal.style.display='none' ;
    $nav.style.display='block' ;
    $nav.style.animation='fadeIn 2s forwards';
}