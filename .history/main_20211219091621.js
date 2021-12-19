canvass.onclick = (e) => {
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);

  let div = document.createElement("div");
  console.log(div);
  div.style.border = "1px solid red";
  div.style.height = "6px";
  div.style.width = "6px";
  div.style.background = "red";

  div.style.position = "absolute";
  // 注意需要加上'px'
  div.style.top = e.clientY + "px";
  div.style.left = e.clientX + "px";

  // 如果不在canvass里添加div，那么这个div是添加在内存里
  canvass.appendChild(div);
};
