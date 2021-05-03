class Umbrella {
    constructor(){

        var options = {
           'isStatic':true
            
        }
        
        this.body = Bodies.circle(200, 550, 120, options);
        World.add(world, this.body);
        this.image = loadImage("images/Walking-Frame/walking_1.png");
        this.radius = 120;
        
    }

    display(){
       
        var angle = this.body.angle;
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0, 0, 350, 350);
        pop ();
    }
}

