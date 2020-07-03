let viewPane1;

function setup() {
  let disDen = displayDensity()
  pixelDensity(disDen);
  createCanvas(600, 600);
  var viewPaneSize = 200;
   viewPane1 = new ViewPane(20, 20, viewPaneSize, viewPaneSize);
}

function draw() {
  viewPane1.draw();
}

class ViewPane {
  constructor(_x, _y, _w, _h){
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
  }

  draw(){
    var forcalLen = 35;
    var dist = 10;
    translate(this.x, this.y);
    push();
    fill(230);
    noStroke();
    rect(0, 0, this.w, this.h);

    fill(0);
    ellipse(60, this.h/2, 20, 20);
    ellipse(60, this.h*4/5, 15, 80);
    pop();
  }
}
