class Launcher{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.1,
            length: 10
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
        console.log(this.launcher)
    }

    fly()
    {
        this.launcher.bodyA=null;
    }

    display(){
        if(this.launcher.bodyA) {
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }

  attach(body){
    this.launcher.bodyA = body}
} 