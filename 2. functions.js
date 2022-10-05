// Creating Function
function getMilk() { 
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}
// Calling Function
getMilk();

// Creating Function with Parameters
function getMilk(Money){
    // Floor function
    var bottles = Math.floor(Money/1.5);
    console.log("You can buy "+bottles+" Bottles");
}

// Calling Function with Arguments
getMilk(10);

// Challenge
function lifeInWeeks(age){
    var years = 90-age;
    var days = 365*years;
    var weeks = 52*years;
    var months = 12*years;
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" left.");
}
lifeInWeeks(21);

// Output and Return Values
function getMilk(money){
    return money%1.5;
}

var change = getMilk(10);
console.log(change);

// BMI Calculator Challenge
function bmiCalculator(weight, height){
    // pow function
    return (weight/Math.pow(height,2));
}

var bmi = bmiCalculator(65, 1.8);
console.log("BMI is : "+bmi);

// round function
console.log(Math.round(1.5));