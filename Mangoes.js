class Mango{

    constructor(x,y,diametre){
       var options = {
        isStatic  : true,
        restitution :0,
        friction:1
       }
        this.body = Bodies.circle(x,y,diametre/2,options);
        this.image = loadImage("sprites/mango.png");
        this.diametre = diametre;
        World.add(world,this.body);
    }

    display(){
        
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        fill("orange");
        image(this.image,0,0,this.diametre,this.diametre);
        pop()
    }

}
