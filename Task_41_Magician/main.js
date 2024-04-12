"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let MagicianNames = ["Ahad", "Hasan", "Zubair", "Imad"];
function show_magicians() {
    for (let i = 0; i < MagicianNames.length; i++) {
        console.log(`${MagicianNames[i]} is a great magician`);
    }
}
show_magicians();
