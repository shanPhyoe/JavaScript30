const clockFaceSet = function (hand, deg) {
  hand.style.transition = deg == 90 ? `none` : `all .3s ease`;
  hand.style.transform = `translate(-100%) rotate(${deg}deg)`;
};

const tick = function () {
  const secHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  // + 90 for default starting at 12 o'clock
  const secDegree = second * 6 + 90; // 1s should have 6deg (360deg/60s)
  const minDegree = minute * 6 + 90;
  const hourDegree = hour * 30 + 90 + minute / 2;
  // 1hour should have 30deg to complete 360deg with 12 hours
  // minute / 2 to get accurate pointing of hour hand

  clockFaceSet(secHand, secDegree);
  clockFaceSet(minHand, minDegree);
  clockFaceSet(hourHand, hourDegree);
};

setInterval(() => tick(), 1000);
