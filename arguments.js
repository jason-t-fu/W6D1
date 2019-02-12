
function sum(...args) {
  let sum = 0;
  args.forEach( num => {
    sum += num;
  });
  return sum;
}

console.log(sum(1,2,3,4,5));


//-----------------------------------


Function.prototype.myBind = function(context, ...args) {
  return (...args2) => {
    this.call(context, ...args, ...args2);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

//-----------------------------------

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

const curriedSum = function(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach( n => {
        sum += n;
      });
      return sum;
    }
    else {
      return _curriedSum;
    }
  };
};

//-----------------------------------

Function.prototype.curry = function(numArgs) {
  let args = [];
  const that = this;
  return function _curry() {
    args = args.concat(Array.from(arguments));

    if (args.length === numArgs) {
      // return that.apply(args);
      return that(...args);
    }
    else {
      return _curry;
    }
  };
};