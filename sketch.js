function setup() {
  createCanvas(500, 500);

fill(0)
strokeWeight(3)
rectMode(CENTER)
let space = 50
for(x=0;x<width+50;x+=space)
for(y=0;y<width+50;y+=space)
  square(x,y,10)
square(x+space/2, y+space/2, 10)
}