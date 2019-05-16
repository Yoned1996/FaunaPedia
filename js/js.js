const $start = document.getElementById('start');
const $principal = document.getElementById('principal');
const $nav = document.getElementById('nav');
const $close = document.getElementById('close');
const $body = document.getElementById('body');
const $main = document.getElementById('main');
const $menu2 = document.getElementById('menu-2');
const $subir = document.getElementById('subir');
let clicks = 0;


$start.addEventListener('click',iniciar);
$close.addEventListener('click',cerrar);
$main.addEventListener('click',main);

function iniciar(){
    $principal.style.animation='fadeOut .5s forwards';
    $principal.style.display='none' ;
    $nav.style.display='block' ;
    $nav.style.animation='fadeIn .5s forwards';
    $subir.style.display='block' ;
    $subir.style.animation='fadeIn .5s forwards';
    $main.style.display='block' ;
    $main.style.animation='fadeIn .5s forwards';
}

function cerrar(){
    $principal.style.animation='fadeIn .5s forwards';
    $principal.style.display='block' ;
    $nav.style.display='none' ;
    $nav.style.animation='fadeOut .5s forwards';
    $subir.style.display='block' ;
    $subir.style.animation='fadeOut .5s forwards';
    $main.style.display='block' ;
    $main.style.animation='fadeOut .5s forwards';
}

