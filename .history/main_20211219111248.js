const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

let ctx = canvas.getContext("2d");

let painting = false;
// 设置判断条件，当鼠标按下时
canvas.onmousedown = () => {
  painting = true;
};

// 当鼠标松开时
canvas.onmouseup = () => {
  painting = false;
};

canvas.onmousemove = (e) => {
  // 注意不是=，这是赋值
  if (painting === true) {
    // 画颜色
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.arc(e.clientX, e.clientY, 10, 0, true);
  } else {
    console.log("Nothing happened");
  }
};

// 画圆形
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
