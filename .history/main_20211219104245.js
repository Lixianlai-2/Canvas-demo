const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

var ctx = canvas.getContext("2d");
// 画颜色
ctx.fillStyle = "rgb(200,0,0)";

canvas.onmousemove = (e) => {
  console.log(e);

  // x坐标，y坐标，长宽
  ctx.fillRect(e.clientX - 5, e.clientY - 5, 10, 10);
};

// 画圆形
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
