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
            let textoDescription_C4 = `
            <div class="foto-animal">
                <img src="img/caribe/1.jpg" alt="">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/caribe.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/rasgos.png" alt="">
                    <img src="img/mamifero.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/habitad.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h3>El tigrillo</h3>
                            <h4 class="title-caribe">Leopardus tigrinus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El tigrillo cuyo nombre científico es Leopardus tigrinus) o también conocido dependiendo de donde habite como leopardo tigre, gato tigrillo, cunaguaro y maracayá, entre otros nombres,.
                        Se le identifica no solo por su tamaño sino también porque sus ojos son grandes, su cabeza pequeña, sus orejas cortas y erectas y su cola bastante larga, la cual en ocasiones puede medir casi la mitad de la longitud total de su cuerpo. Además, tienen una sorprendente habilidad: puede llegar a girar sus tobillos 180 grados para poder bajar de los árboles.
                        </p>
                    </div>
                    <div class="info">
                        <h5>hábitat del tigrillo</h5>
                        <p> Suele encontrarse comúnmente en ambientes húmedos donde la vegetación es densa, por esta razón se le encuentra desde el nivel del mar hasta los 3000 msnm en bosques caducifolios, bosques perennifolios, selvas tropicales, bosques tropicales húmedos y semihúmedos.</p>
                    </div>
                    <div class="info">
                        <h5>Características del tigrillo</h5>
                        <p>A simple vista el tigrillo es un animal  semejante al ocelote , sin embargo, es más pequeño que este. El tamaño que puede alcanzar un ejemplar adulto, sea hembra o macho, es de 39 a 78 cm de longitud sin contar la cola que por sí sola llega a medir entre 33 y 51 cm, una altura de entre 22 a 30 cm y  un peso que oscila entre los 2 hasta los 3 kg.
                        El pelaje del tigrillo es largo, suave, denso y no tiene la misma tonalidad en todos los ejemplares ni en todas las partes del cuerpo. De esta manera, los costados pueden ir desde un gris mate hasta el ocre rojizo, la zona del vientre y la parte interna de las patas son de un amarillo pálido. Asimismo, en su cuerpo presenta manchas con un patrón único para cada ejemplar, en ocasiones pueden ser irregulares o parecidas a rosetas que se alargan en el lomo y la cabeza, hasta parecer rayas en la cabeza. En su larga y poblada cola se representa aproximadamente 12 anillos oscuros.
                        El tigrillo tiene una capacidad muy poco común y que de hecho solo comparte con la pantera nebulosa, y es el poder rotar sus tobillos en un ángulo de 180º para trepar y descender boca abajo de los árboles. y correr por debajo de las ramas. Además, es un animal muy ágil a pesar de su pequeño tamaño y cuentan con un desarrollado sentido de la visión por las noches.
                        En cuanto a los hábitos de vida del tigrillo, debemos mencionar que es un animal que vive y caza prácticamente entre los árboles y las ramas, por lo tanto, se le considera como una especie arborícola y terrestre. Además, realiza sus actividades al caer el atardecer y en la oscuridad de la noche. Es un felino bastante. territorial y solitario, tan solo se le podrá ver en pequeños grupos durante la época de apareamiento.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación del tigrillo</h5>
                        <p>El tigrillo es un mamífero carnívoro con una alimentación variada, constituida por mamíferos pequeños que al igual que él viven entre los árboles, como los monos y las zarigüeyas, además de aves, ardillas y en menor proporción reptiles y anfibios. Por lo general, este felino realiza su labor de cacería en los árboles desde donde acecha a sus presas y las captura, aunque si tiene que bajar al suelo a cazar lo hará sin ningún problema.
                        Una peculiaridad única del tigrillo, es que en su afán por conseguir alimento, el tigrillo es capaz de llegar a imitar los aullidos de las crías de los monos con el objetivo de poder cazar a los padres cuando crean que les está llamando su cría.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción del tigrillo</h5>
                        <p>El tigrillo se encontrará listo para reproducirse a partir de los dos años de edad, una vez que ha alcanzado la madurez sexual. A partir de este momento y a lo largo de toda su vida solo podrá aparearse en cinco ocasiones. La hembra tan solo tendrá crías cada dos años y en toda su vida reproductiva tendrá un máximo de cinco. Aunque la época reproductiva va determinada por la ubicación geográfica de los ejemplares, se sabe que es más común que ocurra entre los meses de octubre a enero.
                        Cuando el macho fecunda a la hembra esta comenzará un período de gestación que comprende entre 81 y 84 días, tras lo cual pare entre uno y dos cachorros, aunque lo más común es que sea tan solamente uno. Al nacer, la cría del tigrillo pesará entre 85 a 125 gramos y requerirá de todos los cuidados de la madre quien lo amamantará con sus únicas dos tetillas. Cuando este pequeño alcance entre 6 meses y un año de edad pasará a la vida adulta y comenzará su vida en solitario.</p>
                    </div>
                    <div class="info">
                        <h5>Tigrillo en peligro de extinción</h5>
                        <p>Si bien el tigrillo hoy día ocupa una gran extensión geográfica, su estado de acuerdo con la Unión Internacional para la Conservación de la Naturaleza (UICN) es Vulnerable (VU), porque si bien ha disminuido el número de ejemplares no ha sido de una forma drástica o alarmante.
                        En la época en la industria peletera gozaba de gran auge. El tigrillo se convirtió en una de las especies en la mira de los cazadores quienes les daban caza para posteriormente vender su hermosa piel con la que se fabricaban prendas de vestir y accesorios.
                        Sin embargo, en vista del grave daño que estaba causando esta práctica en el ecosistema, la cacería fue prohibida internacionalmente, pero con esto no terminó la amenaza porque en muchos lugares se les sigue cazando ilegalmente. No obstante, la principal amenaza hoy en día para el tigrillo, la constituye la destrucción de su hábitat, ya sea por la contaminación, la deforestación o la urbanización.
                        Lo cierto, es que en América este mamífero ha visto como su hogar está disminuyendo lo que les obliga en ocasiones a trasladarse a otros sitios en los que no logra adaptarse o en los que debe enfrentarse a otros animales de mayor tamaño que ya ocupan esos territorios.
                        Asimismo, la destrucción del hábitat y la cacería no solo han afectado directamente al tigrillo, sino que han ocasionado la disminución del número de pequeños mamíferos, aves, reptiles y anfibios que le sirven de alimento, de manera que este ha visto como mengua su posibilidad de conseguir algo con lo que alimentarse.
                        Por último, el hecho de que este felino solo pueda aparearse cinco veces en toda su vida constituye un grave problema pues las posibilidades de que la especie de que se multipliquen son bastante limitadas. En vista de toda esta situación se han implementado medidas para evitar que sigan desapareciendo ejemplares y que el tigrillo entre en la lista de animales en peligro de extinción.
                        </p>
                    </div>
                </div>
            </div>
            `;
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
