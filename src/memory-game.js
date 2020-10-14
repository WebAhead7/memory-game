const INITLEVEL = 2; // Number of boxes in first level.
const TIMER = 3; // Timer start with this number and go down till zero.
const SECOND = 1000;

class MemoryGame {
  constructor() {
    this.disappeared = false;
    this.timer = TIMER;
    this.currentLevel = INITLEVEL;
    this.count = 1;
    this.containerElem = document.querySelector(".container");
    this.counterElem = document.querySelector(".counter");
    this.currentScoreElem = document.querySelector(".currentScore");
    this.maxScoreElem = document.querySelector(".maxScore");
    this.linkMenueButtoms();
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

  linkMenueButtoms() {
    const restartElem = document.querySelector(".restart");
    const mainElem = document.querySelector(".main");
    restartElem.addEventListener("click", () => {
      this.currentLevel = 2;
      this.setCurrentScore(0);
      this.start();
    });
    mainElem.addEventListener("click", () => {
      console.log("hey");
      this.updateCurrentPlayer();
      window.location.href = "../index.html";
    });
  }

  setCounter(second) {
    this.counterElem.innerText = second;
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
    box.style.marginTop = this.getRandomMargin();
    box.style.marginLeft = this.getRandomMargin();
    this.listenToBoxClick(box);
    this.containerElem.appendChild(box);
  }

  getRandomMargin() {
    return Math.floor(Math.random() * 50) + 30 + "px";
  }

  clearBoxes() {
    while (this.containerElem.firstChild) {
      this.containerElem.removeChild(this.containerElem.firstChild);
    }
  }
  createBoxes(level) {
    this.createShuffledArray(level).forEach((number) => {
      this.createBox(number);
    });
  }

  getCurrentScore(score) {
    return Number(this.currentScoreElem.textContent);
  }
  setCurrentScore(score) {
    this.currentScoreElem.textContent = score;
  }
  getMaxScore(score) {
    return Number(this.maxScoreElem.textContent);
  }
  setMaxScore(score) {
    this.maxScoreElem.textContent = score;
  }
  listenToBoxClick(box) {
    box.addEventListener("click", (e) => {
      if (!this.disappeared) {
        return;
      } else if (this.disappeared && Number(e.target.innerText) == this.count) {
        e.target.classList.add("disappear");
        e.target.style.color = "#f3f3f3";
        this.count++;
        if (this.currentLevel == this.count - 1) {
          this.setCurrentScore(this.getCurrentScore() + this.currentLevel);
          if (this.getCurrentScore() > this.getMaxScore()) {
            this.setMaxScore(this.getCurrentScore());
          }
          this.currentLevel++;
          this.start();
        }
      } else {
        this.setCurrentScore(0);
        this.currentLevel = INITLEVEL;
        this.start();
      }
    });
  }

  updateCurrentPlayer() {
    console.log(window.localStorage);
    const currentPlayerName = window.localStorage.getItem("currentPlayer");
    const logArr = JSON.parse(window.localStorage.getItem("logArr"));
    console.log(logArr);
    logArr.some((elem, index) => {
      if (elem.name == currentPlayerName) {
        logArr[index] = { name: currentPlayerName, score: this.getMaxScore() };
        return true;
      }
      return false;
    });
    window.localStorage.setItem("logArr", JSON.stringify(logArr));
  }

  startCounter() {
    clearInterval(this.timeEnterval);
    this.timeEnterval = setInterval(() => {
      const counterElem = this.counterElem;
      const counter = Number(counterElem.innerText);
      if (counter > 0) {
        counterElem.innerText = counter - 1;
      }
      if (this.disappeared == false && counter - 1 == 0) {
        this.disappeared = true;
        this.containerElem.childNodes.forEach((elem) => {
          elem.style.color = "rgb(55, 187, 169)";
        });
      }
    }, SECOND);
  }
}

const memoryGame = new MemoryGame();
memoryGame.start();
