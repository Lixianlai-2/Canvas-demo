const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

let ctx = canvas.getContext("2d");

// 让填充色和边框色都变成同一个
ctx.strokeStyle = "green";
ctx.fillStyle = "green";

// //如果不用beginPath()，页面会被拖动
// ctx.beginPath();
// // 起点位置
// ctx.moveTo(10, 20);

// // 终点位置
// ctx.lineTo(100, 130);

// // 第三个点的位置
// ctx.lineTo(400, 240);

// //将最后一个点和第一个点连接起来
// ctx.closePath();

// // 画线
// ctx.stroke();

// --------------------------------------------
// 手机端

// 检测是否为手机端的函数，要判断的话需要执行它
function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

// 注意这里要用is_touch_enabled()，要执行这个函数
if (is_touch_enabled() === true) {
  canvas.ontouchmove = (e) => {
    console.log(e);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(
      e.touches[0].clientX,
      e.touches[0].clientY,
      5,
      0,
      Math.PI * 2,
      true
    ); // 绘制
    ctx.stroke();
  };
}

// ----------------------------------------------------
// 非手机端

let painting = false;

let lastMoveOrTouch;

// 设置判断条件，当鼠标按下时
canvas.onmousedown = (e) => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.moveTo(e.clientX, e.clientY);
  // lastMoveOrTouch = [e.clientX, e.clientY];
  painting = true;
};

// 当鼠标松开时
canvas.onmouseup = () => {
  painting = false;
};

canvas.onmousemove = (e) => {
  ctx.moveTo(0, 0);
  ctx.moveTo(e.clientX, e.clientY);
  ctx.stroke();
  // 注意不是=，这是赋值
  if (painting === true) {
    // 画颜色
    // ctx.fill();
    // ctx.beginPath();
    // ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2, true); // 绘制
    // ctx.stroke();
  }
};
