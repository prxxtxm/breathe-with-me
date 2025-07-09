
const breatheText = document.getElementById('breathe-text');
const audio = document.getElementById('bg-music');

const phases = ['Inhale…', 'Hold…', 'Exhale…', 'Hold…'];
let index = 0;

setInterval(() => {
  breatheText.textContent = phases[index % phases.length];
  index++;
}, 3500);

function toggleMusic() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
