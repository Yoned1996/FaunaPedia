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
            let texto = `<h4 class="title-caribe">El mono tití cabeciblanco</h4>`
            $nameAnimal_C.innerHTML = texto;
            break;
        case "c-2":
            let texto5 = `<h3>Guacamaya</h3>
                          <h4 class="title-caribe">Ara macao</h4>`
            $nameAnimal_C.innerHTML = texto5;
            break;
        case "c-3":
            let texto2 = `<h4 class="title-caribe">Flamenco</h4>`
            $nameAnimal_C.innerHTML = texto2;
            break;
        default:
            let texto4 = `<h3>El tigrillo</h3>
            <h4 class="title-caribe">Leopardus tigrinus</h4>`
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
            let textoDescription_C =
            `
            <div class="foto-animal">
                <img src="img/caribe/2.jpg" alt="" class="picture-animal">
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
                            <h4 class="title-caribe">El mono tití cabeciblanco</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>Del tamaño de una ardilla, el tití cabeciblanco es un primate del Nuevo Mundo que se caracteriza por su mechón de pelo blanco, que le da su nombre.  Su rostro está adornado con una banda supraorbitaria grisácea o blanquecina, con una franja grisácea en el hocico a cada lado de la boca. Hay una cuña media frontal blanca en forma de cresta. La superficie dorsal del cuerpo es principalmente negra o marrón, mientras que el resto del cuerpo, brazos y piernas son predominantemente blancas. Machos y hembras pesan casi lo mismo, aproximadamente 404-417g en el medio silvestre y unos 565-700 g en cautiverio.   La longitud rodilla-talón  7,26 cm y la longitud de la cola a la cabeza  23,07 cm parecen ser similares para titíes silvestres y en cautiverio.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat del tití cabeciblanco</h5>
                        <p>El tití cabeciblanco tiene una distribución muy limitada en el noroeste de Colombia entre el río Atrato y el río Magdalena, en los departamentos de Atlántico, Bolívar, Sucre, Córdoba,  y el Noreste Antioqueño, desde el nivel del mar hasta los 1500 metros.   El tití cabeciblanco se encuentra en las regiones de bosque húmedo tropical en alturas comprendidas entre los 200-1000 m, donde la precipitación anual es entre 2000-4000 mm. Las poblaciones también se producen en bosque seco tropical, con bajas precipitaciones estacionales.</p>
                    </div>
                    <div class="info">
                        <h5>Vocalizaciones del tití cabeciblanco</h5>
                        <p>Los titíes cabeciblancos pueden producir más de 40 vocalizaciones diferentes! Estos primates utilizan estas vocalizaciones para comunicarse con su grupo familiar, para defender su territorio de otro grupos familiares vecinos, para hablar sobre comida, y mucho más.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación del tití cabeciblanco</h5>
                        <p>La dieta de los titíes cabeciblancos es estacional, y correlacionada con la época de lluvias, cuando la mayoría de los árboles, y plantas en general, fructifican.
                        Cuando las frutas escasean, la proporción de resinas, néctares e insectos, aumenta en la dieta de estos pequeños primates.
                        Siendo las frutas la mayor porción de su dieta, los titíes cabeciblancos podrían ser un agente muy importante de dispersión de semillas para los árboles de los bosques en los que habitan. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>El tití cabeciblanco en peligro de extinción</h5>
                        <p>El tití cabeciblanco (Saguinus oedipus) es uno de los primates en mayor peligro de extinción en el mundo. Esta especie fue declarada En Peligro (EN) en 1973, tras la exportación de entre 20.000 y 40.000 titíes  a los Estados Unidos para su uso en investigaciones biomédicas (Hernández-Camacho y Cooper 1976; Clapp et al. 1982). A finales de los años 70 y durante gran parte de los años 80, se encontraron titíes cabeciblancos que desarrollaron, espontáneamente, adenocarcinoma de cólon. Por lo anterior, los titíes cabeciblancos sirvieron como el principal modelo para el estudio de esta enfermedad, por gran parte de esa década. Hoy en día la mayor amenaza para la supervivencia del tití es la extensiva deforestación de su hábitat para actividades agropecuarias y para explotación de madera para combustible y construcción , además de su captura para el comercio ilegal de especies silvestres como mascotas en Colombia (Mast & Patiño 1988). El comercio ilegal de titíes es aún una gran preocupación,  a pesar de las leyes nacionales e internacionales que prohíben ese tipo de actividades. 

                        Durante los años 2005-2006, el Proyecto Tití llevó a cabo un censo para estimar el número y estado de conservación de las poblaciones silvestres de titíes cabeciblancos dentro de su área histórica de distribución en el noroeste de Colombia.  Los resultados de este censo indicaron que el tití cabeciblanco  ha sido severamente afectado por la destrucción de su hábitat natural. Gracias a la información generada a través del censo antes mencionado, y a las evidentes amenazas para la supervivencia del tití relacionadas con la pérdida de hábitat, el Grupo de Especialistas en Primates recomendó a la UICN (Unión Internacional para la Conservación de la Naturaleza) que el tití cabeciblanco fuera clasificado como una especie  en peligro crítico de extinción, recomendación que fue adoptada en el año 2008. Posteriormente, el Proyecto Tití presentó al Ministerio de Ambiente y Desarrollo Sostenible de Colombia los resultados del censo, y fue igualmente aceptada la recomendación de clasificar al tití como especie en peligro crítico, lo cual fue formalmente adoptado por el gobierno colombiano en el año 2010.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_C.innerHTML = textoDescription_C;
            break;
        case "c-2":
            let textoDescription_C5 = `
            <div class="foto-animal">
                <img src="img/caribe/3.jpg" alt="" class="picture-animal">
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
                            <h3>Guacamaya</h3>
                            <h4 class="title-caribe">Ara macao</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>La Guacamaya Bandera (Ara macao), conocida en algunos países como Guacamaya Mocao, es una especie de ave perteneciente  a la familia de los psitácidos, también reconocida por otros nombres como lapa colorada o lapa roja, scarlet macao, guacamaya colombiana, guacamaya roja, guacamaya tricolor y guacamaya escarlata. Esta ave es una entre nueve especies del género Ara que se caracteriza por ser  de gran tamaño, alcanzando una longitud de 90 centímetros y con un peso de 1 kilogramo.
                        Corresponde  a la familia de los psitácidas o «loros verdaderos», quienes se reconocen por sus picos curvos y su tamaño del cráneo, lo que lo hace ser poseedor de una inteligencia mayor a las demás aves.                      
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características de la guacamaya</h5>
                        <p>Dentro de las características de la guacamaya roja tenemos que esta especie de ave se distingue por poseer un plumaje lleno de hermosos y  llamativos colores,  pero es el rojo escarlata el que predomina y lo complementan algunas plumas azules y amarillas en las alas y la cola.  Sus ojos se encuentran colocados de forma lateral en la cabeza, y, aunque la parte expuesta de la córnea es redonda y en apariencia pequeña, su globo ocular es grande.
                        Posee un área de piel entre blancuzca y rosada alrededor de los ojos, aunque en realidad está en parte cubierta por algunas plumas pequeñas de color rojizas  Sus piernas son pequeñas y fuertes, pues cuenta con desarrollados músculos flexores y tendones, lo que le permite mantenerse erguido.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación de la guacamaya</h5>
                        <p>En cuanto a la alimentación de la guacamaya, esta ave  se adecua a una gran variedad de alimentos, aunque prefiere principalmente los granos.  Por lo tanto,  las semillas forman parte importante de su dieta, en comparación por ejemplo con  las frutas, también se alimenta  de nueces, néctar, insectos, flores o incluso otras partes de la planta, como las hojas y el tallo, complementandolo con minerales que neutralizan algunas toxinas existentes en sus alimentos, que son perjudiciales y difíciles de digerir.
                        Por lo fuerte de su pico, puede abrir y alimentarse de semillas y nueces de ciertas palmas.  En la temporada seca tienen preferencia por los frutos de la ceiba y el mijao  mientras que en la temporada húmeda destaca el ojoche. Tiene con frecuencia necesidades de alimentarse, por lo cual se desplaza constantemente entre las zonas cercanas, para buscar comida, comenzando desde el amanecer.
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat de la guacamaya</h5>
                        <p>La guacamaya suele realizar sus vuelos de manera constante, es un ave que pasa la mayoría de su tiempo en  las copas de los árboles. El hábitat de la guacamaya es en selvas  medianas, altas, tropicales de tierras bajas, bosques abiertos, llanos húmedos y sabanas, tanto en las zonas montañosas como en aquellas cercanas a las costas de los océanos Pacífico y Atlántico.
 
                        Igualmente, de acuerdo con el ecosistema de la guacamaya roja esta se desplaza según las estaciones en busca de alimentos. En todo caso frecuenta la parte más alta de los bosques y la más iluminada. En estas zonas suele descansar, alimentarse y formar dormideros comunes, además el permanecer en las parte más alta de los árboles le facilita levantar los grandes vuelos que los caracteriza. Este tipo de actividades las realiza en grupo ya que habitualmente viven en parejas o grupos familiares de 3 a 4 ejemplares.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_C.innerHTML = textoDescription_C5;
            break;
        case "c-3":
            let textoDescription_C2 = `
            <div class="foto-animal">
                <img src="img/caribe/4.jpg" alt="" class="picture-animal">
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
                            <h3>Flamenco</h3>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>Es una ave muy grande que mide entre 125 y 160 cm, la envergadura de sus alas mide entre 140 y 165 cm. Pesa entre 2.2 y 3.4 Kg. Es un ave que se caracteriza por su inconfundible color rosado y un intenso color rojo en sus alas, las cuales tienen negro en las plumas primarias y secundarias. Tiene un pico peculiar tomando la forma de una urna doblada hacia abajo, posee una lengua grande, espesa y carnosa. Tiene ojos pequeños y un cuello sumamente largo, debido al tamaño y ubicación de sus vértebras tiene una gran flexibilidad. Posee patas largas, pies palmeados con dedos cortos. En cuanto a los juveniles presentan un blanco grisáceo con rayas oscuras en la espalda y las alas.                      
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características del flamenco</h5>
                        <p>La taxonomía de este grupo ha tenido mucha discusión. Se le consideraba como una cigüeña, pero se encontró que su hábitos eran distintos. Posteriormente se le colocó entre los patos por la similitud de las mandíbulas. Más adelante se le colocó en las Ciconiiformes, un grupo que incluía las garzas, cocleares, cigüeñas, ibis y espátulas por sus características. Por último se le separó como un orden aparte y una nueva familia, Phoenicopteriformes y Phoenicopteridae, respectivamente.
                        En el momento de reproducirse, pueden agruparse cientos de individuos para hacer una danza característica, mantienen con la cabeza levantada la mirada es dirigida de un lado, se llaman la atención mediante movimientos con su picos y suave sonidos, algunas veces se tocan entre sí, tuercen el cuello y extienden sus alas. Esta particular danza hace que el color rojo y rosado resalta fuertemente.
                         
                        Es una ave de vuelo largo y sostenido, y muy gregaria. Las bandadas en vuelo forman agrupaciones  en forma de "V" como en otras aves acuáticas. Al momento de estar en vuelo tienen su cuello y patas estiradas, lo que permite observar su gran longitud.
                        Su curioso pico es fundamental para su alimentación, le permite recolectar todo tipo de comida. Posee una mandíbula muy grande en comparación con una maxila pequeña y aplanada que puede moverse libremente. Su lengua grande, espesa y carnosa tiene dos hileras longitudinales y paralelas de laminillas que funcionan como colador para separar el fango y el agua de los animales que logra recolectar.
                        El flamenco puede vivir hasta 40 años. Gracias a esta longevidad en la religión judía tenían una tradición la cual decía que en el jardín del Edén el Flamenco fue el único animal que no comió del fruto, huyendo de la tentación y así preservando el don de de la vida eterna. También en el cristianismo representaba un símbolo de inmortalidad y de resurrección física.                         
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat del flamenco</h5>
                        <p>En colombia su distribución se concentra en los humedales costeros de los departamentos de Magdalena y La Guajira. Dada su alta movilidad y por ser una especie sujeto de tráfico de fauna, se han registrado individuos en regiones que no forman parte de su distribución original, como el valle del río Cauca, la Costa Pacífica de Nariño  interior del país.
                        Habita principalmente en aguas saladas (el flamenco es un ave que resiste grandes proporciones de salinidad), lagos poco profundos, donde se les facilita estar de pie, donde hay gran cantidad de fango y que en los alrededores no haya vegetación ni animales. Puede beber y bañarse en aguas dulces, sin embargo la mayoría del tiempo lo hace en aguas salobres.                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación del flamenco</h5>
                        <p>Se alimenta tanto de noche como de día, permaneciendo de pie con las patas remueve el fango haciendo un movimiento como de pasos de soldado, y con la cabeza sumergida hace movimientos en forma circular succionando todo lo que se encuentre abajo y desechando lo que no le sirva. Se alimenta de algas verdes, diatomeas, insectos, moluscos y una gran variedad de protozoos.
                        </p>
                    </div>

                    <div class="info">
                        <h5>Reproducción del flamenco</h5>
                        <p>Anida en grandes colonias de la misma especie. Construyen los nidos en charcas poco profundas y de gran cantidad de barro, que  van recogiendo y formando una especie de pirámide con una ondulación en la cima, donde colocan los huevos. Estas "pirámides" tienen entre 20 y 45 cm de altura con una base muy ancha entre 50 y 80 cm. Al momento de colocarlos e incubarlos no se sientan sobre ellos, sino que se recuestan sobre ellos estando de pie. La nidada consta de 1-2 huevos, y la incubación, realizada por ambos padres, toma entre 28 y 32 días.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Estado de conservación del flamenco</h5>
                        <p>En Colombia se le considera una especie Vulnerable, por la pérdida y fragmentación de su hábitat y una extensión de presencia reducida (13.000 Km2). Así mismo porque su población es pequeña (cerca de 5800 individuos estimados en 1997). 
                        Adicionalmente, sus poblaciones son presionadas por el tráfico de fauna. Esta especie ha sido incluída en el apéndice II de Cites (Convención sobre el Comercio Internacional de Especies amenazadas de Faun ay Flora Silvestres), que establece que su comercio debe controlarse a fin de evitar una utilización incompatible con su supervivencia.
                         
                        Sus poblaciones se encuentran bajo protección dentro del Santuario de Fauna y Flora Los Flamencos,  pero se recomienda que la protección se extienda a otras áreas de concentración de la especie en La Guajira, como Musichi.                       
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_C.innerHTML = textoDescription_C2;
            break;
        // case "c-4":
        //     let textoDescription_C3 = `
        //     <div class="foto-animal">
        //         <img src="img/caribe/5.jpg" alt="" class="picture-animal">
        //         <div class="head-foto-animal">
        //             <img src="img/logo.png" alt="">
        //             <img src="img/caribe.png" alt="">
        //         </div>
        //         <div class="footer-foto-animal">
        //             <img src="img/rasgos.png" alt="">
        //             <img src="img/mamifero.png" alt="">
        //             <img src="img/carnivoro.png" alt="">
        //             <img src="img/habitad.png" alt="">
        //         </div>
        //     </div>
        //     <div class="info-animal">
        //         <div class="total-info animal">
        //             <div class="head-info">
        //                 <div class="title-info">
        //                     <h3>Caimán</h3>
        //                     <h4 class="title-caribe">caiman crocodilus</h4>
        //                 </div>
        //                 <div class="estado">
        //                     <img src="img/vulnerable.png" alt="">
        //                 </div>
        //             </div>
        //             <div class="info">
        //                 <p>El caiman crocodilus es una especie de reptil integrado en el orden Crocodylia (crocodilios). Adquiere un tamaño en edad adulta de entre 1.5 a 2.5 metros y un peso medio de unos 40 Kg. Su coloración es verde oliva a amarronada, con rayas verticales oscuras e incluso amarillentas. El hocico es alargado sin apreciarse el cuarto diente inferior cuando permanece con sus mandíbulas cerradas. Los ojos son grandes y se presentan insertados en lo alto de la cabeza, con presencia de una cresta ósea entre ambos, de ahí su denominación común: caimán de anteojos, igualmente es conocido como caimán común, dado que en antaño se consideraba una especie abundante y con impacto positivo para el hombre, en la actualidad este reptil precisa de monitoreos para conocer mejor su densidad poblacional.                  
        //                 </p>
        //             </div>
        //             <div class="info">
        //                 <h5>Características del caimán</h5>
        //                 <p>Se han descrito como reptiles solitarios que se vuelven grupales una vez comienza la época de reproducción. Los machos más grandes son los que tienen mayores oportunidades de acceder a las hembras. Se tornan bastante agresivos en su etapa de apareamiento. Los caimanes comunes prefieren alimentarse en el transcurso de la noche, durante el día permanecen tomando el sol o sumergidos en el agua en horas de mayor calor, aunque también se describen como reptiles de hábitos diurnos.                         
        //                 </p>
        //             </div>
        //             <div class="info">
        //                 <h5>Alimentación del Caimán</h5>
        //                 <p>La alimentación del caimán de anteojo es muy variada, comen desde invertebrados a reptiles, anfibios, aves, peces y mamíferos. Igualmente no desprecian la carroña, incluso si escasea la comida pueden darse casos de canibalismo, no obstante, no es un comportamiento muy normal en el caimán común.                        
        //                 </p>
        //             </div>
        //             <div class="info">
        //                 <h5>Hábitat del caimán</h5>
        //                 <p>El caimán de anteojos o común, caiman crocodilus, es un habitante de agua dulce, concretamente vive en ríos, lagos, estanques y pantanos, aunque también puede frecuentar agua salada, especialmente humedales y estuarios. Se le puede avistar tanto en aguas profundas como aquellas con menos nivel de profundidad.
        //                 </p>
        //             </div>

        //             <div class="info">
        //                 <h5>Reproducción del caimán</h5>
        //                 <p>La reproducción es ovípara y de fecundación interna, los huevos son enterrados entre maleza y hojarasca en cavidades terrestres previamente confeccionadas por los reproductores. Ambos se involucran en el cuidado de los huevos y las crías, especialmente para evitar que sean depredados. La temperatura en la incubación determina el sexo de las crías, a mayor temperatura habrá mayor número de ejemplares masculinos. La puesta se compone de entre 10 a 30 huevos y la incubación tiene un promedio de entre 60 a 100 días. Son adultos sexualmente a partir de los 4 años de edad.
        //                 El periodo óptimo para la reproducción del caimán de anteojos comienza a partir de abril, generalmente coincide con la llegada de las lluvias.
        //                 </p>
        //             </div>
        //             <div class="info">
        //                 <h5>Estado de conservación del flamenco</h5>
        //                 <p>En Colombia se le considera una especie Vulnerable, por la pérdida y fragmentación de su hábitat y una extensión de presencia reducida (13.000 Km2). Así mismo porque su población es pequeña (cerca de 5800 individuos estimados en 1997). 
        //                 Adicionalmente, sus poblaciones son presionadas por el tráfico de fauna. Esta especie ha sido incluída en el apéndice II de Cites (Convención sobre el Comercio Internacional de Especies amenazadas de Faun ay Flora Silvestres), que establece que su comercio debe controlarse a fin de evitar una utilización incompatible con su supervivencia.
                        
        //                 Sus poblaciones se encuentran bajo protección dentro del Santuario de Fauna y Flora Los Flamencos,  pero se recomienda que la protección se extienda a otras áreas de concentración de la especie en La Guajira, como Musichi.                       
        //                 </p>
        //             </div>
        //         </div>
        // </div>
        //     `;
        //     $modal_C.innerHTML = textoDescription_C3;
        //     break;
        default:
            let textoDescription_C4 = `
            <div class="foto-animal">
                <img src="img/caribe/1.jpg" alt="" class="picture-animal">
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
