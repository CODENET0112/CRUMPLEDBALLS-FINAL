class Paper
{
    constructor(x,y,r)
    {
     var options=
     {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:0.4
         
     }
         this.body= Bodies.circle(x,y,r/2,options)
         this.radius = r;
         this.image=loadImage("paper.png")
         World.add(world, this.body)
    }
   
    display(){
        var pos =this.body.position;
        fill("white"); 
        //ellipseMode(RADIUS)
       //ellipse(pos.x,pos.y,this.radius,this.radius);
       image(this.image,pos.x,pos.y,this.radius/2,this.radius/2);
    
      
    }
}