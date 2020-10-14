// the game starts when the player click the first square:
// function startPlaying() 
// {
let flag =1; jump =0, stag =1;
const sqarray =[];
for(let i=0; i<(3+jump) ; i++)
{
     var stylesh=document.querySelector('.container');
     var newsq = document.createElement("div");
       newsq.classList.add('sq-style');
      //  newsq.textContent = 0;
       newsq.style.margin= "5px";
       sqarray.push(newsq);
       
      // there is somthing missing
       newsq.addEventListener("click", function()
       {
         if(flag==1)
         {
           newsq.classList.add('ifright');
         }
         else
         {
           newsq.classList.add('ifwrong');
         }


       });

       //newsq.classList.add('sq-style');
 
  newsq.style.width = "20px";
  newsq.style.height = "20px";

  stylesh.appendChild(newsq);

  // var x = document.getElementById("container");
}

// var array = document.querySelector(".container").childNodes;
// console.log(array.length);

var mixed = [];

for (let i=0; i< sqarray.length; i++)
{
var rand = Math.floor(Math.random() * (3+jump)) +1;
console.log(rand);
sqarray[i].textContent = rand;

}

var newarray = document.querySelector(".container").childNodes;
console.log(newarray);

// jump +=2;

// while(flag ==1)
// {



// }



// }