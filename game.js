
window.onload = function() {
  canvasTetris();
  startGame();
};

function canvasTetris() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  canvas.height = 600;
  canvas.width = 300;

}

function pieceDog() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  image = document.getElementById('source');
    var scaleFactor=0.2;
  ctx.drawImage(image, 0, 0, image.width*scaleFactor, image.height*scaleFactor);

}


