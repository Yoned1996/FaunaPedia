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
            let texto = `<h4 class="title-andina">Cóndor de los Andes</h4>`
            $nameAnimal_AN.innerHTML = texto;
            break;
        case "an-2":
            let texto5 = `<h3>Venado Coliblanco</h3>
                            <h4 class="title-andina">Odocoileus virginianus</h4>`
            $nameAnimal_AN.innerHTML = texto5;
            break;
        case "an-3":
            let texto2 = `<h4 class="title-andina">Colibri delphinae</h4>`
            $nameAnimal_AN.innerHTML = texto2;
            break;
        default:
            let texto4 = `<h3>Oso de Anteojos</h3>
            <h4 class="title-andina">Tremarctos ornatus</h4>`
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
    // let textoDescription_AN = `<h3>nombre animal</h3>${$nameAnimal_AN.getAttribute('id')}`;
    let idAN = $nameAnimal_AN.getAttribute('id');
    switch(idAN) {
        case "an-1":
            let textoDescription_AN = `
            <div class="foto-animal">
                <img src="img/andina/2.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/andina.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/ave.png" alt="">
                    <img src="img/carroñero.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h4 class="title-andina">Cóndor de los Andes</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>Distintivo en las alturas, el cóndor de los Andes es símbolo nacional de Perú, Bolivia, Chile, Argentina, Ecuador y Colombia. Su importancia en el folclore de las zonas andinas es tal que representa a los pueblos indígenas ante el mundo y sus mitos, leyendas y forma de vida.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p> La majestuosidad de esta ave se revela al surcar el cielo pues su vuelo llega a alcanzar más de 6 mil metros de altura. Se distingue por su brillante plumaje negro azulado y una “gargantilla” de plumas blancas alrededor de la base del cuello. La cabeza está desprovista de plumas, debido probablemente a una adaptación relativa a la higiene, ya que esta parte de su cuerpo es más difícil de limpiar después de haberse alimentado con carroña. Ostenta unas patas bastante grandes y garras fuertes y afiladas que le permiten desgarrar su alimento e incluso romper pequeños huesos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Su dieta está basada en la carroña y en ocasiones de especies pequeñas o con poco tiempo de vida. Si se encuentra en alguna zona despoblada de alimento puede viajar más de 200 kilómetros al día para su búsqueda.

                        Su comida favorita incluye los cadáveres de mamíferos de gran tamaño como caballos, cabras, llamas, alpacas, venados, ñandúes, ballenas, etc. Para conseguir la carroña detecta el olor de ésta que libera mercaptano de etilo, el gas que despiden los cuerpos de los animales en descomposición. Si se dispone a cazar, las presas serán conejos y roedores.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Está presente en la zona de las cordilleras de los Andes de América del Sur y las montañas Santa Martha, en Perú, Bolivia, Paraguay, Colombia, Venezuela, Ecuador, Chile y Argentina. Habita los acantilados y las cuevas de las altas montañas, pastizales y hasta desiertos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p> Es un animal monógamo y por lo tanto, conserva una única pareja. Se ha descubierto que para cortejar a la hembra el macho obsequia a la hembra pequeños trozos de ramitas y hojas que luego ambos se colocan debajo de las alas. Este curioso comportamiento sólo se ha visto en cóndores que viven en cautiverio y no hay registros detallados de algo así en cóndores en libertad.

                        El cóndor de los Andes macho vive en el nido con la hembra hasta dos meses antes de aparearse. Una vez realizada la cópula la hembra  pone sólo un huevo que ambos padres se turnan para cuidar durante un período de dos meses. Cuando el polluelo sale del huevo los padres le proveen los cuidados necesarios y es así hasta que tiene dos años, edad en la que el joven cóndor es ya del tamaño de sus progenitores.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p> Está clasificado como “Casi Amenazado” por la lista roja de la Unión Internacional para la Conservación de la Naturaleza (UICN). Como se ve, el índice de natalidad es realmente muy bajo y se reduce aún más con amenazas como los depredadores naturales que se alimentan de los huevos y principalmente por la caza “deportiva”.

                        No obstante se están haciendo intentos por aumentar el número de cóndores de los Andes mediante campañas de educación para impedir la cacería y programas de crianza en cautiverio que devuelven a las aves a su hábitat natural tiempo después.                        
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AN.innerHTML = textoDescription_AN;
            break;
        case "an-2":
            let textoDescription_AN5 = `
            <div class="foto-animal">
                <img src="img/andina/3.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/andina.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/mamifero.png" alt="">
                    <img src="img/herbivoro.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h3>Venado Coliblanco</h3>
                            <h4 class="title-andina">Odocoileus virginianus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/preocupacion-menor.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El venado cola blanca (Odocoileus virginianus) especie que prefiere habitar en lugares semiabiertos, con arbustos y matorrales dispersos. No suele hallarse en sabanas completamente expuestas ni en el interior de selvas y bosques densos. Es un animal bastante adaptable, que ha logrado extenderse desde Norteamérica hasta las regiones tropicales de Suramérica. Dentro de este amplio rango geográfico se encuentra en bosques caducifolios, matorrales de montaña, orillas de selvas tropicales y bosques de galería y en los páramos andinos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p> El pelaje del ciervo es un color marrón rojizo en la primavera y el verano y se convierte en un color gris-marrón durante el otoño y el invierno. El ciervo se puede reconocer por la parte inferior de color blanco característico de su cola. Su cola se elevará cuando está alarmado visando a los otros ciervos. Los esfuerzos de conservación más fuertes han permitido del ciervo de cola blanca que crecen dentro de los confines de la estación. La Cola blanca de venado es horizontal, las pupilas delgadas permiten una buena visión nocturna y visión del color durante el día. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Los venados naturalmente comen menos en los meses de invierno, debido a que los alimentos no son suficientes en esta época del año, esto provoca entonces que se vuelvan menos activos con el objetivo de ahorrar energía. Algunas personas asumen durante el invierno es más difícil ver a un ciervo por las bajas temperaturas, pero la verdadera razón es que sus fuentes de alimento escasean. Esto no quita que también traten de protegerse de los fuertes vientos en un refugio.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Los ciervos son capaces de vivir en una amplia gama de hábitats en todo el planeta. Algunos de ellos viven en las llanuras, otros en la tundra. Puede que le sorprenda saber que hay especies de ciervos que también viven en las montañas y en las selvas tropicales. La mayoría de ellos tienden a moverse alrededor de las praderas y otras zonas donde puedan estar bien escondidos al mezclarse con el entorno, como los bosques. Algunos incluso viven en zonas pantanosas en las que no se esperaría encontrarlos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p> Los ciervos tienen un período de apareamiento que se extiende  desde octubre hasta enero. En el resto del año, los machos no interactúan con las hembras, sin embargo, viajarán largas distancias durante la temporada de celo para poder encontrarlas y correrán el riesgo de ser vistos por los cazadores al permanecer en áreas muy descubiertas.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p> comprometidos con la conservación de la fauna y flora, la Corporación Autónoma Regional de Chivor (Corpochivor) ha implementado acciones para proteger y conservar la vida de una de las especies más emblemáticas de la región, el Venado Cola Blanca (Odocoileus goudotii). En los últimos meses diferentes llamados por parte de la comunidad de la vereda Montoya, en el municipio de Ventaquemada, han alertado a la corporación de la presencia de este mamífero en las zonas rurales. El venado cola blanca, especie perteneciente de los páramos, desciende de las montañas en busca de alimento.                         
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AN.innerHTML = textoDescription_AN5;
            break;
        case "an-3":
            let textoDescription_AN2 = `
            <div class="foto-animal">
                <img src="img/andina/4.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/andina.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/ave.png" alt="">
                    <img src="img/herbivoro.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h4 class="title-andina">Colibri delphinae</h4>
                        </div>
                        <div class="estado">
                            <img src="img/preocupacion-menor.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El colibrí es un ave pequeña originaria de América. En la zona andina viven más de 100 especies de colibríes.

                        Es la única ave en el planeta que puede volar hacia atrás. En la cultura andina tiene simbolismos variados. Por ejemplo, en Perú simboliza la resurrección.
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p> El tamaño del ave es de 11 a 12 cm, el macho pesa 6,9 g y la hembra pesa 6,1 g. Es un colibrí grande y opaco, tiene el pico relativamente corto (18 mm) y robusto de color negro, las patas son de color gris oscuro; el plumaje es de color marrón grisáceo con un parche de color rufo (1) con barras negruzcas en la rabadilla, los auriculares (2) son de color violeta iridiscente, la garganta es verde opaca bordeada a los lados por una estría malar (3) de color blanco sucio y la cola es de color verde bronce con una banda subterminal morena.
                        El juvenil (4) tiene las plumas de la espalda con bordes color canela a rufo, los auriculares son de gris oscuro y no color azul violeta como en el adulto.
                        (Hilty&Brown, 1986, 2001; Stiles & Kirwan, 2016)
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Colibri delphinae se alimenta de néctar de pequeñas flores de árboles,
                        Arbustos y epífitas y tiende a favorecer las flores con muy alto contenido de azúcar. Las aves son inclinados a proteger agresivamente las áreas en las que se encuentran estas flores mientras que estas flores tienden a depender de las aves para la polinización ya que generalmente son flores tubulares que no son polinizadas por cualquier insecto (fig. 3). Para alimentarse de estas flores, el pico delgado y recto es útil. los El colibrí puede verse flotando con sus colas hacia arriba en un ángulo o incluso puede verse. Colgando de las flores (Johnson, 2016). También puede avivar insectos durante el vuelo, que sirve como
                        Una fuente de proteína. Una hembra que está anidando puede atrapar hasta 2000 insectos en un día. Esta especie también se ve visitando comederos de colibríes locales, baños de aves e incluso fuentes de agua. Sin embargo, a veces aparecen más enfocados en el territorio que alimentándose en estas áreas (Hilty, 2010).
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>En general, se encuentra en alturas medias en la selva tropical, en
                        crecimiento secundario y en áreas abiertas como plantaciones de café. Se puede encontrar en alturas entre 400-1600m, pero puede moverse a tierras bajas fuera de la temporada de reproducción (Johnson, 2016). También puede se puede encontrar en niveles más bajos en los bordes y los claros donde se alimenta 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p> El período de reproducción suele ser en las temporadas húmedas tardías a tempranas secas, los meses pueden variar según el país (Stiles y Kirwan, 2017). Los machos no juegan ningún papel en la anidación. Las hembras incuban los huevos solos mientras que los machos defienden su territorio. El embrague medio es pequeño, compuesto por dos huevos blancos. Los pollitos son criados durante aproximadamente una o dos semanas y son incluso abandonados  después de unos 12 días.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AN.innerHTML = textoDescription_AN2;
            break;
        default:
            let textoDescription_AN4 = `
            <div class="foto-animal">
                <img src="img/andina/1.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/andina.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/mamifero.png" alt="">
                    <img src="img/omnivoro.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h3>Oso de Anteojos</h3>
                            <h4 class="title-andina">Tremarctos ornatus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El oso de anteojos es un úrsido poco común, pues es la única especie de oso nativo de Sudamérica, y además, es el segundo mamífero más grande de esta parte del continente. Su rasgo más característico es el patrón de color alrededor de sus ojos, que puede asemejarse a unos anteojos.                     </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p> Los osos de anteojos son especies relativamente pequeñas en comparación con otras especies de oso. Los machos adultos pueden variar en peso desde 220 a 440 libras, mientras que las hembras de 77 a 181 libras. Su longitud puede variar desde 120 a 200 cm. Los machos son un tercio más grandes que las hembras. Tienen las garras largas, diseñadas trepa en árboles altos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Los osos de anteojos son omnívoros. Son capaces de comer con éxito plantas residentes en el medio silvestre. Algunas de estas plantas incluyen palmeras, cactus, o bulbos de las orquídeas. Su dieta se compone principalmente de plantas vivas, pero comerán carne de vez en cuando también.
                        Durante ciertas épocas del año, cuando varios árboles ofrecen fruta, se alimentarán de estas. Pueden ser demasiado codiciosos, y dormir en un árbol que da frutos para poder seguir alimentándose después de haber descansado.
                        
                        También se alimentan de miel, caña de azúcar y maíz, siendo los animales de presa, una muy pequeña parte de su dieta.
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p> Los osos de anteojos son la única especie de osos que viven en América del Sur. Se han identificado alrededor de Venezuela, Colombia, Ecuador, Bolivia y Perú.

                        Son capaces de desarrollarse con éxito variedad de condiciones que incluyen zonas forestales, matorrales desérticos y pastizales de montañas, sin embargo, buscan principalmente árboles, donde se construyen una plataforma para descansar y almacenar los alimentos.
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>  Estos osos estarán listos para aparearse alrededor de los cuatro años de edad. No se sabe cuando se aparean o cuánto tiempo es el período de gestación. Las hembras crearán un nido, donde darán a luz a sus crías. Las crías nacen alrededor de febrero, las madres son muy protectoras de sus crías y el tamaño de la camada es, por lo general de dos cachorros.
                        </p>
                    </div>

                    <div class="info">
                        <h5>Conservación</h5>
                        <p> Debido a la destrucción de los bosques, la agricultura y la caza furtiva, se cree que el número de los osos de anteojos ha disminuido en los últimos 20 años. La falta de conocimiento sobre su distribución y estado, han sido el mayor obstáculo para protegerlo

                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AN.innerHTML = textoDescription_AN4;
      }
    // $modal_AN.innerHTML = textoDescription_AN;
    $modal_AN.style.display='block' ;
    $closeAN.style.display='block' ;
    $modal_AN.style.animation='fadeIn .5s forwards';
    $closeAN.style.animation='fadeIn .5s forwards';
 })
 
  $closeAN.addEventListener('click',()=>{
     $modal_AN.style.animation='fadeOut .5s forwards';
     $closeAN.style.animation='fadeOut .5s forwards';
  })
