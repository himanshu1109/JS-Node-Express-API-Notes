// document accessing elements
document
document.firstElementChild;
document.firstElementChild.firstElementChild;
document.firstElementChild.lastElementChild;

// Properties Different
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Bye";
heading.style.color = "red";

// selecting using querySelector
document.querySelector("input").click();

// Properties --> innerHTML , style , firstChild
// Methods --> click() , appendChild() , setAttribute()

// Selectors
1. document.getElementsByTagName("tag") -- Creates Array of all that tag occurences
2. document.getElementsByClassName("className") -- Creates Array of all that class occurences
3. document.getElementsById("id") -- only one element of that id will be given
4. document.querySelector("selector as used in css") --> give first Ocuurence , for id #idName, for class .className, for tag tag Name
5. document.querySelectorAll("selector as used in css") --> give all Ocuurence as Array, for id #idName, for class .className, for tag tag Name

// Manipulating CSS using js
.style.property to manipulate css
properties are in srings and names in camel case like fontSize
document.querySelector("button").style.backgroundColor = "yellow";

// .classList
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");

// .innerHTML and .textContent
.innerHTML gives whole html inside that element like if bold is applied it will give that as well
We can also add html code using innerHTML
.textContent only gives text of the element

// Manipulating HTML attributes
// .attributes to get list of all attributes of that element
document.querySelector("a").attributes;
// .getAttribute to get Attribute of that element
document.querySelector("a").getAttribute("href");
// .setAttribute to get Attribute of that element , 2nd parameter to setting value for that attribute
document.querySelector("a").setAttribute("href","www.bing.com");