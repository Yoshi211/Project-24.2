class paper{
    constructor(x,y,radius){
        var options = {
            'isStatic': false,
            'restitution': 0.1,
            'density': 1.2,
            'friction': 0.3
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        circle(pos.x,pos.y,this.radius);
    }
}