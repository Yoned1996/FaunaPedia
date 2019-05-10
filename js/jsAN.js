// ===========================================================================
// ===========================================================================
// ===========================================================================
// ==================SLIDE PACIFICA======================

const $slide_AN_ = document.getElementById('slide-an');
const $slide_AN_Images = document.querySelectorAll('#slide-an div');
const $next_AN = document.getElementById('flecha-derecha-an');
const $nameAnimal_AN = document.getElementById('an-5');

let counter_AN = 1;
const size_AN = $slide_AN_Images[0].clientWidth;

$slide_AN_.style.transform='translateX('+(-size_AN*counter_AN)+'px)';

$next_AN.addEventListener('click',()=>{
    if(counter_AN>= $slide_AN_Images.length-1)return;
    $slide_AN_.style.transition = 'transform 0.4s ease-in-out';
    $nameAnimal_AN.setAttribute('id','an-'+counter_AN);
    let idAN = $nameAnimal_AN.getAttribute('id');
    switch(idAN) {
        case "an-1":
            let texto = `<h3>nombre animal 2</h3>`
            $nameAnimal_AN.innerHTML = texto;
            break;
        case "an-2":
            let texto5 = `<h3>nombre animal 3</h3>`
            $nameAnimal_AN.innerHTML = texto5;
            break;
        case "an-3":
            let texto2 = `<h3>nombre animal 4</h3>`
            $nameAnimal_AN.innerHTML = texto2;
            break;
        case "an-4":
            let texto3 = `<h3>nombre animal 5</h3>`
            $nameAnimal_AN.innerHTML = texto3;
            break;
        default:
            let texto4 = `<h3>nombre animal 1</h3>`
            $nameAnimal_AN.innerHTML = texto4;
      }
    counter_AN++;
    $slide_AN_.style.transform='translateX('+(-size_AN*counter_AN)+'px)';
})

$slide_AN_.addEventListener('transitionend',()=>{
    if($slide_AN_Images[counter_AN].id==='lastClone-an'){
        $slide_AN_.style.transition='none';
        counter_AN = $slide_AN_Images.length-2;
        $slide_AN_.style.transform='translateX('+(-size_AN*counter_AN)+'px)';
    };
    if($slide_AN_Images[counter_AN].id==='firstClone-an'){
        $slide_AN_.style.transition='none';
        counter_AN = $slide_AN_Images.length-counter_AN;
        $slide_AN_.style.transform='translateX('+(-size_AN*counter_AN)+'px)';
    };
})

// ==================FIN SLIDE ORINOQUIA======================
// ===========================================================
// ==================MODAL_AN====================================
const $closeAN = document.getElementById('close-an');
const $modal_AN = document.getElementById('modal-an');
 $nameAnimal_AN.addEventListener('click',()=>{
    alert($nameAnimal_AN.getAttribute('id'))
    // let textoDescription_AN = `<h3>nombre animal</h3>${$nameAnimal_AN.getAttribute('id')}`;
    let idAN = $nameAnimal_AN.getAttribute('id');
    switch(idAN) {
        case "an-1":
            let textoDescription_AN = `<h3>nombre animal 2 ${$nameAnimal_AN.getAttribute('id')}</h3> `;
            $modal_AN.innerHTML = textoDescription_AN;
            break;
        case "an-2":
            let textoDescription_AN5 = `<h3>nombre animal 3 ${$nameAnimal_AN.getAttribute('id')}</h3> `;
            $modal_AN.innerHTML = textoDescription_AN5;
            break;
        case "an-3":
            let textoDescription_AN2 = `<h3>nombre animal 4 ${$nameAnimal_AN.getAttribute('id')}</h3> `;
            $modal_AN.innerHTML = textoDescription_AN2;
            break;
        case "an-4":
            let textoDescription_AN3 = `<h3>nombre animal 5 ${$nameAnimal_AN.getAttribute('id')}</h3> `;
            $modal_AN.innerHTML = textoDescription_AN3;
            break;
        default:
            let textoDescription_AN4 = `<h3>nombre animal 1 ${$nameAnimal_AN.getAttribute('id')}</h3> `;
            $modal_AN.innerHTML = textoDescription_AN4;
      }
    // $modal_AN.innerHTML = textoDescription_AN;
    $modal_AN.style.display='block' ;
    $closeAN.style.display='block' ;
    $modal_AN.style.animation='fadeIn 2s forwards';
    $closeAN.style.animation='fadeIn 2s forwards';
 })
 
  $closeAN.addEventListener('click',()=>{
     $modal_AN.style.animation='fadeOut 2s forwards';
     $closeAN.style.animation='fadeOut 2s forwards';
  })
