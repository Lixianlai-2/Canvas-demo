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

  canvass.appendChild(div);
};
