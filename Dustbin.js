
class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            'restitution' : 0 ,
            'friction': 1,
            'density': 0.1
        }
this.body=Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image=loadImage("dustbingreen.png")
World.add(world, this.body);

this.leftbody = Bodies.rectangle(x, y-height/2, height, width,options);
World.add(world, this.leftbody);
this.rightbody=Bodies.rectangle(x+width, y-height/2, height, width,options);
World.add(world, this.rightbody);
     
}
display(){
    rectMode(CENTER);

    fill(255,165,0);

    push () ;
    translate(this.leftbody.position.x, this.leftbody.position.y)
    rect(0,0, this.height,this.width);
    pop();

    push () ;
    translate(this.rightbody.position.x, this.rightbody.position.y)
    rect(0,0, this.height,this.width);
    pop();

    push () ;
    translate (this.body.position.x-18, this.body.position.y+80);
    image(this.image,0,0, this.width+32,this.height-180);
    pop();
}
};
