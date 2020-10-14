class UserInput {
  constructor() {
    this.makeList();
    this.listenToInput();
  }
  clearGameHistory() {
    localStorage.clear();
  }

  getLogArr() {
    return JSON.parse(window.localStorage.getItem("logArr"));
  }
  setLogArr(newLogArr) {
    window.localStorage.setItem("logArr", JSON.stringify(newLogArr));
  }

  makeList() {
    if (!this.getLogArr()) {
      this.setLogArr([]);
    }
    const list = document.createElement("ul");

    this.getLogArr()
      .sort((playerOne, playerTwo) => {
        return playerOne.score > playerTwo.score ? -1 : 1;
      })
      .forEach((player, index) => {
        const listElem = document.createElement("li");
        listElem.textContent = `#${index + 1} playe name : ${
          player.name
        } \n score : ${player.score}`;
        list.appendChild(listElem);
      });
    document.querySelector(".container").appendChild(list);
  }

  listenToInput() {
    const input = document.querySelector("input");
    input.addEventListener(
      "keypress",
      (e) => {
        if (e.key === "Enter") {
          const name = input.value;
          this.player = name;
          const logArr = this.getLogArr();
          logArr.push({ name: name, score: 4 });
          this.setLogArr(logArr);
        }
      },
      false
    );
  }

  validateName() {}

  updatePlayerScore(score) {
    const logArr = this.getLogArr();
    const index = logArr.indexOf({ name: this.name, score: 0 });
    logArr[index] = { ...logArr[index], score };
    this.setLogArr(logArr);
  }
}

const userInput = new UserInput();


var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});
