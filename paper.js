class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       // this.x=x;
        //this.y=y;
       
        this.body=Bodies.circle(x,y,radius/2,options);
      
        World.add(world,this.body);
        this.radius=radius/2;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();



    }
};