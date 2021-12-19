const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

let ctx = canvas.getContext("2d");

// 让填充色和边框色都变成同一个
ctx.strokeStyle = "green";
ctx.fillStyle = "green";

const drawLine = function (x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

// // ----------------------------------------------------
// // 非手机端

// let painting = false;

let lastMoveOrTouch;

// 设置判断条件，当鼠标按下时

canvas.onmousedown = (e) => {
  // drawLine(0, 0, e.clientX, e.clientY);
  painting = true;
  lastMoveOrTouch = [e.clientX, e.clientY];
};

// 当鼠标松开时
canvas.onmouseup = () => {
  painting = false;
};

canvas.onmousemove = (e) => {
  if (painting === true) {
    drawLine(lastMoveOrTouch[0], lastMoveOrTouch[1], e.clientX, e.clientY);
    lastMoveOrTouch = [e.clientX, e.clientY];
  }
};

// // --------------------------------------------
// // 手机端

// // 检测是否为手机端的函数，要判断的话需要执行它
// function is_touch_enabled() {
//   return (
//     "ontouchstart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   );
// }

// // 注意这里要用is_touch_enabled()，要执行这个函数
// if (is_touch_enabled() === true) {
//   canvas.ontouchmove = (e) => {
//     console.log(e);
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(
//       e.touches[0].clientX,
//       e.touches[0].clientY,
//       5,
//       0,
//       Math.PI * 2,
//       true
//     ); // 绘制
//     ctx.stroke();
//   };
// }
