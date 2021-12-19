const canvas = document.querySelector("#canvass");
console.log(canvas);
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
console.log(screen);

let ctx = canvas.getContext("2d");

// 让填充色和边框色都变成同一个
ctx.strokeStyle = "green";
ctx.fillStyle = "green";

// --------------------------------------------
// 手机端

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (is_touch_enabled === true) {
  canvas.ontouchmove = (e) => {
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

    ctx.fill();
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2, true); // 绘制
    ctx.stroke();
  }
};
