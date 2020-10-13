class UserInput {
  constructor() {
    this.makeList();
    this.listenToInput();
  }
  clearGameHistory() {
    localStorage.clear();
  }
  makeList() {
    if (!window.localStorage.getItem("logArr")) {
      window.localStorage.setItem("logArr", JSON.stringify([]));
    }
    const list = document.createElement("ul");
    const logArr = JSON.parse(window.localStorage.getItem("logArr"));
    logArr
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
    document.querySelector("body").appendChild(list);
  }

  listenToInput() {
    const input = document.querySelector("input");
    input.addEventListener(
      "keypress",
      (e) => {
        if (e.key === "Enter") {
          const name = input.value;
          const logArr = JSON.parse(window.localStorage.getItem("logArr"));
          logArr.push({ name: name, score: 4 });
          window.localStorage.setItem("logArr", JSON.stringify(logArr));
        }
      },
      false
    );
  }
}

new UserInput();

// muhammad adding audio:
// window.addEventListener("load", (event) => {
//   const audio = document.querySelector("audio");
//   audio.volume = 0.2;
//   audio.play();
// });
