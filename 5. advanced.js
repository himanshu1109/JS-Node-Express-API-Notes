// addEventListener
target.addEventListener(type,listener,options);
document.querySelector("button").addEventListener("click",function);

// Higher Order Functions -- Passing Functions as arguments
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function calculator(a,b,fun){
    return fun(a,b);
}
console.log(calculator(3,3,add));
console.log(calculator(3,3,subtract));
console.log(calculator(3,3,multiply));
console.log(calculator(3,3,divide));

// Playing Audio
var audio = new Audio('sounds/tom-1.mp3');
audio.play();

// this
this represents current object

// Objects 
var houseKeeper={
    clean: true,
    name: "Soniya",
    work: ["Room","Kitchen"]
}
houseKeeper.name;

// Constructor Function 
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}
// Initializing
var bellboy1 = new BellBoy("Himanshu", 19, true, ["English","Hindi"]);

// switch statement
switch (expression){
    case 1:
        break;
    default:
}

// objects methods -- adding function to objects
function HouseKeeper (years, name, cleanExperience){
    this.years = years;
    this.name = name;
    this.cleanExperience = cleanExperience;
    this.clean = function(){
        alert("Winner");
    }
}
var housekeeper1 = new HouseKeeper(19, "Nam", 19);
housekeeper1.clean();

// keydown -- takes key from keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key);
})

// Every addEventListener has an event that tells us about the event
document.addEventListener("keydown",function(event){
    console.log(event);
}) -- triggered keybiard events
document.addEventListener("click",function(event){
    console.log(event);
}) -- triggered mouse events

// Animations
setTimeout(function, time in milliseconds);