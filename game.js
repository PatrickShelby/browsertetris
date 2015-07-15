
// blockCoordinates = [4,0,4,1,5,0,5,1];
// singleCoordinates = [0,0];
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// canvas.width = 300;
// canvas.height = 600;
// var handle = 0



// var piece = function(name) {

//   this.name = name

//   var renderLoop = function(name) {
//       this.name = name
//       for(i=1;i<name.length;i+=2){
//         name[i] += 1
//       };

//       if (name[1] < 19) {
//       canvas.width = canvas.width
//       drawPiece(name);

//       handle = window.requestAnimationFrame(renderLoop);
//       }
//           };renderLoop();



//     if (name === "single") {
//       renderLoop(singleCoordinates);
//     };
//     if (name === "block") {
//        drawPiece(blockCoordinates);
//     };
//   };

//   var drawPiece = function(coordinates){
//     for (i=0;i<coordinates.length;i+=2) {
//       x = coordinates[i];
//       y = coordinates[i + 1];
//       a = new square(x,y);
//       console.log(a);
//     }
//   }

//   var square = function(x, y) {
//     var unit = 30;
//     x = x*unit
//     y = y*unit
//     this.y = y
//     this.x = x
//     ctx.rect(x,y,30,30);
//     ctx.stroke();

//   };

//   var gravity = function() {

//   }

//   a = new piece("block")
//   a.coordinates;




//   var start = null;











Game = {
  FRAME_DELAY: 1000,
  lastTick: 0,
  pieces: []
};

Game.start = function(){
  Game.onAnimationFrame();
};

Game.onAnimationFrame = function(){
  var now = new Date().getTime();
  if ((now - this.lastTick) > this.FRAME_DELAY){
    this.tick();
  }
  requestAnimationFrame(this.onAnimationFrame);
}.bind(Game);

Game.tick = function(){
  this.lastTick = new Date().getTime();
  console.log('GAME TICK');
  this.pieces.forEach(function(piece){
    piece.drop();
  });
  this.redraw();
}




Game.redraw = function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // WTF PANDA! (why????)
  ctx.clearRect(0, 0,9999,9999);
  canvas.width = canvas.width

  this.pieces.forEach(function(piece){
    ctx.rect(piece.x,piece.y,30,30);
    ctx.stroke();
  });
  return this;
};




Game.Piece = function(options){
  this.x = options.x;
  this.y = options.y;
};
Game.Piece.prototype.drop = function(){
  this.y += 10;
};

Game.pieces.push(new Game.Piece({x:0,y:0}))


//   var drawPiece = function(coordinates){
//     for (i=0;i<coordinates.length;i+=2) {
//       x = coordinates[i];
//       y = coordinates[i + 1];
//       a = new square(x,y);
//       console.log(a);
//     }
//   }

//   var square = function(x, y) {
//     var unit = 30;
//     x = x*unit
//     y = y*unit
//     this.y = y
//     this.x = x
//     ctx.rect(x,y,30,30);
//     ctx.stroke();

//   };









Game.start();




