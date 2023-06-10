class Boat {
constructor(x,y,width,height,boatpos)
{
var options = {
restitution:0.8,
friction:1,
density:1
}
this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
this.width = width;
this.height = height;
this.boatposition = boatpos;
this.image = loadImage("./assets/boat.png");

}
display() {
var pos = this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,this.boatposition,this.width,this.height);
pop();
}
remove(index) {
setTimeout(()=>{
World.remove(world, this.body);
delete boats[index];
}, 2000

);


}
} 