function main(e){
    clicks++;
    console.log(clicks%2);
    if(clicks%2==0){
        $menu2.style.animation='menuOut .5s forwards'
    }
    else{
        $menu2.style.animation='menu .5s forwards'
    }
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
            let texto = `<h3>Corocora roja</h3>
            <h4 class="title-orinoquia">Eudocimus ruber</h4>`
            $nameAnimal.innerHTML = texto;
            break;
        case "o-2":
            let texto5 = `<h3>Danta</h3>
            <h4 class="title-orinoquia">Tapirus</h4>`
            $nameAnimal.innerHTML = texto5;
            break;
        case "o-3":
            let texto2 = `<h3>Chigüiro</h3>
            <h4 class="title-orinoquia">Hydrochoerus hydrochaeris</h4>`
            $nameAnimal.innerHTML = texto2;
            break;
        default:
            let texto4 = `<h3>Nutria gigante</h3>
            <h4 class="title-orinoquia">Pteronura brasiliensis</h4>`
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
    // let textoDescription = `<h3>nombre animal</h3>${$nameAnimal.getAttribute('id')}`;
    let idO = $nameAnimal.getAttribute('id');
    switch(idO) {
        case "o-1":
            let textoDescription = `
            <div class="foto-animal">
                <img src="img/orinoquia/2.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/orinoquia.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/reptil.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/selva.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Corocora roja</h3>
                        <h4 class="title-orinoquia">Eudocimus ruber</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El más conocido es Corocoro, aunque también responde al nombre de Ibis escarlata, garza roja y guará.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Tamaño y Forma</h5>
                        <p>Mide de 55 a 63 cm y presentan una envergadura alar de 26 a 28 cm los machos y de 23 a 26 las hembras. Presenta pico largo y curvado. Su plumaje es de color escarlata brillante con el tercio distal de las alas de color negro. Sus patas son rosa al igual que su pico el cual se torna negro durante la época reproductiva. Los inmaduros tienen la cabeza y el cuello estriado o moteado de café y blanco y las partes superiores de color café grisáceo oscuro. Sus partes inferiores y rabadilla son blancas y en ocasiones presentan moteado rosa.  
                        </p>
                    </div>
                    <div class="info">
                        <h5>Distribución</h5>
                        <p>Esta especie se encuentra en el oriente de Ecuador, norte y oriente de Colombia, norte de Venezuela, Guayanas y la costa de Brasil hasta el delta del río Amazonas. En Colombia se encuentra en el valle bajo del Río Magdalena y al oriente de los Andes desde el sur de Arauca hasta el Meta, occidente de Caquetá y probablemente bien al oriente hasta Vichada. En algunas ocasiones también ha llegado a ser registrada en la Laguna de Sonso y en arrozales del departamento del Valle del Cauca.                     
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Habita en manglares, marismas, lagos de aguas poco profundas, pantanos de agua dulce, campos inundados y cultivos de arroz. También utiliza cuerpos de aguas residuales y durante el periodo reproductivo anida en islas con manglares cerca de la desembocadura de ríos. En tierras de interior anida en árboles y arbustos al interior de humedales.                
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Se alimenta principalmente de crustáceos como de cangrejos de los géneros Aratus, Uca y Ucides. También incluye en su dieta moluscos, insectos, poliquetos del género Nereis  y peces de la familia Cichlidae.                                            
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Su época de reproducción se encuentra fuertemente condicionada por la estacionalidad climática y se reproduce después de largos periodos de lluvia. Forma grandes colonias que pueden llegar a 5000 parejas o incluso más en zonas costeras. Su nido es una plataforma pequeña la cual construye con palos a alturas de 1 a 4.5 m sobre ramas de árboles. Pone de 1 a 3 huevos los cuales incuba durante 21 a 23 días. Los polluelos adquieren todo el plumaje necesario para volar después de 35 a 42 días.                                             
                        </p>
                    </div>
                    <div class="info">
                        <h5>Comportamiento</h5>
                        <p>Comúnmente forrajea en bandadas de decenas de individuos. Cuando busca alimento sondea con el pico en el fango y en aguas poco profundas. Diariamente se mueve largas distancias entre los lugares de anidamiento o descanso y las áreas de forrajeo. Las poblaciones de esta especie efectúan movimientos estacionales de acuerdo con la oferta de cuerpos de agua y al volar usualmente los hacen en bandadas que generalmente configuran una formación en “V”.                                           
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <pEn el ámbito internacional es considerada como una especie de preocupación menor. No obstante se encuentra incluida en el apéndice II en el Convenio sobre el Comercio Internacional de Especies Amenazadas de Flora y Fauna (CITES).                                           
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal.innerHTML = textoDescription;
            break;
        case "o-2":
            let textoDescription5 = `
            <div class="foto-animal">
                <img src="img/orinoquia/3.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/orinoquia.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/reptil.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/selva.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Danta</h3>
                        <h4 class="title-orinoquia">Tapirus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <h5>Clasificación</h5>
                        <p>Reino: Animalia, Phylum: Chordata, Clase: Mammalia, Orden: Perissodactyla, Familia: Tapiridae, Género: Tapirus, Especie: Tapirus terrestris.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Distribución</h5>
                        <p>Sudamérica, desde Colombia y Venezuela hasta Paraguay y Brasil.                     
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>La danta amazónica se encuentra en los bosques de la Orinoquía y de la Amazonía, aunque también se ha reportado la presencia de individuos en otras regiones del país, como en Antioquia, donde vive en los bosques menos intervenidos. Comparte su hábitat con las tatabras y los chigüiros.               
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Es herbívora y usa su nariz móvil, llamada probóscide, para comer hojas, ramas y frutas.                                           
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Su gestación es de 300 a 330 días, tras de los cuales nace una cría que permanecerá con su madre hasta alcanzar la edad adulta.                                            
                        </p>
                    </div>
                    <div class="info">
                        <h5>Comportamiento</h5>
                        <p>Excelente nadador y buceador. Se desplaza también con destreza en la tierra. En la vida salvaje, es depredado por cocodrilos, felinos como  el jaguar y el puma que lo atacan de noche, cuando sale del agua y duerme en la costa. Es parcialmente diurnos. Vive solitario o en pareja. De día descansa entre la densa vegetación, especialmente entre los pantanos. Es tímido y silencioso.                                          
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p>Vulnerable (IUCN).                                         
                        </p>
                    </div>
                    <div class="info">
                        <h5>Amenazas</h5>
                        <p>En la actualidad, las principales amenazas son la cacería y la pérdida y fragmentación del hábitat.                                         
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal.innerHTML = textoDescription5;
            break;
        case "o-3":
            let textoDescription2 = `
            <div class="foto-animal">
                <img src="img/orinoquia/4.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/orinoquia.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/reptil.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/selva.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Chigüiro</h3>
                        <h4 class="title-orinoquia">Hydrochoerus hydrochaeris</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <h5>Distribución</h5>
                        <p>Hay dos subespecies:</p>
                        <ul>
                            <li>La de menor superficie se extiende por el este del Panamá, al este de la cuenca del Canal de Panamá, el Darién, el norte de Colombia, y el noroeste de Venezuela.</li>
                            <li>
                            La de mayor superficie comprende casi toda Sudamérica al este de los Andes en las cuencas del río Orinoco, del Amazonas y del Río de la Plata; cubriendo desde el este de Venezuela y la Guyana hasta el Uruguay y el norte y centro de la Argentina.</li>
                        </ul>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Suelen encontrarse cerca de  lagos, ríos, ciénagas y manglares. También necesitan un suelo firme para dormir, idealmente con una vegetación espesa que les sirve de protección. Para alimentarse no tienen problema en adentrarse por las sabanas y herbazales.                     
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>La dieta se compone principalmente de hierba terrestre y la complementa de vez en cuando con plantas acuáticas.              
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>El periodo de gestación dura unos 110 días en la subespecie septentrional y unos 150 en la meridional. En cada parto nacen en promedio cuatro crías, pero el número puede variar entre dos y ocho.                                         
                        </p>
                    </div>
                    <div class="info">
                        <h5>Comportamiento</h5>
                        <p>Viven en grupos, que pueden estar constituidos por una pareja y sus crías, o por un grupo más grande de ejemplares adultos. La medida de los grupos varía entre seis y veinte animales. En algunos casos raros también se puede observar ejemplares solitarios, casi siempre machos adultos.                                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Amenazas</h5>
                        <p>El principal enemigo es el hombre, que en algunas regiones lo considera un peligro para la agricultura. También, la contaminación de los ríos y la desecación de humedales, especialmente en el norte de Colombia, afecta las poblaciones de una de las subespecies.                                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p>Vulnerable (IUCN).                                         
                        </p>
                    </div>
                    <div class="info">
                        <h5>Amenazas</h5>
                        <p>En la actualidad, las principales amenazas son la cacería y la pérdida y fragmentación del hábitat.                                         
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal.innerHTML = textoDescription2;
            break;
        default:
            let textoDescription4 = `
            <div class="foto-animal">
                <img src="img/orinoquia/1.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/orinoquia.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/reptil.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/selva.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Nutria gigantes</h3>
                        <h4 class="title-orinoquia">Pteronura brasiliensis</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>Posee un cuerpo largo, similar al de una rata, y tienen el pelaje más corto de todas las especies de nutrias, de hecho muchas personas encuentran a esta nutria en particular  muy diferentes en tamaño y forma a los demás y son, a menudo, confundidos con otro tipo de animal..                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Distribución</h5>
                        <p>La nutria gigante se encuentra a lo largo de América del Sur, prefieren vivir en los ríos y arroyos que de agua dulce. Se les podía encontrar en el río amazonas y el río orinoco.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Comportamiento</h5>
                        <p>Son muy sociales por lo que se encuentran viviendo en grandes grupos, y son conocidas como las más ruidosas de todas las especies de nutrias, debido a las constantes comunicaciones que tienen lugar entre los miembros del grupo.
                        Encontrará que están activas durante el día, retirándose a sus guaridas en la tierra cuando el sol se pone. Estas nutrias prefieren vivir en grupos que pueden tener hasta 20 miembros, estos grupos tienen una jerarquía compleja, por ejemplo, las hembras con crías tienen prioridad sobre todas las demás.
                        Son muy protectores con los miembros de sus grupos también y, por lo general, son los machos los que se ocupan de la defensa, pero hay casos en que los que se han registrado batallas de hembras también.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Dieta / Alimentación</h5>
                        <p>La nutria gigante se alimenta, principalmente, de varios tipos de peces en el agua, también disfrutan alimentándose de cangrejos.                    
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>La reproducción de la nutria gigante tiene mucho por ser descubierto, los expertos sólo pueden asumir lo que realmente sucede en la naturaleza. Se han observado tales actividades en cautividad, pero siempre habrá diferencias a sus comportamientos naturales.
                        Siempre exista alimento, las nutrias gigantes tomarán parte en el apareamiento durante todo el año.
                        Los machos inician el proceso y cerca de 70 días después de la concepción, nacerá el cachorro. La hembra podrá estar lista para aparearse de nuevo en un par de meses, pero pueden pasar hasta 2 años antes que esto suceda.
                        Son buenas cuidadoras, pero las investigaciones demuestran que el estrés puede hacer que no produzcan suficiente leche, o que abandonen a su cachorro, esto sucede tanto en cautividad como en la naturaleza. La esperanza de vida promedio de una nutria gigante es de 8 años en libertad y 17 en cautividad.
                                             
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p>El futuro de la nutria gigante se proyecta sombrío, sin embargo, con los esfuerzos de conservación existentes puede haber alguna esperanza para estas nutrias después de todo. Quedan menos de 5.000 en la naturaleza y aproximadamente 60 en cautiverio. Parecen adaptarse bien a los cambios en su ambiente natural, lo cual es una ventaja.
                        Ahora mismo se clasifican como vulnerables, y sigue habiendo estudios sobre como introducirlas a nuevos entornos. La caza furtiva sigue siendo un problema para estos animales, a los pescadores comerciales se les pide que utilicen redes que no dañen o maten a la nutria gigante, estas son más caras, y muchos de ellos aún no han hecho la transición.                                              
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal.innerHTML = textoDescription4;
      }
    // $modal.innerHTML = textoDescription;
    $modal.style.display='block' ;
    $closeO.style.display='block' ;
    $modal.style.animation='fadeIn .5s forwards';
    $closeO.style.animation='fadeIn .5s forwards';
 })
 
  $closeO.addEventListener('click',()=>{
     $modal.style.animation='fadeOut .5s forwards';
     $closeO.style.animation='fadeOut .5s forwards';
  })

 
