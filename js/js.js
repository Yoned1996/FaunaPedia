
const $start = document.getElementById('start');
const $principal = document.getElementById('principal');
const $nav = document.getElementById('nav');
const $close = document.getElementById('close');

$start.addEventListener('click',iniciar);
$close.addEventListener('click',cerrar)

function iniciar(){
    $principal.style.animation='fadeOut 2s forwards';
    $principal.style.display='none' ;
    $nav.style.display='block' ;
    $nav.style.animation='fadeIn 2s forwards';
}

function cerrar(){
    $principal.style.animation='fadeIn 2s forwards';
    $principal.style.display='block' ;
    $nav.style.display='none' ;
    $nav.style.animation='fadeOut 2s forwards';
}