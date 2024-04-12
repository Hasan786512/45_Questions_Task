let GuestList: string[] = ["Hassan","Ali","Misbah","Sidra"];
let CanNotAttend :string = "Ali";
let NewGuest : string = "Amna";
GuestList[1]=NewGuest;
// GuestList.map(items=> console.log(`Dear ${items} I Found Big Dinner Table`))
let GuestBegin : string ="Hammad";
GuestList.unshift(GuestBegin)
// console.log(GuestList)
let GuestMiddle : string = "Babar";
let GuestMid =  GuestList.length/2;
GuestList.splice(GuestMid,0,GuestMiddle);
// console.log(GuestList);
GuestList.push("Fatima");
// console.log(GuestList)
 
GuestList.map(items=>console.log(`Dear ${items} You all are cordinally invited for dinner`))