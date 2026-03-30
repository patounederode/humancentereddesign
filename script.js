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