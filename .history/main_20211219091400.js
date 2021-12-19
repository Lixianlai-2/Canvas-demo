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
  div.style.top = e.clientY;
  div.style.left = e.clientX;

  canvass.appendChild(div);
};
