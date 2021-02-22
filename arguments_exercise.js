// // function sum(){
// //     let currSum = 0;
// //     const args = Array.prototype.slice.call(arguments);
// //     args.forEach(ele => currSum += ele);
// //     return currSum;
// // }

// // function sum2() {
// //     let currSum = 0;
// //     // const args = Array.prototype.slice.call(arguments);
// //     const args = [...arguments]
// //     args.forEach(ele => currSum += ele);
// //     return currSum;
// // }

// // // console.log(sum2(1, 2, 3, 4) === 10);
// // // console.log(sum2(1, 2, 3, 4, 5) === 15);

// // Function.prototype.myBind = function (ctx) {
// //     const that = this;
// //     return function(){
// //     that.apply(ctx)
// //     }
// // }

// Function.prototype.myBind = function (ctx, ...bindArgs){
//     const that = this;
//     return function(...callArgs) {
//         return that.apply(ctx, bindArgs.concat(callArgs));
//     };
// };


// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(int){
    let numbers = [];
    return function _curriedSum (num) {
        numbers.push(num);
        if (numbers.length === int){
            return numbers.reduce( function (accum, ele) {return ele + accum;});
        }
        return _curriedSum;
    }
}

const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));


Function.prototype.curry = function (numArgs){
    let args = [];
    return function _curry(num){
        args.push(num);
        if (args.length === numArgs){
            return args.reduce(function (accum, ele) {return ele + accum;});
        }
        return _curry;
    }
}