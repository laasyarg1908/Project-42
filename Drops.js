class Drops
{
    constructor(x,y)
    {
        var options = {
            friction: 0.1,
            restitution: 0.1
        }
        this.x = x;
        this.y = y
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world, this.rain);
    }

    update()
    {
        if(this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
    }

    ellipseDrops()
    {
        
        fill("blue");
        ellipse(this.rain.position.x, this.rain.position.y, 5);

    }

}