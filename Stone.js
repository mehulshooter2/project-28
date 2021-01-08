class Stone{

    constructor(x,y,diametre){
       var options = {
        isStatic  : false,
        restitution :0,
        friction:1,
        density:1.2
       }
        this.body = Bodies.circle(x,y,diametre/2,options);
       this.image = loadImage("sprites/stone.png")
        this.diametre = diametre
        World.add(world,this.body);
    }

    display(){
        push()
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        fill("white");
        image(this.image,0,0,this.diametre,this.diametre);
        pop()
    }

}
