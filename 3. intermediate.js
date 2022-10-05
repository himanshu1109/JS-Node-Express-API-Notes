// Random Numbe Generator between 0 and 1
var n = Math.random(); 
console.log(n);
var p1 = prompt("Person 1 Name:");
var p2 = prompt("Person 2 Name:");
var n = Math.floor(Math.random()*101);
alert("Love Score is : "+n);

// Control Statements
if(condition){
    do this;
}
else if{
    do this;
}
else{
    do this;
}

// Comparators and Equality
=== (is equal to) (check for data types as well)
!== (is not equal to)
> (is greater than)
< (is lesser than)
>= (is greater than or equal to)
<= (is less than or equal to)
== (don't check for data type)

// Combining Comparators
&& (AND)
|| (OR)
! (NOT)

// Leap Year Challenge
function isleap(year){
    if(year%4===0 && (year%400===0 || year%100!==0)){
        return true;
    }
    return false;
}
var year = prompt("Enter the Year : ");
if (isleap(year)){
    alert("Leap Year");
}
else{
    alert("Not a Leap Year");
}

// Arrays
var arr = ["Himanshu","Angela","Muskan"];
var gue = prompt("Enter your name : ");
console.log(arr[0]+" "+arr[2]);
// .includes()
if(arr.includes(gue)){
    alert("Welcome");
}
else{
    alert("Sorry");
}
// .push() inserts at the end
arr.push("value")
// .pop() removes value of the end
arr.pop();

// fizzbuzz
var output = []
var count = 0;
function fizzbuzz(){
    count++;
    if (count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
    console.log(output);
}

// .length to calculate length of array

// Lunch Challenge
function whosPlaying(names){
    var len = names.length;
    var index = Math.floor(Math.random()*len);
    var random = names[index];
    return random+" is going to buy lunch today.";
}
var bill = whosPlaying(["Angela", "Ben", "Jenny", "Muskan", "Himanshu", "Namaste"]);
alert(bill);

// while Loop
while(condition){
    do this;
}
count = 0;
output=[]
while(count<=100){
    count++;
    if (count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
}
console.log(output);
// 99 Bottles Challenge
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// for loop
for(var;condition;counter){
    do this;
}
output=[]
for(var count = 1; count<=100; count++){
    if (count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
}
console.log(output);

// fibonacci Sequence Challenge
function fibonacciGenerator(n){
    var arr = [0,1];
    for (var i=2; i<n; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}
var output = fibonacciGenerator(5);
console.log(output);