const cards = ["baggio", "beckham", "casillas", "cr7", "Cruyff", "eto", "messi", "neymar", "ronaldinho", "sergio_ramos"]

console.log(cards.sort(function(){return 0.5 - Math.random()}));

for (let i = 0; i < cards.length; i++) {
    const card = document.createRange().createContextualFragment(/*html*/`
        <div class="container"> <div class="card"><img src="resorces/${cards[i]}.webp" alt="img-${cards[i]}"></div></div>
    `);

    const section = document.querySelector("section");
    section.append(card);
}

console.log(cards.sort(function(){return 0.5 - Math.random()}));

for (let i = 0; i < cards.length; i++) {
    const card = document.createRange().createContextualFragment(/*html*/`
        <div class="container"> <div class="card"><img src="resorces/${cards[i]}.webp" alt="img-${cards[i]}"></div></div>
    `);

    const section = document.querySelector("section");
    section.append(card);
}



