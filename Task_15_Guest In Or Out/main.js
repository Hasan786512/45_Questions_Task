"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GuestList = ["Hassan", "Ali", "Misbah", "Sikander", "Sidra"];
let CanNotAttend = "Sikander";
console.log('Dear' + " " + CanNotAttend + " " + "You are Not invited For Dinner");
let NewGuest = "Sufyan";
GuestList[3] = NewGuest;
// console.log(GuestList)
GuestList.map((items) => console.log(`Dear ${items} You All Are Cordinally Ivnited For a Dinner`));
