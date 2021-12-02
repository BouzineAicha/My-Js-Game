const btn = document.getElementById("btn");
const prompt_box = document.getElementById("prompt_box");
const promt_txt = document.getElementById("promt_txt");
const txt = document.getElementById("txt");
const num = document.getElementById("num");

let chancesTxt = document.getElementById("attemptsTxt");
let randomNumber = Math.floor(Math.random() * 100) + 1;
// let rightAudio=new Audio('ASSETS\Congratulations, Abhinandan Status.mp3 ');
// let wrongAudio=new Audio('ASSETS\incorrect sound effect.mp3');

let number;
let attempts = 10;
attemptsTxt.innerHTML = "attempts: " + attempts;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(num.Value);
  attempts--;
  attemptsTxt.innerHTML = "attempts: " + attempts;
  if (attempts == 0) {
    activateBox("Lost 👎");
    // rightAudio.play();
  }
  number = num.value;
  checkNum(number);
  num.value = "";
});

function checkNum(number) {
  if (number == randomNumber) {
    if(attempts>=7){ 
      activateBox("are genius 🤓 , you win") 
    }
    // wrongAudio.play();
  }
    if (number == randomNumber) {
    activateBox("Win 👍");
    // wrongAudio.play();
  } else if (number > randomNumber) {
    txt.innerHTML = "your Nember is large";
  } else {
    txt.innerHTML = "your Nember is small";
  }
}

function activateBox(e) {
  prompt_box.classList.add("active");
  promt_txt.innerHTML = "  You " + e + " The Game 🎮";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}

function play(e) {
  prompt_box.classList.remove("active");
  attempts =10;
  txt.innerHTML = "";
  attemptsTxt.innerHTML = "attempts: " + attempts;
}
