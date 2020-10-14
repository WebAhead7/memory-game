class MemoryGame {
  constructor() {
    this.count = 1;
    this.container = document.querySelector(".container");
    this.counter = document.querySelector(".counter");
  }
  start() {
    this.createBoxes();
    this.startCounter();
  }
  createShuffledArray(level) {
    return Array.from({ length: level }, (_, index) => index + 1).sort(() => {
      return Math.random() - 0.5;
    });
  }
  createBox(number) {
    const box = document.createElement("div");
    box.innerText = number;
    box.classList.add("box");
    this.listenToBoxClick(box);
    this.container.appendChild(box);
  }
  createBoxes() {
    this.createShuffledArray(4).forEach((number) => {
      this.createBox(number);
    });
  }
  listenToBoxClick(box) {
    box.addEventListener("click", function (e) {
      console.log(this.count);
      if (Number(e.target.innerText) == this.count) {
        // e5tfe
        e.target.classList.add("ifright");
        e.target.style.color = "rgb(55, 187, 169)";
        this.count++;
      } else {
        e.target.style.background = "red";
      }
    });
  }
  startCounter() {
    setInterval(() => {
      const counter = this.counter;
      if (Number(counter.innerText) > 0)
        counter.innerText = Number(counter.innerText) - 1;
      if (Number(counter.innerText) == 0) {
        this.container.childNodes.forEach((elem) => {
          elem.style.color = "rgb(55, 187, 169)";
        });
      }
    }, 1000);
  }
}

const memoryGame = new MemoryGame();
memoryGame.start();
