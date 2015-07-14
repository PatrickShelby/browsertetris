
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 600;



  var piece = function(name) {
 var array = [];
 var coordinates = [];

 if (name === "single") {
    coordinates.push(0,0)
  }

  if (name === "block") {
    coordinates.push(0,0,0,1,1,0,1,1)
  }

  for (i=0;i<coordinates.length;i+=2) {
    x = coordinates[i]
    y = coordinates[i + 1]
    a = new square(x,y)
    array.push(a)
  }

  var drop = function() {
    for (i=1;i<array.length;i++){
      this.array[i].y += 30;
    };
    return this;
  };
}


var square = function(x, y) {
  var unit = 30;
  x = x*unit
  y = y*unit
  this.y = y
  this.x = x
  ctx.rect(x,y,30,30);
  ctx.stroke();

};

var gravity = function() {

}

a = new piece("block")
a.coordinates;
a.drop();



var start = null;
