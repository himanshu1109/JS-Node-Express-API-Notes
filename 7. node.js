// jshint esversion:6
// require is used to import or use a module
const fs = require('fs');

// copyFileSync(source, destination) -- copy file contents from source to destination file , create one if not already exists
fs.copyFileSync("file1.txt","file2.txt");

// superheroes package
var superheroes = require("superheroes");
var mySuperName = superheroes.random();
console.log(mySuperName);

// supervillains package
var supervillains = require("supervillains");
var mySuperName = supervillains.random();
console.log(mySuperName);