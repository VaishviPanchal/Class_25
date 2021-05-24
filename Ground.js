class Ground{
    constructor(x,y,w,h)
    {
        var option ={
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width = w;
        this.height = h;
        World.add(world,this.body);
        this.image = loadImage("sprites/ground.png")
    }
    display(){
        
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}