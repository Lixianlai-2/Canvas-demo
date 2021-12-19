const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 11, 11);

canvas.onclick = (e) => {
  console.log(e);
  e.clientX.fillStyle = "rgb(200,0,0)";
  e.clientY.fillStyle = "rgb(200,0,0)";
};
