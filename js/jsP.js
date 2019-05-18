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
            let texto = `<h3>Cabeza de candado, Víbora de pestañas</h3>
                        <h4 class="title-pacifico">Bothriechis schlegelii (Viperidae)</h4>`
            $nameAnimal_P.innerHTML = texto;
            break;
        case "p-2":
            let texto5 = `<h3>Correlón escamado</h3>
            <h4 class="title-pacifico">Neomorphus radiolosus</h4>`
            $nameAnimal_P.innerHTML = texto5;
            break;
        case "p-3":
            let texto2 = `<h3>Rana dardo dorada</h3>
            <h4 class="title-pacifico">Phyllobates terribilis</h4>`
            $nameAnimal_P.innerHTML = texto2;
            break;
        default:
            let texto4 = `<h3>Tiburón martillo</h3>
                            <h4 class="title-pacifico">Sphyrna lewini</h4>`
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
    // let textoDescription_P = `<h3>nombre animal</h3>${$nameAnimal_P.getAttribute('id')}`;
    let idP = $nameAnimal_P.getAttribute('id');
    switch(idP) {
        case "p-1":
            let textoDescription_P = `
            <div class="foto-animal">
                <img src="img/pacifica/2.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/pacifica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/reptil.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/bosque-humedo.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Cabeza de candado, Víbora de pestañas</h3>
                        <h4 class="title-pacifico">Bothriechis schlegelii (Viperidae)</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable2.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El nombre científico es Bothriechis schlegelii (Viperidae). Esta especie presenta un patrón de pigmentación muy variado. Su actividad es principalmente nocturna. Utiliza su cola para desplazarse por las ramas. se cree que las escamas “pestañas” que están ubicadas sobre sus ojos tienen como función desviar la vegetación.
                        Su veneno es considerado de toxicidad moderada, produce hemorragias y puede llegar a producir gangrena; posee un promedio de 12 mg de veneno, una mordedura inyecta cerca de 0,5 cc de veneno.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Habita en los bosques húmedos, húmedos tropicales, bosques subtropicales húmedos (selva nublada) y bosques muy húmedos montañosos. Es arborícola y terrestre, se puede encontrar en alturas bajas o medias que no superan los dos metros
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>Es de tamaño pequeño. Las hembras adultas poseen mayor longitud que los machos. La cabeza es grande, se diferencia bien del cuello, los ojos son grandes y la pupila vertical elíptica, su hocico es ligeramente puntiagudo y no elevado, la escama del rostro es  más ancha que alta, y escama nasal grande y entera. “Esta especie presenta los siguientes conteos de escamas: 4-5 internasales; una supraocular, lisa y alargada; 5-10 inter supraoculares; 1-3 (generalmente 2) supraciliares planas, alargadas y flexibles sobre la margen del párpado; temporales fuertemente quilladas; 21-25 (generalmente 23) hileras de escamas dorsales quilladas y sin fosetas apicales, las hileras de escamas dorsales en contacto con las escamas ventrales son lisas; 7-10 supralabiales, (generalmente 8), con la 2da fusionada con la prelacunar; 10-13 infra labiales; 1 preocular; 1-2 suboculares; 2-3 post oculares; 137-169 ventrales; 42-64 subcaudales no divididas; escama anal entera; hemipenes evertidos con 16-24 espinas basales alargadas y espinas mesiales grandes dirigidas hacia la ingle de los lóbulos” (Gutberlet y Campbell 2001, Savage 2002, Campbell y Lamar 2004). la variación de color es extensa. La pigmentación de su piel puede ser amarillo, naranja, verde oliva, café, rosado, plateado, gris oscuro o negro carbón, con distintas intensidades, con muchos distintos diseños y pigmentaciones secundarias. Los especímenes que presentan pigmentación amarilla suelen tener puntos negros, el vientre es de un amarillo más pálido, también con presencia de manchas y rayas oscuras; su iris es amarillo o beige y la lengua marrón. Sus tonalidades varían dependiendo de la altura del lugar, los de tierras bajas son más claros que los de tierras altas.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Distribución geográfica</h5>
                        <p>Se encuentran especímenes desde el sur de México hasta Panamá. Es la única especie de este género que habita en América del Sur, habita en países al noroeste (Colombia, Ecuador y Perú). En Colombia, su territorio abarca desde el nivel del mar hasta los 2640 metros sobre el nivel del mar,  la víbora de pestañas se distribuye por las siguientes regiones y departamentos: Región del pacifica, departamento del Magdalena y Córdoba; Región Pacífica, Chocó, Valle del Cauca, Cauca y Nariño; y Región Andina, Cesar, Norte de Santander, Antioquia, Santander, Boyacá, Cundinamarca, Caldas, Risaralda, Quindío, Meta y Huila.                       
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Es un depredador de emboscada, acecha a sus presas hasta que se encuentren a su alcance. Es una serpiente oportunista su dieta es variada y llena de pequeños animales vertebrados como lagartos, ranas, roedores, marsupiales, murciélagos y aves.                      
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Es una especie ovovivípara, muy fecunda en estado de cautiverio; llega a su madurez sexual aproximadamente a los tres años, desde ese momento pueden dar a luz una camada al año alrededor de  20 crías, este número puede variar según su tamaño; durante el periodo de gestación las hembras no se alimentan. El cortejo y el apareamiento tiene lugar en las ramas, el macho balancea la cabeza de lado a lado hasta que toca la hembra, después utiliza movimientos hacia adelante hasta llegar a una posición dorsal sobre la hembra; las colas de las serpientes se cuelgan de una rama y se entrelazan hasta que las cloacas entran en contacto; la cópula es de tres horas. La gestación, casi de seis meses.                       
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_P.innerHTML = textoDescription_P;
            break;
        case "p-2":
            let textoDescription_P5 = `
            <div class="foto-animal">
                <img src="img/pacifica/3.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/pacifica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/ave.png" alt="">
                    <img src="img/insectivoro.png" alt="">
                    <img src="img/selva-humeda.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Correlón escamado</h3>
                        <h4 class="title-pacifico">Neomorphus radiolosus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable2.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>Su nombre científico es neomorphus radiolosus. Está especie reside en la selva tropical primaria en la Ecorregión de Chocó, en el extremo noroeste de Ecuador y el suroeste de Colombia, se encuentra en amenazada por la pérdida acelerada de su hábitat. Recibe el nombre correlón gracias a los cazadores indígenas Awá, que significa "corredor rápido".  Pasa gran parte de su día en el suelo o en lugares de densa vegetación, lo que dificulta su avistamiento. Suele diferenciarse por un chasquido característico, que produce con sus mandíbulas.                       
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Está especie es de  las aves más raras y de las que tenemos menor conocimiento pero se encuentra en peligro de extinción en el Chocó debido a la invasión humana de su hábitat.
                        Habita en las selvas húmedas de tierras bajas en la vertiente Pacífica en la cordillera Occidental. Se localiza en grandes extensiones de bosque, lejos del contacto humano, sin embargo puede hallarse en bosques secundarios adyacentes.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>Su tamaño aproximado es de 50 cm. El pico es robusto, de color pardo en la parte superior y amarillo en la inferior, la región ocular es color azul y sin plumaje. Su cabeza tiene plumaje negro; al avanzar hacia su cuello las plumas tienen color negro y blanco; y el plumaje de su cuerpo presenta tonalidades pardas. Posee una cresta que sobresale de su cabeza. Al interior de las alas su plumaje se torna de color rojo púrpura y cola larga negruzca con lustre verde. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Distribución geográfica</h5>
                        <p>Es una especie endémica del Chocó, se pueden encontrar individuos desde el suroccidente de Colombia hasta el noroccidente de Ecuador. Se encuentra desde 500 hasta 1200 metros sobre el nivel del mar en la Costa Pacífica desde la parte baja del río San Juan hacia el sur.                      
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Su alimentación se basa invertebrados y pequeños vertebrados.En su dieta se destacan en insectos y algunos frutos, como: saltamontes, escarabajos, mariposas, chicharras, arañas, lombrices de tierra, ranas, lagartos, culebras y pulpa de Gustavia dodsonii (Lecythidaceae).                     
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Se registra el hallazgo de nidos en Ecuador en los meses de marzo, abril y mayo. Fabrica sus nidos en árboles bajos, aproximadamente a 5 m de altura sobre una horqueta cerca al tronco del árbol. La forma de sus nidos es de una copa abierta y abultada construida  con hojas de bromelias y palmas. Su postura es de un solo huevo y es incubado por ambos sexos, también participan en el cuidado y la alimentación del polluelo, a quienes se les proporciona principalmente invertebrados y vertebrados pequeños. La formacion de su pelaje culmina alrededor de los 10 días después de la eclosión y permanecen en el nido hasta los 20 días.                      
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_P.innerHTML = textoDescription_P5;
            break;
        case "p-3":
            let textoDescription_P2 = `
            <div class="foto-animal">
                <img src="img/pacifica/4.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/pacifica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/anfibio.png" alt="">
                    <img src="img/insectivoro.png" alt="">
                    <img src="img/selva-humeda.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Rana dardo dorada</h3>
                        <h4 class="title-pacifico">Phyllobates terribilis,</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable2.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El nombre científico es Phyllobates terribilis, es considerada el animal más venenoso de la Tierra. Esta especie mide aproximadamente 5 centímetros y su veneno es tan potente que podría matar a diez hombres adultos. Recibe su nombre gracias a los indígenas Embera, usaron su veneno para derrotar a sus enemigos, untaban las puntas de los dardos que disparanban.Su nombre científico es neomorphus radiolosus. Está especie reside en la selva tropical primaria en la Ecorregión de Chocó, en el extremo noroeste de Ecuador y el suroeste de Colombia, se encuentra en amenazada por la pérdida acelerada de su hábitat. Recibe el nombre correlón gracias a los cazadores indígenas Awá, que significa "corredor rápido".  Pasa gran parte de su día en el suelo o en lugares de densa vegetación, lo que dificulta su avistamiento. Suele diferenciarse por un chasquido característico, que produce con sus mandíbulas.   </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Habita en las selvas húmedas con precipitaciones de 5000 mm o más, a una temperatura aproximada a los 30° centígrados, Permanecen en lugares cercanos a los ecosistemas acuáticos, tales como pantanos y lagos.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>Posee pequeños discos en sus dedos que le facilita trepar. Sus colores brillantes en su edad adulta advierte a los depredadores de su toxicidad. Su piel está impregnada batraciotoxina, su veneno es el más potente producido por un animal conocido hasta el momento, este causa fallos en las conexiones neuronales encargadas de la contracción de los músculos, se producen espasmos involuntarios y dificultad para respirar.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Distribución geográfica</h5>
                        <p>Es una especie endémica de Colombia, viven en una pequeña área de la selva tropical de la costa del Pacífico Colombiano; Se tiene registro de algunos especímenes en Panamá, en la región selvática húmeda de Darién. Se encuentran en una altitud entre los 100 y 200 m. Aunque es una especie abundante, la destrucción de la selva tropical ha hecho que sea catalogada como  especie amenazada.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Se presume que su alimentación es crucial para la creación de sus toxinas, en estado de cautiverio, no son capaces de producirlas. Su dieta se basa en insectos y pequeños invertebrados como las termitas y escarabajos son comunes.                    
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Llegan a su madurez sexual alrededor del  año de edad. Durante el apareamiento, mientras salen de los huevos, el macho los sube a su espalda y procede a llevarlos a un lugar seguro en el agua. La hembra espera junto a los huevos que no han completado el proceso todavía. Los renacuajos sobreviven por sí mismos en cuanto el macho los coloca en el agua. En su hábitat natural pueden vivir hasta 5 años.                     
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_P.innerHTML = textoDescription_P2;
            break;
        default:
            let textoDescription_P4 = `
            <div class="foto-animal">
                <img src="img/pacifica/1.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/pacifica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/pez.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                    <img src="img/oceanoP.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h3>Tiburón martillo</h3>
                            <h4 class="title-pacifico">Sphyrna lewini </h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable2.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El nombre científico de este animal es Sphyrna lewini habita ambas costas colombianas, su estado es vulnerable pues sus aletas, carne y demás subproductos son apetecidos en pesquerías  artesanales e industriales, aún no se ha realizado un sondeo de los ejemplares existentes pero se estima un descenso considerable en la población debido a la disminución de sus avistamientos en áreas protegidas. A pesar de que los hábitats del pacifica colombiano parecen propicios para la especie, los registros son escasos, lo que puede estar asociado al descenso en las biomasas de tiburones entre 1970-2000 y a la disminución en general en la proporción de condrictios respecto a peces óseos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Es una especie que en distintos estadios de su vida varía su localización. En la región pacífica los más pequeños prefieren resguardarse en las costas protegidas y los manglares, en cambio los adultos prefieren permanecer en el océano, a una profundidad cercana a los 275 m.
                        Estos animales presentan comportamiento circadiano, permaneciendo cerca de la isla durante las horas del día por encima de la termoclina, y alejándose en horas de la noche muy probablemente para alimentarse, aunque esto aún no se confirma. Sphyrna lewini realiza migraciones entre áreas del Pacífico oriental tropical, donde individuos marcados en el SFF de Malpelo fueron registrados en la Isla del Coco y el archipiélago de las Galápagos. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>El cuerpo es alargado y fusiforme (en forma de huso), la cabeza tiene expansiones cefálicas en forma de martillo y cinco escotaduras; las narinas y los ojos están ubicados en los extremos de la cabeza; las fosas nasales poseen orificios prenarinales, 137 desarrollados; boca redondeada. La primera aleta dorsal es alta y moderadamente dirigida hacia atrás, la segunda aleta dorsal es pequeña y ubicada detrás del nacimiento de la aleta anal. La base de la aleta anal es más ancha que la base de la segunda aleta dorsal; las aletas pectorales son cortas y anchas, y sus aletas pélvicas presentan el borde posterior casi recto. El dorso es gris café y el vientre pálido; en la juventud las aletas tienen puntas oscuras en la parte ventral. Alcanzan hasta 4.2 m de longitud.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Los tiburones martillo son ovovivíparos, dan a luz crías vivas. Son mamíferos sin embargo no poseen placenta, las crías se desarrollan dentro del útero en membranas individuales, estos se sujetan a la yema y le extraen los nutrientes hasta que nacen.
                        El alumbramiento tiene lugar cuando han alcanzado la edad o el tamaño suficiente para sobrevivir solos. La gestación dura de ocho meses a 16 meses. Las camadas son de  15 y 31 crías que nacen con un tamaño de 42 a 55 cm de longitud.                        
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_P.innerHTML = textoDescription_P4;
      }
    // $modal_P.innerHTML = textoDescription_P;
    $modal_P.style.display='block' ;
    $closeP.style.display='block' ;
    $modal_P.style.animation='fadeIn .5s forwards';
    $closeP.style.animation='fadeIn .5s forwards';
 })
 
  $closeP.addEventListener('click',()=>{
     $modal_P.style.animation='fadeOut .5s forwards';
     $closeP.style.animation='fadeOut .5s forwards';
  })
