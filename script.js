const lines = document.querySelectorAll(".line");
const transcript = document.getElementById("transcript");
const modeBtn = document.getElementById("modeBtn");
const fontBtn = document.getElementById("fontBtn");
const slider = document.getElementById("fontSize");

let current = 0;
let interval = null;
let autoPlay = true;
let expressionsOn = true;

// ---------------- ACTIVE LINE ----------------
function setActive(index) {
  lines.forEach(line => line.classList.remove("active"));
  lines[index].classList.add("active");
}

// ---------------- AUTOPLAY ----------------
function startAuto() {
  stopAuto();

  interval = setInterval(() => {
    current = (current + 1) % lines.length;
    setActive(current);
  }, 3000);
}

function stopAuto() {
  clearInterval(interval);
}

// ---------------- MODE TOGGLE ----------------
function toggleMode() {
  autoPlay = !autoPlay;

  if (autoPlay) {
    modeBtn.textContent = "Zelf lezen";
    transcript.classList.remove("read");
    startAuto();
  } else {
    modeBtn.textContent = "Autoplay";
    transcript.classList.add("read");
    stopAuto();
  }
}

// ---------------- FONT TOGGLE ----------------
function toggleFont() {
  document.body.classList.toggle("mono");

  fontBtn.textContent = document.body.classList.contains("mono")
    ? "Standaard font"
    : "Monospace";
}

// ---------------- EXPRESSIES ----------------
function toggleExpressions() {
  expressionsOn = !expressionsOn;
  document.body.classList.toggle("no-expressions", !expressionsOn);
}

// ---------------- FONT SIZE ----------------
slider.addEventListener("input", () => {
  transcript.style.fontSize = slider.value + "px";
});

// ---------------- START ----------------
window.onload = () => {
  setActive(current);
  startAuto();
};

// DARK / LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
});

// EMOJI TOGGLE
const emojiToggle = document.getElementById("emojiToggle");

emojiToggle.addEventListener("change", () => {
  document.body.classList.toggle("no-emojis", !emojiToggle.checked);
});


const progressBar = document.getElementById("progressBar");

setInterval(() => {
  let percent = ((current + 1) / lines.length) * 100;
  progressBar.style.width = percent + "%";
}, 500);