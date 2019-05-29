let doge = document.getElementById('doge');

let Woof = function() {
  doge.innerHTML = 'Woof';
}

window.onload = Woof;

let WoofWoof = function(){
  doge.innerHTML = 'Woof woof!';
}

doge.onclick = WoofWoof;

// document.getElementById("myFrame").addEventListener("load", myFunction);
// function myFunction(){
//   document.getElementById("doge").innerHTML = "Woof";
// };
// function Woof () {
//   document.getElementById("doge").innerHTML = "Woof";
// }
// var dogeButton = document.getElementById("doge");
// var
//
// window.onload = function () {
//     document.getElementById("doge").innerHTML = "Woof"
//   };
