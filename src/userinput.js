const input = document.querySelector("input");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const input = document.querySelector("input");
    window.localStorage.setItem(input.value, 0);
  }
});

function makeList() {
  for (key in window.localStorage) {
    console.log(key);
  }
}

function clearGameHistory() {
  localStorage.clear();
}

clearGameHistory();
