var points = []
var multi = 0.005


var r1
var r2
var g1
var g2
var b1
var b2


function setup() {
  var canvas=createCanvas(windowWidth, windowHeight);
  canvas.parent(sketch)
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)
  
  
  var density = 30
  var space = width/density
  
  for(var x = 0; x<width;x+=space){
    for (var y = 0; y<height;y+=space){
      var p = createVector(x + random(-10,10),y + random(-10,10))
      points.push(p)
    }
  }
  
  shuffle(points,true)
  
r1 = random(255)
r2 = random(255)
g1 = random(255)
g2 = random(255)
b1 = random(255)
b2 = random(255)
  
multi = random(0.002,0.01)
}


function draw() {
  noStroke()
  
  if (frameCount *2 <= points.length){
    var max = 400
  }
  else{
    var max = points.length
  }
  
  
  for(var i = 0; i<max; i++){
    
    var r = map(points[i].x,0,width,r1,r2)
    var g = map(points[i].y,0,height,g1,g2)
    var b = map(points[i].x,0,width,b1,b2)
    var alpha = map(dist(width/2, height / 2, points[i].x, points[i].y),0,350, 400, 0)
    
    fill(r,g,b, alpha)
    var angle = map(noise(points[i].x * multi ,points[i].y * multi),0,1,0,720)
    
    points[i].add(createVector(cos(angle),sin(angle)))
    
    
    if (dist(width/2,height/2,points[i].x,points[i].y)  <  350  ) {
      
      
    
     Math.random()  >0.5? rect(points[i].x,points[i].y,random(5),random(5)):ellipse(points[i].x,points[i].y,1)
    }
    
    
    
    
    
    
    
    
    
    
  }
    
  
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}