function MovingObject() {
  args = Array.from(arguments)[0];
  this.pos = args.pos;
  this.vel = args.vel;
  this.radius = args.radius;
  this.color = args.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
  ctx.fillStyle = this.color;
  
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
    );
  
  ctx.fill();
  ctx.closePath();
};

MovingObject.prototype.move = function(ctx) {
  newX = this.pos[0] + this.vel[0];
  newY = this.pos[1] + this.vel[1];
  this.pos = [newX, newY];
  
  this.draw(ctx);
};
  

module.exports = MovingObject;