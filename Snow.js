class Snow{
    constructor(x,y){
        var options = {
            friction:0.4,
            density:0.8
        }
        this.r = r
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.SnowImg = loadImage("snow4.webp");
    }

    display(){
        pos = this.body.position;
        angle = this.body.angle;
        
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.SnowImg,pos.x,pos.y)
        noStroke();
        fill("white");
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop()

    }
}