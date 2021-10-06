//1 String
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let myStringNew = myString.replace(/,/g, " ");
//g mean global flag
console.log(myStringNew);

//2 Arrays

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//2.1 add object to an array without any specific place
favoriteAnimals.push("turtle");
//2.2 log array
console.log(favoriteAnimals);
//2.3 add new object to specific place
favoriteAnimals.splice(1, 0, "meerkat");
//2.4 log with explanation
console.log("The new value of the array is", favoriteAnimals);
//2.5 log new array
console.log(favoriteAnimals);
//2.6 length of array
console.log("The array has a length of: ", favoriteAnimals.length);
//2.7
favoriteAnimals.indexOf("giraffe");
favoriteAnimals.splice(3, 1);
//2.8 log array
console.log(favoriteAnimals);
//2.9 position of meerkat
favoriteAnimals.indexOf("meerkat");
//2.10
console.log(
  "The item you are looking for is at index: ",
  favoriteAnimals.indexOf("meerkat")
);
favoriteAnimals.splice(1, 1);
console.log(favoriteAnimals);
//More JavaScript
//1
function sumOf(a, b, c) {
  return a + b + c;
}
console.log(sumOf(11, 22, 33));
console.log(sumOf(123, 456, 789));

//2
function colorCar(a) {
  if ((a = "color")) {
    return "a red car";
  }
}
console.log(colorCar("color"));

//3


const earth = {
  location: "Galaxy",
  position: 3,
  type: "mixing"
};

console.log (earth)

function planetInfo(planet) {
  return planet.location + " " + planet.position + " " + planet.type
};

console.log (planetInfo(earth));

//4

function vehicleTypeNew (color,code) {
let car = "a "+color+" car";
let bike = "a "+color+" motorbike";

if (code===1) {return car}
  return bike}

console.log (vehicleTypeNew("blue",2))

//5
console.log (3===3?"yes":"no")
console.log(3===3 && "yes")

//6
function vehicleType(code, age) {
  return "blue", code, age;
}
console.log('"blue"', 1, ",", 5);

//7
let driveVerhicle = ["motorbike", "caravan", "bike"];
//8
console.log(driveVerhicle);

//9
function vehicle(x, y, z) {}

//12
var objectA = {};
var objectB = new Object();
console.log(Object);

//13
var myStudent = {
  name: "Max",
  age: 45,
  weight: 78,
  height: 179,
};
console.log(myStudent);

//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log("Is x==y", x == y);
console.log("Is x===y", x === y);
console.log("Is z==y", z == y);
console.log("Is z==x", z == x);

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o3 === o2);
console.log(o2 === o3);
//17
let bar = 42;
typeof typeof bar;
console.log(bar);
console.log(typeof "bar");
