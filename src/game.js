function Game(ctx) {
  const DIMX = ctx.canvas.width;
  const DIMY = ctx.canvas.height;
  const NUM_ASTEROIDS = 20;

  const asteroids = [];

}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid())
  }
};

Game.prototype.randomPosition = function() {

}

Game.prototype.draw = function() {

};

Game.prototype.moveObjects = function() {

}