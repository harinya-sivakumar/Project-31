class Lightning {
    constructor(x,y){

        var options = {
           'isStatic':true
            
        }
        
        this.body = Bodies.rectangle(x, y, 2, 2, options);
        World.add(world, this.body);
        this.image1 = loadImage("images/thunderbolt/1.png");
        this.image2 = loadImage("images/thunderbolt/2.png");
        this.image3 = loadImage("images/thunderbolt/3.png");
        this.image4 = loadImage("images/thunderbolt/4.png");
        this.width = 2;
        this.height = 2;
        
    }

    display(){
       
        

        var angle = this.body.angle;
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        var rand = Math.round(random(1,4))
        if(rand == 1){
            imageMode(CENTER)
            image(this.image1, 0, 0, 400, 400);
        }
        if(rand == 2){
            imageMode(CENTER)
            image(this.image2, 0, 0, 400, 400);
        }
        if(rand == 3){
            imageMode(CENTER)
            image(this.image3, 0, 0, 400, 400);
        }
        if(rand == 4){
            imageMode(CENTER)
            image(this.image4, 0, 0, 400, 400);
        }
        
        pop ();
    }
}

