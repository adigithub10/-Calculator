let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".button");
let string = " ";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (eve) => {
    if (eve.target.innerHTML == "=") {
      string = eval(string);
      inputbox.value = string;
    } else if (eve.target.innerHTML == "AC") {
      string = " ";
      inputbox.value = string;
    } else if (eve.target.innerHTML == "C") {
      string = string.substring(0, string.length - 1);
      inputbox.value = string;
    } else {
      console.log(eve.target);
      string = string + eve.target.innerHTML;
      inputbox.value = string;
    }
  });
});

