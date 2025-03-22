const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"]
const desorden = desordenar().slice();
console.log(cards);

function desordenar(){
    for (let i = cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = cards[i];
        cards[i] = cards[j];
        cards[j] = k;
      }

    return cards;
}

for (let i = 0; i < cards.length*2; i++) {
    const card = document.createRange().createContextualFragment(/*html*/`
        <div class="container" onclick = "voltear(img${i+1})"> <div class="card"><img id = "img${i+1}" src="resources/carta.webp" alt="${i+1}"></div></div>
    `);
    const section = document.querySelector("section");
    section.append(card);
}

var bandera = 1 ;

function voltear(card){
    if (card.alt-1 >= cards.length) {
        if(bandera){
            console.log(desordenar());
            bandera = 0;
        }
        
            console.log(card);
            card.src = "resources/"+cards[card.alt-11]+".webp";
            console.log(card.id)
    }else{
        console.log(card);
        card.src = "resources/"+desorden[card.alt-1]+".webp";
        console.log(card.id)
    }    
}
