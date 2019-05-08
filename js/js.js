
const $start = document.getElementById('start');
const $principal = document.getElementById('principal');
const $nav = document.getElementById('nav');
const $close = document.getElementById('close');
// 

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

// ========================================

const $slide = document.getElementById('slide');
const $slideImages = document.querySelectorAll('#slide div');
const $next = document.getElementById('flecha-derecha');
const $prev = document.getElementById('flecha-izquierda');
const $nameAnimal = document.getElementById('name-animal-o');

let counter = 1;
const size = $slideImages[0].clientWidth;

$slide.style.transform='translateX('+(-size*counter)+'px)';

$next.addEventListener('click',()=>{
    if(counter>= $slideImages.length-1)return;
    $slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    $slide.style.transform='translateX('+(-size*counter)+'px)';
})

$prev.addEventListener('click',()=>{
    if(counter<= 0)return;
    $slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    $nameAnimal.setAttribute('id','o-'+counter);
    let idO = $nameAnimal.getAttribute('id');
    switch(idO) {
        case "o-0":
            let texto = `<h3>nombre animal 1</h3>`
            $nameAnimal.innerHTML = texto;
            break;
        case "o-4":
            let texto5 = `<h3>nombre animal 2</h3>`
            $nameAnimal.innerHTML = texto5;
            break;
        case "o-3":
            let texto2 = `<h3>nombre animal 3</h3>`
            $nameAnimal.innerHTML = texto2;
            break;
        case "o-2":
            let texto3 = `<h3>nombre animal 4</h3>`
            $nameAnimal.innerHTML = texto3;
            break;
        default:
            let texto4 = `<h3>nombre animal 5</h3>`
            $nameAnimal.innerHTML = texto4;
      }
    $slide.style.transform='translateX('+(-size*counter)+'px)';
})

$slide.addEventListener('transitionend',()=>{
    if($slideImages[counter].id==='lastClone'){
        $slide.style.transition='none';
        counter = $slideImages.length-2;
        $slide.style.transform='translateX('+(-size*counter)+'px)';
    };
    if($slideImages[counter].id==='firstClone'){
        $slide.style.transition='none';
        counter = $slideImages.length-counter;
        $slide.style.transform='translateX('+(-size*counter)+'px)';
    };
})