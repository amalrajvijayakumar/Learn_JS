//Dom document object model

const view1 = document.getElementById("view1")
console.log(view1);

const view2 = document.querySelector("#view2")
console.log(view2);

view1.style.display = "flex";
view2.style.display ="none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);


const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)") ;
console.log(evenDivs);

evenDivs[5].style.backgroundColor = "Red";

for(i=0; i < evenDivs.length; i++){
    evenDivs[i].style.width = "100px";
    evenDivs[i].style.backgroundColor= "green";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World"; 

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1> Amal </h1> <p> Subscribe</p>'
navBar.style.justifyContent = "space-evenly";
console.log(navBar);

//examples for parent-child element access
console.log(evenDivs [0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);

view1.style.display ="none";
view2.style.display= "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


console.log (view2.lastElementChild);
//view2.lastElementChild.remove();

while (view2.lastChild){
    view2.lastChild.remove();
}

//adding elements
const createDiv = (parent, iter ) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.backgroundColor = "Yellow";
    newDiv.style.color = "Black";
    newDiv.style.display = "flex";
    newDiv.style.alignItems= "center";
    newDiv.style.justifyContent = "center";
   parent.append(newDiv);
}
for (i = 1; i<=12; i++){
    createDiv(view2, i);
}















//Coding challenge
//Print random letters from the given string
// type 1
// console.log("Amalraj".charAt(Math.floor(Math.random()*7)));

// type 2
// const myName = "Amalraj";
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));

//-----------------------------------------------------------------------


//math Properties
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.6));

// console.log(Math.pow(3,4));
// console.log(Math.min(10, 3, 0,5,6,32));
// console.log(Math.max(1, 5, 2, 8, 10));


//print 1-100
// console.log(Math.floor(Math.random()*100 +1));
// //0-0.9 random generation in between the number
// console.log(Math.random());

//-----------------------------------------------------------------------

//-----------------------------------------------------------------------

//Strings
// const myVariable = "423.098"
// const myNumber = 42;
// const myFloat = 42.0;

// console.log(Number.isInteger(myNumber));

// console.log(Number.parseFloat(myVariable).toFixed(3));

// console.log(Number.parseInt(myVariable));

// console.log(myNumber.toString());

// console.log(Number.isNaN("42"));

//-----------------------------------------------------------------------


//length property
// console.log(myVariable.length);

//String Methods
// console.log(myVariable.charAt(0));

// console.log(myVariable.indexOf("ati"));

// console.log(myVariable.lastIndexOf("a"));

// console.log(myVariable.slice(5, 8));

// console.log(myVariable.toUpperCase());

// console.log(myVariable.toLowerCase());

// console.log(myVariable.includes("th"));

// console.log(myVariable.split("e"));

//-----------------------------------------------------------------------