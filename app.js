class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playbtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isplaying = null;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);

    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;

      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    if (!this.isplaying) {
      this.isplaying = setInterval(() => {
        this.repeat();
        console.log(`start`);
      }, interval);
    } else {
      clearInterval(this.isplaying);
      this.isplaying = null;
    }
  }

  updatebtn() {
    console.log(this.isplaying);
    if (!this.isplaying) {
      this.playbtn.innerText = "Stop";
      this.playbtn.classList.add("active");
    } else {
      this.playbtn.innerText = "Play";
      this.playbtn.classList.remove("active");
    }
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
  drumKit.updatebtn();
});
