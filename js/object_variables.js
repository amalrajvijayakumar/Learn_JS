//Classes
class Pizza {
    constructor(sizePizza) 
    {    this.size = sizePizza;
         this.crust = "Original";
    }
    getCrust(){
        return this.crust;
    }
    setToppings(curstPizza){
        this.crust = curstPizza;
    }
    
}

class specialPizza extends Pizza {
    constructor(sizePizza){
        super(sizePizza);
        this.type = "Margarita";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} Pizza has 8 slices`)
    }
}
const mySpecialPizza = new specialPizza("medium");
mySpecialPizza.slice();




// class Pizza {
//     constructor(typePizza, sizePizza, crustPizza) 
//     {   this.type = typePizza;
//         this.size = sizePizza;
//         this.crust = crustPizza;
//         this.toppings = []; 
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizza){
//         this.toppings.push(toppingsPizza);
//     }
//     bake() {
//         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} ${this.toppings}`);
//     }
// }


// const myPizza = new Pizza("margarita", "small", "thin");
// myPizza.setToppings("sausage");
// myPizza.setToppings("Olives");
// console.log(myPizza.getToppings());
// myPizza.bake();

//Objects
//key-value pairs in curly braces

//example 

// const movie =  {
//     actor : "Kavin",
//     music : "Arr",
//     director : "Lokesh",
//     producer : "Anbu"
// };


// //destructuring the objects
// const{actor, music, director, producer}= movie;
// console.log(music);


// function sings ({music}){return music;}
//  console.log(sings(movie));
 
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