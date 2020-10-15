const INITLEVEL = 2; // Number of boxes in first level.
const TIMER = 3; // Timer start with this number and go down till zero.
const SECOND = 1000; // ms
const INITSCORE = 0;

const containerElem = document.querySelector(".container");
const counterElem = document.querySelector(".counter");
const currentScoreElem = document.querySelector(".currentScore");
const maxScoreElem = document.querySelector(".maxScore");

const storage = window.localStorage;

let timeEnterval = undefined;
let numbersInBoxesDisappeared = false;
let currentLevel = INITLEVEL;
let count = 1;

class MemoryGame {
  constructor() {
    this.listenToMenueButtoms();
  }
  start() {
    numbersInBoxesDisappeared = false;
    count = 1;
    this.clearBoxes();
    this.createBoxes(currentLevel);
    this.setCounter(TIMER);
    this.startCounter();
  }

  listenToMenueButtoms() {
    document.querySelector(".restart").addEventListener("click", () => {
      currentLevel = INITLEVEL;
      this.setCurrentScore(INITSCORE);
      this.start();
    });
    document.querySelector(".main").addEventListener("click", () => {
      this.updateCurrentPlayer();
      window.location.href = "../index.html";
    });
  }

  setCounter(second) {
    counterElem.innerText = second;
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
    containerElem.appendChild(box);
  }

  getRandomMargin() {
    return Math.floor(Math.random() * 50) + 30 + "px";
  }

  clearBoxes() {
    while (containerElem.firstChild) {
      containerElem.removeChild(containerElem.firstChild);
    }
  }
  createBoxes(level) {
    this.createShuffledArray(level).forEach((number) => {
      this.createBox(number);
    });
  }

  getCurrentScore(score) {
    return Number(currentScoreElem.textContent);
  }
  setCurrentScore(score) {
    currentScoreElem.textContent = score;
  }
  getMaxScore(score) {
    return Number(maxScoreElem.textContent);
  }
  setMaxScore(score) {
    maxScoreElem.textContent = score;
  }
  listenToBoxClick(box) {
    box.addEventListener("click", (e) => {
      if (!numbersInBoxesDisappeared) {
        return;
      } else if (
        numbersInBoxesDisappeared &&
        Number(e.target.innerText) == count
      ) {
        e.target.classList.add("disappear");
        e.target.style.color = "#f3f3f3";
        count++;
        if (currentLevel == count - 1) {
          this.setCurrentScore(this.getCurrentScore() + currentLevel);
          if (this.getCurrentScore() > this.getMaxScore()) {
            this.setMaxScore(this.getCurrentScore());
          }
          currentLevel++;
          this.start();
        }
      } else {
        this.setCurrentScore(INITSCORE);
        currentLevel = INITLEVEL;
        this.start();
      }
    });
  }

  updateCurrentPlayer() {
    const currentPlayerName = localStorage.getItem("currentPlayer");
    const logArr = JSON.parse(localStorage.getItem("logArr"));
    logArr.some((elem, index) => {
      if (elem.name == currentPlayerName) {
        logArr[index] = { name: currentPlayerName, score: this.getMaxScore() };
        return true;
      }
      return false;
    });
    localStorage.setItem("logArr", JSON.stringify(logArr));
  }

  startCounter() {
    clearInterval(timeEnterval);
    timeEnterval = setInterval(() => {
      const counter = Number(counterElem.innerText);
      if (counter > 0) {
        counterElem.innerText = counter - 1;
      }
      if (numbersInBoxesDisappeared == false && counter - 1 == 0) {
        numbersInBoxesDisappeared = true;
        containerElem.childNodes.forEach((elem) => {
          elem.style.color = "rgb(55, 187, 169)";
        });
      }
    }, SECOND);
  }
}

const memoryGame = new MemoryGame();
memoryGame.start();
