// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
type car ={
manufacture : string,
model  : string,
color :string,
year :  number,
}
function CreateCar(manufacture : string , model : number , color : string , year : number ){
return{
manufacture,
model,
color, 
year,   
}
}
let MyCar : car = CreateCar ("Honda ", "Civic", "Black",2004);
console.log(MyCar);