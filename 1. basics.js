// alert and variable declaration
var a = "3";
alert(a);
var b = "8";
alert(b);
var c = a;
a = b;
b = c;
alert(a);
alert(b);

// String concatenation +
var message = "Hello";
var name = "Himanshu Goyal";
alert(message+" there, "+name);
alert(name.length);

// string.length and prompt 
var tweet = prompt("Compose a tweet --> ");
var len = tweet.length;
alert("You have written "+len+" characters, you have "+(140-len)+" characters left.");

// slice(startIndex, upperIndex)
var s = tweet.slice(0,140);
alert("We have sliced your tweet to 140 characters.");

// toLowerCase(string) and toUpperCase(string)
var name = prompt("What is your name?");
alert("Hello, "+name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase());

// Operators same as other Programming Languages
var dogAge = prompt("Enter your Dog Age -->");
var humanAge = (dogAge-2)*4+21;
alert("Dog Age is : "+dogAge+"\nHuman Age is : "+humanAge);

// Print Something on Console
console.log("Hello");

// Making constant values
const pi = 3.14;