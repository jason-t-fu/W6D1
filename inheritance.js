
Function.prototype.inherits = function(superClass) {
  // const Surrogate = function() {};

  // Surrogate.prototype = superClass.prototype;
  // this.prototype = new Surrogate();
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);