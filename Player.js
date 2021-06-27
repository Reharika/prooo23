class Player {
    constructor(x,y,width,height){
        var options = {
            isStatic = true
        };
        
        this.Body =Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        this.image = loadImage("./assests/player.png")

        World.add(world,this.Body);
    }
    display() {
        var pos = this.Body.position;
        var angle = this.Body.angle;
    
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop()
    }
    
}
