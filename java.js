// const minKnap = document.querySelector("#knapElement");
// minKnap.addEventListener("click", funktionClick);
// function functionClick() {
//   console.log("indeholder alkohol");
// }

// function functionClick() {
//   var alkohol = document.getElementById("alkohol");
//   var alkoholFri = document.getElementById("alkoholFri");

//   if (image == document.getElementById("alkohol")) {
//     console.log("indeholder alkohol");
//   } else image == document.getElementById("alkoholFri");
//   console.log("indeholder ikke alkohol");
// }

const alkohol1 = document.querySelector("#snaps");
const alkohol2 = document.querySelector("#beer");
const alkohol3 = document.querySelector("#cola");
const alkohol4 = document.querySelector("#snaps");

this.addEventListener("click", klikAlkohol);
this.addEventListener("click", klikAlkoholFri);

function klikAlkohol() {
  console.log("indeholder alkohol");

  if (this == klikAlkohol) {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}



// oevelse 2 //

ngOnInit() {

var myDate = new Date();
var hrs = myDate.getHours();

var besked;

if (hrs >= 5 && hrs <= 10) besked = "god morgen";
else if (hrs >= 10 && hrs <= 18) besked = "god dag";
else if (hrs >= 18 && hrs <= 24) besked = "god aften";
else if (hrs >= 24 && hrs <= 5) besked = "god nat";

document.getElementById('besked').innerHTML =
'<b>' + besked + '</b>!';
}


// oevelse 3 //

(Math.random()*11)