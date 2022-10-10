function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a, b;
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const result = document.querySelector(".result");

first.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    a = first.value;
  }
});
second.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    b = second.value;
    result.innerHTML = random(a, b);
    result.style = "border: 2px solid black";
  }
});


  setTimeout(()=>{
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }, 100);


  