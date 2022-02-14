class Estilingue {
  constructor(bodyA,pointB){
    var options = {
      bodyA: bodyA,
      pointB: pointB, 
      length: 5,
      stiffness: 0.2
    };
    this.pointB = pointB;
    this.estilingue = Matter.Constraint.create(options);
    World.add(world,this.estilingue);
  }
  voar(){
    this.estilingue.bodyA = null;
  }

  display(){
    if(this.estilingue.bodyA){
    var A = this.estilingue.bodyA.position;
    var B = this.pointB;
    stroke(255);
    line(A.x,A.y,B.x,B.y);
    }
  }
}