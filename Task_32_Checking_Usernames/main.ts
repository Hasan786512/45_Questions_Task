// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let Current_Users : string[] = ["Hasan","Raza","Fatima","Ali","Ayesha"];
let New_Users     : string[] = ["Imad","HASAN","Insha","Jannat","AyeshA"];
for(let New_User of New_Users){
let isavailabe = true;
for(let Current_User of Current_Users){
if(New_User.toLowerCase() === Current_User.toLowerCase()){
console.log(`Username ${New_User}"is already taken . Please choose a different username"`)
 isavailabe = false;  
break; 
}     

}
if(isavailabe){
console.log(`Username ${New_User}" is available"` ) 
}
}