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
