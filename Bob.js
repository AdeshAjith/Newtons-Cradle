class Bob{
    constructor(x,y,radius){
        var BobOptions={
            restitution:1,
            friction:0.5,
            density:1,
        }
        this.body = Bodies.circle(x,y,radius,BobOptions)
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push ()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop ()
    }
}