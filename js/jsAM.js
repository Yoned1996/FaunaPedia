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
            let texto2 = `<h3>Perezoso de tres dedos</h3>
            <h4 class="title-amazonica">Bradypus tridactylus</h4>`
            $nameAnimal_AM.innerHTML = texto2;
            break;
        case "am-2":
            let texto3 = `<h3>Manatí del Amazonas</h3>
            <h4 class="title-amazonica">Trichechus inunguis</h4>`
            $nameAnimal_AM.innerHTML = texto3;
            break;
        case "am-3":
            let texto4 = `<h3>Delfín rosado</h3>
            <h4 class="title-amazonica">Inia geoffrensis</h4>`
            $nameAnimal_AM.innerHTML = texto4;
            break;
        default:
            let texto5 = `
            <h3>Anguila Eléctrica</h3>
            <h4 class="title-amazonica">Electrophorus electricus</h4>
            `
            $nameAnimal_AM.innerHTML = texto5;
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
    // let textoDescription_AM = `<h3>nombre animal</h3>${$nameAnimal_AM.getAttribute('id')}`;
    let idAM = $nameAnimal_AM.getAttribute('id');
    switch(idAM) {
        case "am-1":
            let textoDescription_AM = `
            <div class="foto-animal">
                <img src="img/amazonica/2.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/amazonica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/pez.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h3>Perezoso de tres dedos</h3>
                            <h4 class="title-amazonica">Bradypus tridactylus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/preocupacion-menor.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>El perezoso de tres dedos es un mamífero, del cual se han identificado hasta cuatro especies. Los perezosos son animales que se mueven muy lento, pero son agresivos y capaces de protegerse a sí mismos. Nadan muy bien y se mueven más rápido en el agua que en los árboles o en la tierra.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>Es un animal de pelaje parduzco, grisáceo y áspero con manchas blancas en el rostro y oscuras a través de las orejas y el pelaje. El pelaje puede parecer verde por la presencia de algas. Posee una cola corta y las extremidades superiores son más largas que las inferiores, cada pata posee tres dedos, de ahí su nombre.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Se alimenta de materias vegetales procedentes de sus árboles favoritos, el yagrumo (Cecropia peltata) y la ceiba (Ceiba pentandra), así como otras especies vegetales. Sin embargo, parece ser que sus hábitos alimenticios son escasamente variados. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Natural de las cuencas del río Amazonas y del Orinoco,es un animal de movimientos lentos que pasa la mayor parte de su tiempo en los árboles colgado de las ramas con la espalda en dirección al suelo, es de comportamiento diurno y nocturno; en el suelo es muy torpe, incapaz de caminar (sólo se arrastra), pero es muy buen nadador, se lo ha visto cruzando ríos.                                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Se reproducen una vez al año, dando a luz a una sola cría, la cual pasa todo el tiempo abrazada a su madre. Las crías al nacer son muy débiles y dependientes, pero al cumplir los 8 meses de vida ya pueden ser totalmente independientes y desplazarse con autonomía.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p>Se reproducen una vez al año, dando a luz a una sola cría, la cual pasa todo el tiempo abrazada a su madre. Las crías al nacer son muy débiles y dependientes, pero al cumplir los 8 meses de vida ya pueden ser totalmente independientes y desplazarse con autonomía.Tienen importancia a nivel de la cadena trófica debido a que forma parte de la alimentación de numerosos depredadores de la selva amazónica, sin embargo, se encuentran seriamente amenazados por la disminución de su hábitat y por su comercialización como mascotas, debido a que los traficantes capturan a las crías y matan a los adultos.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AM.innerHTML = textoDescription_AM;
            break;
        case "am-2":
            let textoDescription_AM5 = `
            <div class="foto-animal">
                <img src="img/amazonica/3.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/amazonica.png" alt="">
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
                            <h3> Manatí del Amazonas</h3>
                            <h4 class="title-amazonica">Trichechus inunguis</h4>
                        </div>
                        <div class="estado">
                            <img src="img/vulnerable.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>Son conocidos como manatíes (en la lengua indígena amazonicaña)o vacas marinas. La longitud del cuerpo alcanza entre 4 y 5,6-6 m, y el peso oscila entre 300 y 500 kg. Su piel es lisa, carece de pelos y es de color gris oscuro o negra, con un parche claro en el abdomen del animal. Se distinguen de los dugongos por tener una cola aplanada horizontalmente en forma de espátula, en vez de forma de media luna.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Los manatíes son herbívoros, y se alimentan de unos 60 tipos diferentes de plantas, como hojas de mangle o algas. Para ello usan el labio superior, que está dividido. Un manatí adulto puede comer normalmente hasta un 9 % de su peso (unos 50 kg) al día. Los manatíes antillanos también comen peces de las redes. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>Los manatíes amazónicos se encuentran en la cuenca del Amazonas que abarca los territorios de Brasil, Colombia, Ecuador, Guyana y Perú. Usualmente en aguas calmadas y lagos. A pesar que suele congregarse para alimentarse, normalmente puede ser caracterizado como un animal medianamente solitario con excepción de las hembras cuando se encuentran en cría.                                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Cada 2 a 5 años la hembra da a luz una cría, la cual al nacer pesa 35 kg en promedio, y mide de 90 a 120 cm de largo. La cría depende totalmente de su madre y permanece con ella por lo menos dos años. Solamente la hembra se encarga de cuidar la cría, dándole leche hasta que sus dientes estén bien formados para comer alimentos duros. Son adultos a los cuatro años y pueden vivir hasta los 80. Su reproducción es sexual con fecundación interna.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p> Los manatíes han sido cazados, principalmente por su carne y su grasa, aunque en la actualidad sus especies están protegidas.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AM.innerHTML = textoDescription_AM5;
            break;
        case "am-3":
            let textoDescription_AM2 = `
            <div class="foto-animal">
                <img src="img/amazonica/4.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/amazonica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/mamifero.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                            <h3>Delfín rosados</h3>
                            <h4 class="title-amazonica">Inia geoffrensis</h4>
                        </div>
                        <div class="estado">
                            <img src="img/extincion.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p>Aunque lleva por nombre delfín rosado del amazonas su color varía con el tiempo, al momento de nacer poseen un color gris que con la longevidad del mismo va aclarando y cambiando hasta tornarse del color rosado característico como consecuencia de la abrasión repetida de la superficie de la piel, siendo los machos son un poco más rosados que las hembras. A diferencia de los delfines oceánicos, sus vértebras cervicales no están fusionadas, permitiéndole a la cabeza una amplia gama de movimientos.
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Su dieta está compuesta por 43 especies de peces diferentes. Entre estos están las pirañas, corvinas y tetras. También consumen cangrejos y tortugas de río.
                        Diariamente consumen hasta 2.5% de su peso corporal.
                         
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p>El delfín rosado del amazonas se encuentra en casi todos los principales ríos o canales y rápidas caídas de agua, los drásticos cambios en la desembocadura de los ríos durante las diversas temporadas de lluvias y sequías pueden servir para determinar perfectamente todas las áreas que ellos pueden ocupar y la disponibilidad de alimento que puedan tener.                                    
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p> Debido a que en las aletas de los machos pueden observarse varias heridas de mordidas y abrasiones, se dice que compiten en temporadas de reproducción para determinar al ganador que tendrá el derecho de aparearse con la hembra.
                        El período de gestación dura 9-12 meses y solamente tienen una cría. El nacimiento se da en temporada de inundaciones y el recién nacido tiene un peso inicial de 80 kg. Durante un año recibe lactancia y el intervalo entre nacimientos se da de 15 a 36 meses.
                        
                        </p>
                    </div>
                    <div class="info">
                        <h5>Conservación</h5>
                        <p>Como depredadores naturales encontramos al caimán negro, el tiburón toro, el jaguar y la anaconda.Por otro lado, el hombre ha sido el responsable de la disminución de ejemplares del delfín rosado. Esto se da por diversos factores, en los que se encuentra la destrucción masiva de la selva amazónica por deforestación y contaminación, la captura accidental y la cruel matanza por parte de pescadores ya que esta especie de delfín puede romper las redes de pesca haciendo que se pierda todo el trabajo hecho por los trabajadores.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AM.innerHTML = textoDescription_AM2;
            break;
        default:
            let textoDescription_AM4 = `
            <div class="foto-animal">
                <img src="img/amazonica/1.jpg" alt="" class="picture-animal">
                <div class="head-foto-animal">
                    <img src="img/logo.png" alt="">
                    <img src="img/amazonica.png" alt="">
                </div>
                <div class="footer-foto-animal">
                    <img src="img/pez.png" alt="">
                    <img src="img/carnivoro.png" alt="">
                </div>
            </div>
            <div class="info-animal">
                <div class="total-info animal">
                    <div class="head-info">
                        <div class="title-info">
                        <h3>Anguila Eléctrica</h3>
                        <h4 class="title-amazonica">Electrophorus electricus</h4>
                        </div>
                        <div class="estado">
                            <img src="img/preocupacion-menor.png" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <p>La llamada anguila eléctrica, también llamada temblón, temblador, gimnoto, pilaké o poraquê, es una especie de pez eléctrico sudamericano , y la única especie en su género. A pesar del nombre, no es una anguila , sino un pez cuchillo .
                        </p>
                    </div>
                    <div class="info">
                        <h5>Características</h5>
                        <p> Posee una similitud con la anguila de mar, sobre todo por su cuerpo fusiforme y largo, de hasta 2,5 metros de largo y 20 kilogramos de peso, cubierto por una piel de color verdoso desprovista casi completamente de escamas. La cabeza es aplanada y de boca grande, con una hilera de dientes cónicos en cada mandíbula. Su característica que lo ha hecho conocido es por emitir descargas eléctricas de hasta 850 voltios a partir de un grupo de células especializadas a lo largo de su cuerpo. 
                        </p>
                    </div>
                    <div class="info">
                        <h5>Alimentación</h5>
                        <p>Emplea las descargas eléctricas para cazar presas, Una vez que la anguila eléctrica se encuentra en su etapa adulta basa su dieta alimenticia en una variedad de especies de peces e invertebrados en menor tamaño, aunque también hay que tener en cuenta que son pocos los casos en los que considera consumir otras especies de anfibios y especies de mamíferos en tamaños pequeños.
                        Por otro lado cuando el anguila eléctrica se encuentra aun joven basa su dieta alimenticia en los huevos de otras especies, y de manera común también se alimenta de camarones y cangrejos                     
                        </p>
                    </div>
                    <div class="info">
                        <h5>Hábitat</h5>
                        <p> El hábitat de la anguila eléctrica describe a este animal como nativo de Sudamérica, puesto que en un entorno natural forma parte del ambiente en el río Amazonas y el río Orinoco, es por esta razón que la anguila eléctrica puede ser encontrada con facilidad en los pantanos, los arroyos y los ríos de América del Sur.
                        De acuerdo a los estudios aplicados a esta especie se reconoce que tiende a encontrarse principalmente en las aguas más tranquilas y con menor movimiento, esto quiere decir en las zonas pantanosas de las aguas estancadas y con poca claridad.                                             
                        </p>
                    </div>
                    <div class="info">
                        <h5>Reproducción</h5>
                        <p>Se reproduce durante la estación seca del año. Luego de este proceso la referencia que se tienen al respecto es que la hembra procede a depositar una gran cantidad de huevos en el nido, en promedio se trata de miles de estos que se encontrarán resguardados por parte de una estructura elaborada a partir de la salida del macho.
                        </p>
                    </div>
                </div>
            </div>
            `;
            $modal_AM.innerHTML = textoDescription_AM4;
      }
    // $modal_AM.innerHTML = textoDescription_AM;
    $modal_AM.style.display='block' ;
    $closeAM.style.display='block' ;
    $modal_AM.style.animation='fadeIn .5s forwards';
    $closeAM.style.animation='fadeIn .5s forwards';
 })
 
  $closeAM.addEventListener('click',()=>{
     $modal_AM.style.animation='fadeOut .5s forwards';
     $closeAM.style.animation='fadeOut .5s forwards';
  })
