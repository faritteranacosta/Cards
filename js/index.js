// Duplicar las cartas y mezclarlas
const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"];
const allCards = [...cards, ...cards];
const desorden = desordenar(allCards);
var nCartasVolteadas = 0;
var nCartasVolteadasTotal = 0;
var nMov = 0;
var cartaVolteada;

var timer = null;
let timeElapsed = 0;

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
        <div class="container" onclick="voltear(img${i + 1})">
            <div class="card">
                <img id="img${i + 1}" src="resources/carta.webp" alt="${desorden[i]}">
            </div>
        </div>
    `);
    const section = document.getElementById("section2");
    section.append(card);
}

function voltear(card) {
    if (nCartasVolteadas < 2 && card.src.endsWith("carta.webp")) {

        if (nMov == 0 && nCartasVolteadas == 0) {
            timer = setInterval(actualizarTemporizador, 1000);
        }

        card.src = `resources/${card.alt}.webp`; 
        nCartasVolteadas++;

        if (nCartasVolteadas == 1) {
            cartaVolteada = card;
        } else if (nCartasVolteadas == 2) {
            nMov++;
            document.getElementById("movimientos").innerHTML= nMov;
            console.log(card.src);
            if (card.src == cartaVolteada.src && card.id != cartaVolteada.id) {
                console.log(nCartasVolteadasTotal);
                if(nCartasVolteadasTotal == cards.length-1){
                    clearInterval(timer);
                    Swal.fire({
                        title: "¡Felicidades!",
                        icon: "success",
                        text: `Lo conseguiste en ${nMov} movimientos y ${timeElapsed} segundos`,
                        draggable: true
                      });
                      
                }else{
                    nCartasVolteadasTotal++;
                    nCartasVolteadas = 0;
                }
            } else {
                console.log("Error");
                setTimeout(function reverso() {
                    card.src = "resources/carta.webp";
                    cartaVolteada.src = "resources/carta.webp";
                    nCartasVolteadas = 0;
                }, 600);
            }
        }
    } 
}




