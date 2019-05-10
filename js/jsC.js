// ===========================================================================
// ===========================================================================
// ===========================================================================
// ==================SLIDE PACIFICA======================

const $slide_C_ = document.getElementById('slide-c');
const $slide_C_Images = document.querySelectorAll('#slide-c div');
const $next_C = document.getElementById('flecha-derecha-c');
const $nameAnimal_C = document.getElementById('c-5');

let counter_C = 1;
const size_C = $slide_C_Images[0].clientWidth;

$slide_C_.style.transform='translateX('+(-size_C*counter_C)+'px)';

$next_C.addEventListener('click',()=>{
    if(counter_C>= $slide_C_Images.length-1)return;
    $slide_C_.style.transition = 'transform 0.4s ease-in-out';
    $nameAnimal_C.setAttribute('id','c-'+counter_C);
    let idC = $nameAnimal_C.getAttribute('id');
    switch(idC) {
        case "c-1":
            let texto = `<h3>nombre animal 2</h3>`
            $nameAnimal_C.innerHTML = texto;
            break;
        case "c-2":
            let texto5 = `<h3>nombre animal 3</h3>`
            $nameAnimal_C.innerHTML = texto5;
            break;
        case "c-3":
            let texto2 = `<h3>nombre animal 4</h3>`
            $nameAnimal_C.innerHTML = texto2;
            break;
        case "c-4":
            let texto3 = `<h3>nombre animal 5</h3>`
            $nameAnimal_C.innerHTML = texto3;
            break;
        default:
            let texto4 = `<h3>nombre animal 1</h3>`
            $nameAnimal_C.innerHTML = texto4;
      }
    counter_C++;
    $slide_C_.style.transform='translateX('+(-size_C*counter_C)+'px)';
})

$slide_C_.addEventListener('transitionend',()=>{
    if($slide_C_Images[counter_C].id==='lastClone-c'){
        $slide_C_.style.transition='none';
        counter_C = $slide_C_Images.length-2;
        $slide_C_.style.transform='translateX('+(-size_C*counter_C)+'px)';
    };
    if($slide_C_Images[counter_C].id==='firstClone-c'){
        $slide_C_.style.transition='none';
        counter_C = $slide_C_Images.length-counter_C;
        $slide_C_.style.transform='translateX('+(-size_C*counter_C)+'px)';
    };
})

// ==================FIN SLIDE ORINOQUIA======================
// ===========================================================
// ==================MODAL_C====================================
const $closeC = document.getElementById('close-c');
const $modal_C = document.getElementById('modal-c');
 $nameAnimal_C.addEventListener('click',()=>{
    alert($nameAnimal_C.getAttribute('id'))
    // let textoDescription_C = `<h3>nombre animal</h3>${$nameAnimal_C.getAttribute('id')}`;
    let idC = $nameAnimal_C.getAttribute('id');
    switch(idC) {
        case "c-1":
            let textoDescription_C = `<h3>nombre animal 2 ${$nameAnimal_C.getAttribute('id')}</h3> `;
            $modal_C.innerHTML = textoDescription_C;
            break;
        case "c-2":
            let textoDescription_C5 = `<h3>nombre animal 3 ${$nameAnimal_C.getAttribute('id')}</h3> `;
            $modal_C.innerHTML = textoDescription_C5;
            break;
        case "c-3":
            let textoDescription_C2 = `<h3>nombre animal 4 ${$nameAnimal_C.getAttribute('id')}</h3> `;
            $modal_C.innerHTML = textoDescription_C2;
            break;
        case "c-4":
            let textoDescription_C3 = `<h3>nombre animal 5 ${$nameAnimal_C.getAttribute('id')}</h3> `;
            $modal_C.innerHTML = textoDescription_C3;
            break;
        default:
            let textoDescription_C4 = `<h3>nombre animal 1 ${$nameAnimal_C.getAttribute('id')}</h3> `;
            $modal_C.innerHTML = textoDescription_C4;
      }
    // $modal_C.innerHTML = textoDescription_C;
    $modal_C.style.display='block' ;
    $closeC.style.display='block' ;
    $modal_C.style.animation='fadeIn 2s forwards';
    $closeC.style.animation='fadeIn 2s forwards';
 })
 
  $closeC.addEventListener('click',()=>{
     $modal_C.style.animation='fadeOut 2s forwards';
     $closeC.style.animation='fadeOut 2s forwards';
  })
