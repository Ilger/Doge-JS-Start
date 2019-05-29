let doge = document.getElementById('doge');

let Woof = function() {
  doge.innerHTML = 'Woof';
}

window.onload = Woof;

let WoofWoof = function(){
  doge.innerHTML = 'Woof woof!';
}

doge.onclick = WoofWoof;
