//Arrays


const myArray = [];
//adding element

myArray[0] = "amal";
myArray[1] = "raj";
myArray[2] = 999;
myArray[2] = true;

console.log(myArray.length);



console.log(myArray);





// //Scope var, let, const
// //global scope
// var x =1;
// let y = 2;
// const z =3;

// console.log(`global : ${x}`);
// console.log(`global : ${y}`);
// console.log(`global : ${z}`);

// //local scope //block scope

// //local scope //function scope
// function myFunc() {
//     const z= 5;

//     console.log(`function : ${x}`);
//     console.log(`function : ${y}`);
//     console.log(`function : ${z}`);   

//    if(true) {
//         let y = 4;
//         console.log(`block : ${x}`);
//         console.log(`block : ${y}`);
//         console.log(`block : ${z}`);
//     }
// }

// myFunc()
// console.log (y);
//functions
// console.log(
//     "amalraj@gmail.com".slice(0, "amalraj@gmail.com".indexOf("@")));

// function getUsernameFromEmail(email){
//    return(email.slice(0, email.indexOf("@")));
// }
// console.log(getUsernameFromEmail("contactamal@gmail.com"));
// console.log(getUsernameFromEmail("contactamalraj@gmail.com"));


// const toProperCase = function (name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(toProperCase("amalraj"));

// function sum(num1, num2){
//     return num1+num2;
// }
// console.log(sum(10,2));
// console.log(sum(0,2));


//Loops
//continue keyword
// let text  = '';
// for (let i =0; i< 5; i++)
// {
//     if (i===3){
//         continue;
//     }
//     text = text + i;
// }

// console.log(text);


//for loop
// for(i =0; i<=10; i++){
//     console.log(i);
// }

// let name = "amalraj";
// for(let i =0; i<=name.length; i++){
//     console.log(name.charAt(i));
// }

//Do while loop
// let i =50;
// do{
//     console.log(i);
//     i++;
// }while(i<=50)


//While loop
// let i =1;
// while(i<=50){
//     console.log(i);
//     i++;
// }


//User input

// let myBoolean = prompt("Enter your name");
// if (myBoolean){
//     console.log(myBoolean ?? "You didn't enter your name" );
// }
// else {
//     console.log("You didn't enter your name" );
// }
// console.log(myBoolean.trim().length);