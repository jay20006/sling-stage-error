class Box {
  constructor(x, y, width, height, angle) {
    var options = {
        restitution:0.8,
        friction:1.0,
       // 'density':1.0
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
   // this.image=loadImage("polygon.png");
  }
  display(){
    var angle = this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    rect(0,0,this,widht,this.height);
    pop();
  }
}
