//Objects
//key-value pairs in curly braces

//example 

const movie =  {
    actor : "Kavin",
    music : "Arr",
    director : "Lokesh",
    producer : "Anbu"
};


//destructuring the objects
const{actor, music, director, producer}= movie;
console.log(music);


function sings ({music}){return music;}
 console.log(sings(movie));
 
// const {music : myFavMusicDirector, director :myFav } = movie;// to try differnet name
// console.log(myFavMusicDirector);
// console.log(myFav);
// //to add and delete in the object
// movie.actress = "S"; //to add existing object
// delete movie.producer; // to delete the value in the object 

// console.log(movie.hasOwnProperty("producer"));  //contains property
// console.log(Object.values(movie));

// for( let job in movie){
//     console.log(`${job}, its ${movie[job]}`);
// }
// const myObj = { name: "Amal"};

// const anotherObj ={ 
//     subscriber: true,
//     no : 10000,
//     content : {
//         earn : "js",
//         grow : "stocks"
//     },
//     subdivisions : ["earn", "grow", "give"],
//     action: function(){
//         return  `Earn by learning ${this.content.earn}`
//     }
// };

// console.log(anotherObj.subdivisions);
// console.log(myObj);
// console.log(anotherObj.action());



// //example for obj inheritance
// const vehicle ={
//     doors:2,
//     engine: function(){
//         return "Vroooom!";
//     }
// };
// console.log(vehicle.engine());

// const car =  Object.create(vehicle);
// car.wheels = 4;

// car.engine = function(){ return "Whoosh"};

// console.log(car.engine());

// const tesla = Object.create(car);
// tesla.engine = function(){ return "Shhhh"};
// console.log(tesla.engine());