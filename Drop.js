class Drop{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.00000002
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
       World.add(world, this.body)
}

display(){
    push();
        translate(this.body.position.x, this.body.position.y);
        fill("lightblue")
        ellipseMode(CENTER);
        ellipse( 0, 0, this.radius/2, this.radius/2);
        pop();
}

update(){
    if(this.body.position.y > 700){
       Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,100)})
    }
}

}