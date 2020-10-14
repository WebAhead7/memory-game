// the game starts when the player click the first square:
// function startPlaying() {
var stylesh = document.querySelector(".container");
var flag = 1;
var level = 0;

var count = 1;
var start = [
  [1, 2, 3, 4], // level 0
  [1, 2, 3, 4, 5, 6], // level 1
  [1, 2, 3, 4, 5, 6, 7, 8], // level 2
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // level 3
];

var mixed = shuffle(start[level]);

mixed.forEach((value) => {
  const div1 = document.createElement("div");
  const element = document.createElement("h1");

  element.textContent = value;
  div1.appendChild(element);
  stylesh.appendChild(div1);
  element.classList.add("sq-style");
  element.addEventListener("click", function (event) {
    if (element.textContent == count) {
      event.target.classList.add("ifright");
      count++;
    } else {
      event.target.classList.add("ifwrong");
      // flage = 0;
    }
  });
});

function shuffle(arra1) {
  var ctr = arra1.length;
  var temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
