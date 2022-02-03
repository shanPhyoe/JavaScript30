const keys = document.querySelectorAll(".key");

const playSound = function (audio) {
  audio.currentTime = 0;
  audio.play();
};

const removeTransform = function (e) {
  if (e.propertyName !== "transform") return; // if not transform
  this.classList.remove("playing");
};

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key[data-code="${e.code}"]`);
  const audio = document.querySelector(`audio[data-code="${e.code}"]`);
  if (!audio) return; // if keys other than described keys are pressed
  playSound(audio);
  key.classList.add("playing");
});

keys.forEach((key) =>
  key.addEventListener("click", function (e) {
    const code = e.target.closest(".key").dataset.code;
    if (!code) return;
    const audio = document.querySelector(`audio[data-code="${code}"]`);
    playSound(audio);
    key.classList.add("playing");
  })
);
keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
