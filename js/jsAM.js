// ===========================================================================
// ===========================================================================
// ===========================================================================
// ==================SLIDE PACIFICA======================

const $slide_AM_ = document.getElementById('slide-am');
const $slide_AM_Images = document.querySelectorAll('#slide-am div');
const $next_AM = document.getElementById('flecha-derecha-am');
const $nameAnimal_AM = document.getElementById('am-5');

let counter_AM = 1;
const size_AM = $slide_AM_Images[0].clientWidth;

$slide_AM_.style.transform='translateX('+(-size_AM*counter_AM)+'px)';

$next_AM.addEventListener('click',()=>{
    if(counter_AM>= $slide_AM_Images.length-1)return;
    $slide_AM_.style.transition = 'transform 0.4s ease-in-out';
    $nameAnimal_AM.setAttribute('id','am-'+counter_AM);
    let idAM = $nameAnimal_AM.getAttribute('id');
    switch(idAM) {
        case "am-1":
            let texto = `<h3>nombre animal 2</h3>`
            $nameAnimal_AM.innerHTML = texto;
            break;
        case "am-2":
            let texto5 = `<h3>nombre animal 3</h3>`
            $nameAnimal_AM.innerHTML = texto5;
            break;
        case "am-3":
            let texto2 = `<h3>nombre animal 4</h3>`
            $nameAnimal_AM.innerHTML = texto2;
            break;
        case "am-4":
            let texto3 = `<h3>nombre animal 5</h3>`
            $nameAnimal_AM.innerHTML = texto3;
            break;
        default:
            let texto4 = `<h3>nombre animal 1</h3>`
            $nameAnimal_AM.innerHTML = texto4;
      }
    counter_AM++;
    $slide_AM_.style.transform='translateX('+(-size_AM*counter_AM)+'px)';
})

$slide_AM_.addEventListener('transitionend',()=>{
    if($slide_AM_Images[counter_AM].id==='lastClone-am'){
        $slide_AM_.style.transition='none';
        counter_AM = $slide_AM_Images.length-2;
        $slide_AM_.style.transform='translateX('+(-size_AM*counter_AM)+'px)';
    };
    if($slide_AM_Images[counter_AM].id==='firstClone-am'){
        $slide_AM_.style.transition='none';
        counter_AM = $slide_AM_Images.length-counter_AM;
        $slide_AM_.style.transform='translateX('+(-size_AM*counter_AM)+'px)';
    };
})

// ==================FIN SLIDE ORINOQUIA======================
// ===========================================================
// ==================MODAL_AM====================================
const $closeAM = document.getElementById('close-am');
const $modal_AM = document.getElementById('modal-am');
 $nameAnimal_AM.addEventListener('click',()=>{
    alert($nameAnimal_AM.getAttribute('id'))
    // let textoDescription_AM = `<h3>nombre animal</h3>${$nameAnimal_AM.getAttribute('id')}`;
    let idAM = $nameAnimal_AM.getAttribute('id');
    switch(idAM) {
        case "am-1":
            let textoDescription_AM = `<h3>nombre animal 2 ${$nameAnimal_AM.getAttribute('id')}</h3> `;
            $modal_AM.innerHTML = textoDescription_AM;
            break;
        case "am-2":
            let textoDescription_AM5 = `<h3>nombre animal 3 ${$nameAnimal_AM.getAttribute('id')}</h3> `;
            $modal_AM.innerHTML = textoDescription_AM5;
            break;
        case "am-3":
            let textoDescription_AM2 = `<h3>nombre animal 4 ${$nameAnimal_AM.getAttribute('id')}</h3> `;
            $modal_AM.innerHTML = textoDescription_AM2;
            break;
        case "am-4":
            let textoDescription_AM3 = `<h3>nombre animal 5 ${$nameAnimal_AM.getAttribute('id')}</h3> `;
            $modal_AM.innerHTML = textoDescription_AM3;
            break;
        default:
            let textoDescription_AM4 = `<h3>nombre animal 1 ${$nameAnimal_AM.getAttribute('id')}</h3> `;
            $modal_AM.innerHTML = textoDescription_AM4;
      }
    // $modal_AM.innerHTML = textoDescription_AM;
    $modal_AM.style.display='block' ;
    $closeAM.style.display='block' ;
    $modal_AM.style.animation='fadeIn 2s forwards';
    $closeAM.style.animation='fadeIn 2s forwards';
 })
 
  $closeAM.addEventListener('click',()=>{
     $modal_AM.style.animation='fadeOut 2s forwards';
     $closeAM.style.animation='fadeOut 2s forwards';
  })
