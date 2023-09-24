//Module
// "use strict" it was inbuilt in html script block add "module"

export default class Susbscriber {
    constructor(name){
        this._name = name ;
    }

    emailme(){
        return `Hi i am ${this._name}. emailed to contactamal@gmail.com`
    }
}





// const earnMoney = () => {
//     return "Earn Money by Learning high demand skills";
// };

// const growMoney = () => {
//     return "Grow Money by investing!"
// };

// const giveMoney = () =>{
//     return"Give Money for Education free world!"
// };

// export default earnMoney;
// export{growMoney, giveMoney};
