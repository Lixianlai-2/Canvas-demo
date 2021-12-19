canvass.onclick = (e) => {
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);

  let div = document.createElement("div");
  console.log(div);
  div.style.border = "1px solid red";
};
