let current = 0;
const lines = document.querySelectorAll(".line");

function nextLine() {
  lines[current].classList.remove("active");
  current++;

  if (current >= lines.length) {
    current = 0;
  }

  lines[current].classList.add("active");
}


window.onload = function () {

  let current = 0;
  const lines = document.querySelectorAll(".line");

  // automatische transcript
  setInterval(() => {
    lines[current].classList.remove("active");
    current++;

    if (current >= lines.length) {
      current = 0;
    }

    lines[current].classList.add("active");
  }, 2000);

  // tekstgrootte aanpassen
  const slider = document.getElementById("fontSize");
  const transcript = document.getElementById("transcript");

  slider.addEventListener("input", function(e) {
    transcript.style.fontSize = e.target.value + "px";
  });

};

