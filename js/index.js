const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"]

function desordenar(){
    for (let i = cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = cards[i];
        cards[i] = cards[j];
        cards[j] = k;
      }

    return cards;
}

console.log(desordenar());

var count = 0;
for (let i = 0; i < cards.length; i++) {
    const card = document.createRange().createContextualFragment(/*html*/`
        <div class="container"> <div class="card"><img src="resorces/${cards[i]}.webp" alt="img-${cards[i]}"></div></div>
    `);
    const section = document.querySelector("section");
    section.append(card);

    if (i == cards.length-1 && count < 1) {
        i = -1;
        console.log(i);
        count++;
        console.log(desordenar());  
    }
}



