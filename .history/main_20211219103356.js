const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200,0,0)";

canvas.onmousemove = (e) => {
  console.log(e);
  ctx.fillRect(e.clientX - 5, e.clientY - 5, 10, 10);
};
