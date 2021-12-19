canvass.onclick = (e) => {
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);

  let div = document.createElement("div");

  // 制作圆点样式
  div.style.border = "1px solid red";
  div.style.height = "20px";
  div.style.width = "20px";
  div.style.background = "red";
  div.style.borderRadius = "50%";
  // -----------------------------------
  // 进行定位
  div.style.position = "absolute";
  // 注意需要加上'px'
  div.style.top = e.clientY + "px";
  div.style.left = e.clientX + "px";

  // 让点击处处于中心
  div.style.marginTop = "-10px";
  div.style.marginLeft = "-10px";

  // 如果不在canvass里添加div，那么这个div是添加在内存里
  canvass.appendChild(div);
};
