const input = document.querySelector("input");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const input = document.querySelector("input");
    window.localStorage.setItem(input.value, 5);
  }
});

function makeList() {
  const list = document.createElement("ul");
  document.querySelector("body").appendChild(list);

  for (key in window.localStorage) {
    const listElem = document.createElement("li");
    listElem.textContent = `playe name : ${key} \n score : ${window.localStorage.getItem(
      key
    )}`;
    list.appendChild(listElem);
  }
}

function clearGameHistory() {
  localStorage.clear();
}

clearGameHistory();
console.log(window.localStorage);
makeList();




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