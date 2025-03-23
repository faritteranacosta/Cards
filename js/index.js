// Duplicar las cartas y mezclarlas
const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"];
const allCards = [...cards, ...cards];
const desorden = desordenar(allCards);
var nCartasVolteadas = 0;
var cartaVolteada;
var nMov = 0;
var cartasEmparejadas = 0;

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
                    <img src="resources/champions.svg" alt="c" width="160" height="160">
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

function voltear(card) {
    // Si ya están 2 cartas volteadas, la carta está volteada, o está deshabilitada, no hacer nada
    if (nCartasVolteadas >= 2 || card.classList.contains('flipped') || card.classList.contains('disabled')) {
        return;
    }
    card.classList.add('flipped');
    nCartasVolteadas++;
    
    if (nCartasVolteadas == 1) {
        // Primera carta volteada
        cartaVolteada = card;
    } else if (nCartasVolteadas == 2) {
        // Segunda carta volteada
        nMov++;
        document.getElementById('movs').innerText = nMov;//agrega el numero de movimientos
        // Comprobar si forman par
        if (card.dataset.card === cartaVolteada.dataset.card && card.id !== cartaVolteada.id) {
            console.log("correcto");
            // Deshabilitar las cartas emparejadas
            setTimeout(function() {
                card.classList.add('disabled');
                cartaVolteada.classList.add('disabled');
                nCartasVolteadas = 0;
                cartasEmparejadas += 2;

                if (cartasEmparejadas === allCards.length) {
                    alert('Ganaste!');
                }
            }, 500);
        } else {
            console.log("Error");
            // Volver a ocultar las cartas después de un tiempo
            setTimeout(function() {
                card.classList.remove('flipped');
                cartaVolteada.classList.remove('flipped');
                nCartasVolteadas = 0;
            }, 1000);
        }
    }
}