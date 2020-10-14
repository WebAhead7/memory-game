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

// if(flag ==1)
// {
//let flag =1; jump =0, stag =1;
//const sqarray =[];
//for(let i=0; i<(3+jump) ; i++)
//{
     //var stylesh=document.querySelector('.container');
    // var newsq = document.createElement("div");
     //  newsq.classList.add('sq-style');
      // newsq.textContent = i+1;
       //newsq.style.margin= "5px";
      // sqarray.push(newsq);
       
      // there is somthing missing
     //  newsq.addEventListener("click", function(event)
      // {
        // if(flag==1)
        // {
        //   event.target.classList.add('ifright');
        // }
         //else
         //{
          // event.target.classList.add('ifwrong');
        // }
      // });
    
  //newsq.style.width = "20px";
  //newsq.style.height = "20px";

  //stylesh.appendChild(newsq);
 
//}
//   level++;
// }

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

// }

// function startPlaying();

// let flag =1; jump =0, stag =1;
// const sqarray =[];

// for(let i=0; i<(2+jump) ; i++)
// {

//      var newsq = document.createElement("div");
//        newsq.classList.add('sq-style');
//        newsq.textContent = i+1;
//        newsq.style.margin= "5px";
//        sqarray.push(i+1);
//       // there is somthing missing
//        newsq.addEventListener("click", function(event)
//        {
//          if(flag==1)
//          {
//            event.target.classList.add('ifright');
//          }
//          else
//          {
//            event.target.classList.add('ifwrong');
//          }
//        });

//   newsq.style.width = "20px";
//   newsq.style.height = "20px";

//   stylesh.appendChild(newsq);

// }

// function shuffle(arra1) {
//   var ctr = arra1.length, temp, index;
//   while (ctr > 0) {
//       index = Math.floor(Math.random() * (ctr));
//       ctr--;
//       temp = arra1[ctr];
//       arra1[ctr] = arra1[index];
//       arra1[index] = temp;
//   }
//   return arra1;
// }
// // var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sqarray);

// var mixed = shuffle(sqarray);
// console.log(mixed[1]);

// for(let i =0; i< mixed.length ; i++)
// {
//   document.querySelector('.container').childNodes[i].textContent= mixed[i];
// }

// var test =[];
// var rand = Math.floor(Math.random() * (3+jump)) +1;
// console.log(rand);
// mixed[0].textContent = rand;
// test[0].textContent = rand;

// var rand = Math.floor(Math.random() * (3+jump)) +1;
// console.log(rand);
// for(let i=1 ; i<sqarray.length; i++){

// while (test.indexOf(rand) != -1 )
// {
//   var rand = Math.floor(Math.random() * (3+jump)) +1;
// console.log(rand);
// }
// mixed[]
// }
// for (let i=1; i< sqarray.length; i++)
// {
// var rand = Math.floor(Math.random() * (3+jump)) +1;
// console.log(rand);
//  mixed[i]= mixed.map(fuction(value)
//  {
//    if(rand!= value)
//    {
//      return rand;
//    }
//    else return
//  })
// if(rand== )

// }

// var newarray = document.querySelector(".container").childNodes;
// console.log(newarray);

// newarray.forEach(function(value)
// {
//   newarray[value].addEventListener("click", function()
//   {
//     newarray[value].addClasslist.add('ifright');
//   })
// })

// jump +=2;

// while(flag ==1)
// {

// }

// }
