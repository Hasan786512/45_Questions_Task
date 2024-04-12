let GuestList: string[] = ["Hassan","Ali","Misbah","Sikander","Sidra"];
let CanNotAttend : string = "Sikander";
console.log('Dear'+" " + CanNotAttend+" " + "You are Not invited For Dinner");

let NewGuest : string = "Sufyan"
GuestList[3] = NewGuest;
// console.log(GuestList)
GuestList.map((items)=> console.log(`Dear ${items} You All Are Cordinally Ivnited For a Dinner`))