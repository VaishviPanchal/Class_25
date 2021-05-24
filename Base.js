class Base{

        constructor(x,y,width,height){
            var option = {
                restitution : 0.3,
                mass : 0.7,
                friction : 0.5
            }
            this.image = loadImage("sprites/base.png");  
            this.body = Bodies.rectangle(x,y,width,height,option);
            this.width = width;
            this.height = height;
            World.add(world,this.body);
        }
    
        display(){
            //help us to display the box
            var pos = this.body.position
            var angle = this.body.angle
            push()
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);

            /*rectMode(CENTER);
            rect(0,0,this.width,this.height)*/
            pop()
        }
}