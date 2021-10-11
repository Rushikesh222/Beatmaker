class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playbtn = document.querySelector(".play");
    this.kickAudio = document.querySelectorAll(".kick-sound");
    this.snareAudio = document.querySelectorAll(".snare-sound");
    this.hihatAudio = document.querySelectorAll(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    console.log(activeBars);

    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3 alternate ease-in-out`;
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
      console.log(`start`);
    }, interval);
  }
}

const drumKit = new Drumkit();
drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playbtn.addEventListener("click", function () {
  drumKit.start();
  console.log(this);
});
