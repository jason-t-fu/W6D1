console.log("Webpack is working!");

const MovingObject = require("./moving_object");
window.MovingObject = MovingObject;
const Asteroid = require("./asteriod");
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  const mo = new MovingObject(
    { pos: [30, 30], vel: [1, 1], radius: 5, color: "#00FF00" }
  );
  
  setInterval(() => mo.move(ctx), 10);

  const a1 = new Asteroid({ pos: [100, 30] });
  const a2 = new Asteroid({ pos: [10, 100] });
  const a3 = new Asteroid({ pos: [100, 200] });

  console.log(a1);
  
});