
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
  FRAME_DELAY: 100,
  lastTick: 0,
  pieces: [],
  maxLine: 570,
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
  this.pieces[this.pieces.length-1].drop();
  this.redraw();
}

// this.pieces.forEach(function(piece){
//     piece.drop(piece);
//   });




Game.redraw = function(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 600;

  // WTF PANDA! (why????)
  // ctx.clearRect(0, 0,9999,9999);
  canvas.width = canvas.width

  this.pieces.forEach(function(piece){
    ctx.rect(piece.x,piece.y,30,30);
    ctx.stroke();
  });
  return this;
};


Game.getMaxLine = function(){
  console.log(Game.pieces[0])
  console.log(Game.maxLine)
  for (i=0; i< Game.pieces.length; i++){
    if (Game.pieces[i].y === Game.maxLine) {
      Game.maxLine = (Game.pieces[i].y - 30);
    }
    else {
      console.log("fuck")
    }
    console.log(Game.maxLine)
  }
};

console.log(Game.maxLine);

Game.Piece = function(options){
  this.x = options.x;
  this.y = options.y;
};

Game.Piece.prototype.drop = function(current_piece){
  if (this.y < Game.maxLine) {
    this.y += 10;
  }
  else {
    Game.getMaxLine();
    Game.pieces.push(new Game.Piece({x:30,y:0,}))
  }

};

// if (!Game.Piece.drop();) {
  Game.pieces.push(new Game.Piece({x:30,y:0,}))
// }


// (Game.Board.maxLine) && (this.x !== Game.Board.maxLine.column)
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


Game.start()






