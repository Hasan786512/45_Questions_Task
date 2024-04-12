"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateCar(manufacture, model, color, year) {
    return {
        manufacture,
        model,
        color,
        year,
    };
}
let MyCar = CreateCar("Honda ", "Civic", "Black", 2004);
console.log(MyCar);
