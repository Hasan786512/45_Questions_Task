"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GuestList = ["Hassan", "Ali", "Misbah", "Sidra"];
let CanNotAttend = "Ali";
let NewGuest = "Amna";
GuestList[1] = NewGuest;
// GuestList.map(items=> console.log(`Dear ${items} I Found Big Dinner Table`))
let GuestBegin = "Hammad";
GuestList.unshift(GuestBegin);
// console.log(GuestList)
let GuestMiddle = "Babar";
let GuestMid = GuestList.length / 2;
GuestList.splice(GuestMid, 0, GuestMiddle);
// console.log(GuestList);
GuestList.push("Fatima");
// console.log(GuestList)
GuestList.map(items => console.log(`Dear ${items} You all are cordinally invited for dinner`));
