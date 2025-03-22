// Duplicar las cartas y mezclarlas
const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"];
const allCards = [...cards, ...cards];
const desorden = desordenar(allCards);
var nCartasVolteadas = 0;
var cartaVolteada;
var nMov;

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
    const section = document.querySelector("section");
    section.append(card);
}

function voltear(card) {
    if (nCartasVolteadas < 2 && card.src.endsWith("carta.webp")) {
        console.log(card);
        card.src = `resources/${card.alt}.webp`; 
        nCartasVolteadas++;
        console.log(nCartasVolteadas);

        if (nCartasVolteadas == 1) {
            cartaVolteada = card;
        } else if (nCartasVolteadas == 2) {
            nMov++;
            console.log(card.src);
            if (card.src == cartaVolteada.src && card.id != cartaVolteada.id) {
                console.log("correcto");
                nCartasVolteadas = 0;
            } else {
                console.log("Error");
                setTimeout(function reverso() {
                    card.src = "resources/carta.webp";
                    cartaVolteada.src = "resources/carta.webp";
                    nCartasVolteadas = 0;
                }, 1000);
            }
        }
    } else {
        alert("NO");
    }
}




