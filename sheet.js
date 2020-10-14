class MemoryGame {
  constructor() {
    this.disappeared = false;
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
    box.addEventListener("click", (e) => {
      if (this.disappeared && Number(e.target.innerText) == this.count) {
        console.log(this.count);
        e.target.classList.add("disappear");
        e.target.style.color = "#f3f3f3";
        this.count++;
      } else {
      }
    });
  }
  startCounter() {
    setInterval(() => {
      const counter = this.counter;
      if (Number(counter.innerText) > 0) {
        counter.innerText = Number(counter.innerText) - 1;
      }
      if (this.disappeared == false && Number(counter.innerText) == 0) {
        this.disappeared = true;
        this.container.childNodes.forEach((elem) => {
          elem.style.color = "rgb(55, 187, 169)";
        });
      }
    }, 1000);
  }
}

const memoryGame = new MemoryGame();
memoryGame.start();
