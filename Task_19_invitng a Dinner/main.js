"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GuestList = ["Hasan", "Ali", "Misbah", "Sidra",];
console.log("Two guest  are not invited for dinner");
while (GuestList.length > 2) {
    let RemoveGuest = GuestList.pop();
    console.log(`Dear ${RemoveGuest} You Are Not Invited For Dinner`);
}
;
GuestList.map(items => console.log(`Dear ${items} You Are Still Invited For dinner`));
