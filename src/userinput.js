class UserInput {
  constructor() {
    this.makeList();
    this.listenToInput();
    this.listenToClearHistory();
    this.listenToAudioButtom();
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
        } else {
          input.classList.remove("good");
          input.classList.add("danger");
        }
        if (msg == "name exist") {
          alert.innerHTML = "Name exists !";
        } else if (msg == "short name") {
          alert.innerHTML = "Very short name";
        } else if (msg == "very long name") {
          alert.innerHTML = "Very long name";
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
            logArr.push({ name: name, score: 0 });
            this.setLogArr(logArr);
            window.localStorage.setItem("currentPlayer", name);
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

    if (name.length > 10) {
      return "very long name";
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

  listenToAudioButtom() {
    const button = document.getElementById("button");
    const audio = document.getElementById("player");
    audio.volume = 0.01;

    button.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        button.innerHTML = "Pause";
      } else {
        audio.pause();
        button.innerHTML = "Play";
      }
    });
  }
}

const userInput = new UserInput();
