



//two dimentional array
const earnMoneyA = ["frontend", "backend", "fullstock"];
const earnMoneyB = ["Ai", "blockchain", "DataAnalytics"];

const growMoneyA = ["stocks", 'realEstate', "fixedIncome"];
const growMoneyB = ["Options", "futures"];

const giveMoney = ["QualityEducation"];

console.log(earnMoneyA[1],growMoneyB[1]);


//three dimention array
const earnMoney = [earnMoneyA, earnMoneyA];
const growMoney = [growMoneyA, growMoneyB];
console.log(earnMoney[0][1], growMoney[1][1]);

const Amal = [earnMoney, growMoney, giveMoney];
console.log(Amal);

console.log(Amal[0][0][1], Amal[1][1][1]);


// //Arrays
// const myArrayA = [];

// myArrayA[0] = "amal";
// myArrayA[1] = "raj";
// myArrayA[2] = 999;
// myArrayA[3] = true;

// console.log(myArrayA);

// myArrayB = ["false", 56, 445];

// console.log(myArrayB);

// //to join the two array
// const newArray = myArrayA.concat(myArrayB);
// console.log(newArray);



// delete myArray[2];// dont use the delete 

// console.log(myArray);

// myArray.splice(0,0, "Amalraj");
// console.log(myArray); // can add the element in the specified index 

// const newArray = myArray.slice(1,3, "Amalraj");
// console.log(newArray); //slice create a copy of an old array 




//print the arrays length

// console.log(myArray.length);
// console.log(myArray[1]);
// console.log(myArray[myArray.length-1]);

//adding element

// myArray.push("click"); // to add element in the last index
// console.log(myArray);
// myArray.pop(); //to delete the element in the last index 
// console.log(myArray);
// myArray.unshift("click");
// console.log(myArray); // to add element in the starting index
// myArray.shift("click");
// console.log(myArray);// to delete the element in the starting index

// const lastItem = myArray.push("AMAL"); 
// console.log(lastItem);// it will print the array's length after add the element but it store in a variable
// const firstItem = myArray.unshift("AMAL"); // it will print the array's length after add the element but it store in a variable
// console.log(firstItem);

//But we remove the element it behave opposite example: the output is printing the removed element

// const lastItem = myArray.pop(); 
// console.log(lastItem); //it gives a removed element
// const firstItem = myArray.shift();
// console.log(firstItem); //it gives a removed element
// console.log(myArray);

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