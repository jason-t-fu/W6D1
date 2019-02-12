const MovingObject = require("./moving_object");
const Util = require("./util");

function Asteroid() {
  const COLOR = "#CCCCCC";
  const RADIUS = 15;
  const args = Array.prototype.slice.call(arguments)[0];
  
  MovingObject.call(this, {pos: args.pos,
                           vel: Util.randomVec(1),
                           color: COLOR,
                           radius: RADIUS});
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
