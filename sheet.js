class MemoryGame {
  constructor() {
    this.disappeared = false;
    this.timer = 3;
    this.currentLevel = 2;
    this.count = 1;
    this.container = document.querySelector(".container");
    this.counter = document.querySelector(".counter");
  }
  start() {
    const level = this.currentLevel;
    this.timeEnterval;
    this.disappeared = false;
    this.count = 1;
    this.clearBoxes();
    this.createBoxes(level);
    this.setCounter(3);
    this.startCounter();
  }

  setCounter(second) {
    this.counter.innerText = second;
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
    box.style.top = Movebokes() + "px";
    box.style.left = Movebokes() + "px";
    box.style.marginRight = Movebokes() + "px";
    box.style.marginBottom = Movebokes() + "px";
  }

  clearBoxes() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
  createBoxes(level) {
    this.createShuffledArray(level).forEach((number) => {
      this.createBox(number);
    });
  }
  listenToBoxClick(box) {
    box.addEventListener("click", (e) => {
      if (this.disappeared && Number(e.target.innerText) == this.count) {
        e.target.classList.add("disappear");
        e.target.style.color = "#f3f3f3";
        this.count++;
        if (this.currentLevel == this.count - 1) {
          this.currentLevel++;
          this.start();
        }
      } else {
      }
    });
  }
  startCounter() {
    clearInterval(this.timeEnterval);
    this.timeEnterval = setInterval(() => {
      const counterElem = this.counter;
      const counter = Number(counterElem.innerText);
      if (counter > 0) {
        counterElem.innerText = counter - 1;
      }
      if (this.disappeared == false && counter == 0) {
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

// getting random numbers to change places of the boxes
function Movebokes() {
  return Math.floor(Math.random() * 200) + 30;
}
