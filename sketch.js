let angle=0;
let img;

function setup(){
    createCanvas(700,700,WEBGL);
    img=loadImage('face3.jpg');
  
}

function draw(){
    background(200);
    // normalMaterial();
    rectMode(CENTER);
    translate(0,0);
  pointLight(255,255,255,-200,0,100);
  
    push();
    rotateX(angle*0.1);
    rotateY(angle*0.1);
    rotateZ(angle*0.1);  
texture(img);
box(300,300,300);
  
    angle+=0.07;
}
