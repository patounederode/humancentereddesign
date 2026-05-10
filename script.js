// ----- Elementen selecteren -----
const lines = document.querySelectorAll(".line");
const transcript = document.getElementById("transcript");
const modeBtn = document.getElementById("modeBtn");
const fontBtn = document.getElementById("fontBtn");
const slider = document.getElementById("fontSize");
const themeToggle = document.getElementById("themeToggle");
const emojiToggle = document.getElementById("emojiToggle");
const progressBar = document.getElementById("progressBar");

// ----- State variabelen -----
let current = 0;
let interval = null;
let autoPlay = true;
let expressionsOn = true;

// ----- Functies -----

// actieve regel
function setActive(index) {
  lines.forEach(line => line.classList.remove("active"));
  lines[index].classList.add("active");
}

// Start automatisch afspelen
function startAuto() {
  stopAuto(); // eerst stoppen als er al iets loopt
  interval = setInterval(() => {
    current = (current + 1) % lines.length;
    setActive(current);
    updateProgress();
  }, 3000);
}

// Stop automatisch afspelen
function stopAuto() {
  clearInterval(interval);
}

// Wissel tussen autoplay en zelf lezen
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

// Wissel tussen standaard en monospace font
function toggleFont() {
  document.body.classList.toggle("mono");
  fontBtn.textContent = document.body.classList.contains("mono")
    ? "Standaard font"
    : "Monospace";
}

// Toggle gezichtsuitdrukkingen
function toggleExpressions() {
  expressionsOn = !expressionsOn;
  document.body.classList.toggle("no-expressions", !expressionsOn);
}

// Pas lettergrootte aan
slider.addEventListener("input", () => {
  transcript.style.fontSize = slider.value + "px";
});

// Toggle dark/light mode
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
});

// Toggle emoji weergave
emojiToggle.addEventListener("change", () => {
  document.body.classList.toggle("no-emojis", !emojiToggle.checked);
});

// Update voortgangsbalk
function updateProgress() {
  let percent = ((current + 1) / lines.length) * 100;
  progressBar.style.width = percent + "%";
}

// ----- Start script -----
window.onload = () => {
  setActive(current);
  startAuto();
};


window.onload = () => {
  setActive(current);
  startAuto();

  // emojis standaard uitzetten bij laden
  document.body.classList.add("no-emojis");
};