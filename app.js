let calc = document.querySelector(".calc");
let box = document.querySelector(".bx");
let b;

calc.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    b = calc.value;
    const countSentanceSymbols = () => b.length ;
    console.log(countSentanceSymbols(b));
    box.innerHTML = countSentanceSymbols(b);
   
  }


});
