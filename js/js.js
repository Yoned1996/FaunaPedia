const $start = document.getElementById('start');
const $principal = document.getElementById('principal');
const $nav = document.getElementById('nav');
const $close = document.getElementById('close');
const $body = document.getElementById('body');

$start.addEventListener('click',iniciar);
$close.addEventListener('click',cerrar)

function iniciar(){
    $principal.style.animation='fadeOut 2s forwards';
    $principal.style.display='none' ;
    $nav.style.display='block' ;
    $nav.style.animation='fadeIn 2s forwards';
    $body.style.overflow='auto';
}

function cerrar(){
    $principal.style.animation='fadeIn 2s forwards';
    $principal.style.display='block' ;
    $nav.style.display='none' ;
    $nav.style.animation='fadeOut 2s forwards';
    $body.style.overflow='hidden';
}

// ==================SLIDE ORINOQUIA======================

const $slide = document.getElementById('slide-o');
const $slideImages = document.querySelectorAll('#slide-o div');
const $next = document.getElementById('flecha-derecha-o');
const $prev = document.getElementById('flecha-izquierda-o');
const $nameAnimal = document.getElementById('o-5');

let counter = 1;
const size = $slideImages[0].clientWidth;

$slide.style.transform='translateX('+(-size*counter)+'px)';

$next.addEventListener('click',()=>{
    if(counter>= $slideImages.length-1)return;
    $slide.style.transition = 'transform 0.4s ease-in-out';
    $nameAnimal.setAttribute('id','o-'+counter);
    let idO = $nameAnimal.getAttribute('id');
    switch(idO) {
        case "o-1":
            let texto = `<h3>nombre animal 2</h3>`
            $nameAnimal.innerHTML = texto;
            break;
        case "o-2":
            let texto5 = `<h3>nombre animal 3</h3>`
            $nameAnimal.innerHTML = texto5;
            break;
        case "o-3":
            let texto2 = `<h3>nombre animal 4</h3>`
            $nameAnimal.innerHTML = texto2;
            break;
        case "o-4":
            let texto3 = `<h3>nombre animal 5</h3>`
            $nameAnimal.innerHTML = texto3;
            break;
        default:
            let texto4 = `<h3>nombre animal 1</h3>`
            $nameAnimal.innerHTML = texto4;
      }
    counter++;
    $slide.style.transform='translateX('+(-size*counter)+'px)';
})

$slide.addEventListener('transitionend',()=>{
    if($slideImages[counter].id==='lastClone-o'){
        $slide.style.transition='none';
        counter = $slideImages.length-2;
        $slide.style.transform='translateX('+(-size*counter)+'px)';
    };
    if($slideImages[counter].id==='firstClone-o'){
        $slide.style.transition='none';
        counter = $slideImages.length-counter;
        $slide.style.transform='translateX('+(-size*counter)+'px)';
    };
})

// ==================FIN SLIDE ORINOQUIA======================
// ===========================================================
// ==================MODAL====================================
const $closeO = document.getElementById('close-o');
const $modal = document.getElementById('modal-o');
 $nameAnimal.addEventListener('click',()=>{
    alert($nameAnimal.getAttribute('id'))
    // let textoDescription = `<h3>nombre animal</h3>${$nameAnimal.getAttribute('id')}`;
    let idO = $nameAnimal.getAttribute('id');
    switch(idO) {
        case "o-1":
            let textoDescription = `<h3>nombre animal 2 ${$nameAnimal.getAttribute('id')}</h3> `;
            $modal.innerHTML = textoDescription;
            break;
        case "o-2":
            let textoDescription5 = `<h3>nombre animal 3 ${$nameAnimal.getAttribute('id')}</h3> `;
            $modal.innerHTML = textoDescription5;
            break;
        case "o-3":
            let textoDescription2 = `<h3>nombre animal 4 ${$nameAnimal.getAttribute('id')}</h3> `;
            $modal.innerHTML = textoDescription2;
            break;
        case "o-4":
            let textoDescription3 = `<h3>nombre animal 5 ${$nameAnimal.getAttribute('id')}</h3> `;
            $modal.innerHTML = textoDescription3;
            break;
        default:
            let textoDescription4 = `<h3>nombre animal 1 ${$nameAnimal.getAttribute('id')}</h3> `;
            $modal.innerHTML = textoDescription4;
      }
    // $modal.innerHTML = textoDescription;
    $modal.style.display='block' ;
    $closeO.style.display='block' ;
    $modal.style.animation='fadeIn 2s forwards';
    $closeO.style.animation='fadeIn 2s forwards';
 })
 
  $closeO.addEventListener('click',()=>{
     $modal.style.animation='fadeOut 2s forwards';
     $closeO.style.animation='fadeOut 2s forwards';
  })

 
