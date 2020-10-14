class UserInput {
  constructor() {
    this.makeList();
    this.listenToInput();
    this.listenToClearHistory();
  }

  listenToClearHistory() {
    document.querySelector(".clear-history").addEventListener("click", () => {
      this.clearGameHistory();
      window.location.reload();
    });
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
      "keyup",
      (e) => {
        const msg = this.validateName(e.target.value);
        const alert = document.querySelector(".alert");
        if (msg === "no name") {
          input.classList.remove("danger");
          input.classList.remove("good");
          alert.classList.add("disaper");
          return;
        } else if (msg === "good") {
          input.classList.remove("danger");
          input.classList.add("good");
          alert.innerHTML = "Press enter to play!";
        } else if (msg == "name exist") {
          input.classList.remove("good");
          input.classList.add("danger");
          alert.innerHTML = "Name exists !";
        } else if (msg == "short name") {
          input.classList.remove("good");
          input.classList.add("danger");
          alert.innerHTML = "Very short name";
        }
        alert.classList.remove("disaper");
      },
      false
    );
    input.addEventListener(
      "keypress",
      (e) => {
        if (e.key === "Enter") {
          if (this.validateName(e.target.value) == "good") {
            const name = input.value;
            this.player = name;
            const logArr = this.getLogArr();
            logArr.push({ name: name, score: 4 });
            this.setLogArr(logArr);
            window.location.href = "../index.html";
            input.value = "";
          } else {
          }
        }
      },
      false
    );
  }

  validateName(name) {
    if (name.length == 0) {
      return "no name";
    }
    if (name.length < 4) {
      return "short name";
    }

    const nameExist = this.getLogArr().some((player) => player.name == name);
    if (nameExist) {
      return "name exist";
    }
    return "good";
  }

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

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});
