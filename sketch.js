var size = 30


function setup() {
  var canvas=createCanvas(windowWidth, windowHeight);
  canvas.parent(sketch)
}


function draw() {
  stroke(200)
  background('white');
  
  for(var i=-1; i<20;i++){
    
    for (var x = 0; x<width;x+=size*2.5){
      fill('white')
      
      rect(x,i*size*2.5,size,size)

    }
    for (var x = 0; x<width;x+=size*2.5){
      fill('white')
      rect(x+size,(0.5+(i*2.5))*size,size,size)

    }
    for (var x = 0; x<width;x+=size*2.5){
      fill('white')
      rect(x-size*0.5,(1+(i*2.5))*size,size,size)

    }
    for (var x = 0; x<width;x+=size*2.5){
      fill('white')
      rect(x+size*0.5,(1.5+(i*2.5))*size,size,size)

    }
    for (var x = 0; x<width;x+=size*2.5){
      fill('white')
      rect(x-size,(2+(i*2.5))*size,size,size)

    }
    
    
    
  }
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}