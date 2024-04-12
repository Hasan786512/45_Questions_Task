"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let Favourite_Fruits = ["Banana", "Apple", "Grapes"];
if (Favourite_Fruits.includes("Banana")) {
    console.log("You Really Like Bananas !");
}
if (Favourite_Fruits.includes("Apple")) {
    console.log("You Really Like Apple !");
}
if (Favourite_Fruits.includes("Orange")) {
    console.log("You Really Like Orange !");
}
else {
    console.log("Orange Are Not in your favourit fruits list!");
}
if (Favourite_Fruits.includes("Grapes")) {
    console.log("You Really Like Grapes !");
}
if (Favourite_Fruits.includes("Strawberry")) {
    console.log("You Really Like Strawberries !");
}
else {
    console.log("Strawberry are not in your favourit fruits list!");
}
