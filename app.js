addEventListener("click", (e) => {
    


  let circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = event.pageX - 12 + "px";
  circle.style.top = event.pageY - 12 + "px";
  document.body.appendChild(circle);

  setTimeout(function() {circle.remove();},1000)
  
});
