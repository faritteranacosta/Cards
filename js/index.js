// Duplicar las cartas y mezclarlas
const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"];
const cards2 = ["vilgas", "bebe", "alien", "doo", "freezer", "majin", "paul", "picollo", "predator", "the_simsons"];
const cards3 = ["aldeano", "cerdo", "creeper", "enderman", "esqueleto", "golem", "perro", "piglin", "steve", "vaca"];
const allCards2 = [...cards2, ...cards2];
const allCards = [...cards, ...cards];
const allCards3 = [...cards3, ...cards3];
const imagesWin = ['colombia.gif', 'goku.gif', 'minecraft.gif']

const cardsD = [desordenar(allCards), desordenar(allCards2), desordenar(allCards3)];

var nCartasVolteadas = 0;
var cartaVolteada;
var nMov = 0;
var cartasEmparejadas = 0;

var style = 0;

if(localStorage.getItem('style')){
    style = localStorage.getItem('style');
}

var sonidos = ['resources/audios/himno_champions_league.mp3', 'resources/audios/victory_space.mp3', 'resources/audios/minecraft_victory.mp3'];
var dorso = ['champions.svg', 'dorso_space.webp', 'dorso_minecraft.webp'];
const flip = new Audio('resources/audios/carta_Voltea.mp3');
const sonido = new Audio('resources/audios/carta_incorrecta.mp3');
const sonido_correct = new Audio('resources/audios/carta_correcta.mp3');
const champions = new Audio(sonidos[style]);
var desorden = cardsD[style];
var backgrounds = ['champions.svg', 'backgroup_space.webp', 'backgroud.webp'];

function playAudio(sonido){
    sonido.play();
}
var styleBackground = [`linear-gradient(to right, transparent, rgb(40, 6, 142)), url("resources/${backgrounds[style]}")`,
`linear-gradient(to right, transparent, rgb(142, 6, 6)), url("resources/${backgrounds[style]}")`,
`linear-gradient(to right, transparent, rgb(6, 142, 90)), url("resources/${backgrounds[style]}")`];

document.body.style.background = styleBackground[style];
document.body.style.backgroundSize = 'cover';
var timer = null;
let timeElapsed = 0;
console.log(backgrounds[style]);

function actualizarTemporizador() {
    timeElapsed++;
    document.getElementById("timer").innerHTML = timeElapsed;
}

console.log(desorden);

function desordenar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Agregar cartas en El DOM
for (let i = 0; i < desorden.length; i++) {
    const card = document.createRange().createContextualFragment(/*html*/ `
        <div class="container">
            <div class="card" id="card${i + 1}" data-card="${desorden[i]}" onclick="voltear(this)">
                <div class="card-inner">
                    <div class="card-front">
                    <img src="resources/${dorso[style]}" alt="c" width="160" height="160">
                    </div>
                    <div class="card-back">
                        <img src="resources/${desorden[i]}.webp" alt="${desorden[i]}">
                    </div>
                </div>
            </div>
        </div>
    `);

    const section = document.getElementById("section2");
    section.append(card);
}

function changeStyle(){
    let x = document.getElementById('select').value;
    if(x == "option1"){
        style = 0;
    }else if(x== "option2"){
        style = 1;
    }else{
        style = 2;
    }
    localStorage.setItem('style', style);
    location.reload();
    
}

function voltear(card) {
    // Si ya están 2 cartas volteadas, la carta está volteada, o está deshabilitada, no hacer nada
    if (nCartasVolteadas >= 2 || card.classList.contains('flipped') || card.classList.contains('disabled')) {
        return;
    }
    card.classList.add('flipped');
    if (nMov == 0 && nCartasVolteadas == 0) {
        // Inicia el temporizador al voltear la primera carta
        timer = setInterval(actualizarTemporizador, 1000);
    }
    nCartasVolteadas++;
    
    if (nCartasVolteadas == 1) {
        playAudio(flip);
        // Primera carta volteada
        cartaVolteada = card;
    } else if (nCartasVolteadas == 2) {
        // Segunda carta volteada
        playAudio(flip);
        nMov++;
        document.getElementById('movs').innerText = nMov;//agrega el numero de movimientos
        // Comprobar si forman par
        if (card.dataset.card === cartaVolteada.dataset.card && card.id !== cartaVolteada.id) {
            console.log("correcto");
            playAudio(sonido_correct);
          

            // Deshabilitar las cartas emparejadas
            setTimeout(function() {
                card.classList.add('disabled');
                cartaVolteada.classList.add('disabled');
                nCartasVolteadas = 0;
                cartasEmparejadas += 2;

                if (cartasEmparejadas === allCards.length) {
                    clearInterval(timer); // Detiene el temporizador
                    playAudio(champions);
                    let win = imagesWin[style];
                    Swal.fire({
                        title: "¡Felicidades!",
                        text: `Lo conseguiste en ${nMov} movimientos y  segundos`,
                        imageUrl: "resources/win/"+win,
                        imageWidth: 600,
                        imageHeight: 500,
                        imageAlt: "Custom image",
                        draggable: true,
                        width: 800,
                        height: 700,
                        showCancelButton: true,
                        confirmButtonText: 'Reload'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload(); // Recarga la página
                        }
                    });
                }
            }, 500);
        } else {
            playAudio(sonido);
            // Volver a ocultar las cartas después de un tiempo
            setTimeout(function() {
                card.classList.remove('flipped');
                cartaVolteada.classList.remove('flipped');
                nCartasVolteadas = 0;
            }, 1000);
        }
    }
}