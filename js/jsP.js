// ===========================================================================
// ===========================================================================
// ===========================================================================
// ==================SLIDE PACIFICA======================

const $slide_P_ = document.getElementById('slide-p');
const $slide_P_Images = document.querySelectorAll('#slide-p div');
const $next_P = document.getElementById('flecha-derecha-p');
const $nameAnimal_P = document.getElementById('p-5');

let counter_P = 1;
const size_P = $slide_P_Images[0].clientWidth;

$slide_P_.style.transform='translateX('+(-size_P*counter_P)+'px)';

$next_P.addEventListener('click',()=>{
    if(counter_P>= $slide_P_Images.length-1)return;
    $slide_P_.style.transition = 'transform 0.4s ease-in-out';
    $nameAnimal_P.setAttribute('id','p-'+counter_P);
    let idP = $nameAnimal_P.getAttribute('id');
    switch(idP) {
        case "p-1":
            let texto = `<h3>nombre animal 2</h3>`
            $nameAnimal_P.innerHTML = texto;
            break;
        case "p-2":
            let texto5 = `<h3>nombre animal 3</h3>`
            $nameAnimal_P.innerHTML = texto5;
            break;
        case "p-3":
            let texto2 = `<h3>nombre animal 4</h3>`
            $nameAnimal_P.innerHTML = texto2;
            break;
        case "p-4":
            let texto3 = `<h3>nombre animal 5</h3>`
            $nameAnimal_P.innerHTML = texto3;
            break;
        default:
            let texto4 = `<h3>nombre animal 1</h3>`
            $nameAnimal_P.innerHTML = texto4;
      }
    counter_P++;
    $slide_P_.style.transform='translateX('+(-size_P*counter_P)+'px)';
})

$slide_P_.addEventListener('transitionend',()=>{
    if($slide_P_Images[counter_P].id==='lastClone-p'){
        $slide_P_.style.transition='none';
        counter_P = $slide_P_Images.length-2;
        $slide_P_.style.transform='translateX('+(-size_P*counter_P)+'px)';
    };
    if($slide_P_Images[counter_P].id==='firstClone-p'){
        $slide_P_.style.transition='none';
        counter_P = $slide_P_Images.length-counter_P;
        $slide_P_.style.transform='translateX('+(-size_P*counter_P)+'px)';
    };
})

// ==================FIN SLIDE ORINOQUIA======================
// ===========================================================
// ==================MODAL_P====================================
const $closeP = document.getElementById('close-p');
const $modal_P = document.getElementById('modal-p');
 $nameAnimal_P.addEventListener('click',()=>{
    alert($nameAnimal_P.getAttribute('id'))
    // let textoDescription_P = `<h3>nombre animal</h3>${$nameAnimal_P.getAttribute('id')}`;
    let idP = $nameAnimal_P.getAttribute('id');
    switch(idP) {
        case "p-1":
            let textoDescription_P = `<h3>nombre animal 2 ${$nameAnimal_P.getAttribute('id')}</h3> `;
            $modal_P.innerHTML = textoDescription_P;
            break;
        case "p-2":
            let textoDescription_P5 = `<h3>nombre animal 3 ${$nameAnimal_P.getAttribute('id')}</h3> `;
            $modal_P.innerHTML = textoDescription_P5;
            break;
        case "p-3":
            let textoDescription_P2 = `<h3>nombre animal 4 ${$nameAnimal_P.getAttribute('id')}</h3> `;
            $modal_P.innerHTML = textoDescription_P2;
            break;
        case "p-4":
            let textoDescription_P3 = `<h3>nombre animal 5 ${$nameAnimal_P.getAttribute('id')}</h3> `;
            $modal_P.innerHTML = textoDescription_P3;
            break;
        default:
            let textoDescription_P4 = `<h3>nombre animal 1 ${$nameAnimal_P.getAttribute('id')}</h3> `;
            $modal_P.innerHTML = textoDescription_P4;
      }
    // $modal_P.innerHTML = textoDescription_P;
    $modal_P.style.display='block' ;
    $closeP.style.display='block' ;
    $modal_P.style.animation='fadeIn 2s forwards';
    $closeP.style.animation='fadeIn 2s forwards';
 })
 
  $closeP.addEventListener('click',()=>{
     $modal_P.style.animation='fadeOut 2s forwards';
     $closeP.style.animation='fadeOut 2s forwards';
  })
