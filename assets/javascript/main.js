
// declaere button id
let doge = document.getElementById('doge');

// onload change button text to 'Woof'
let Woof = function() {
  doge.innerHTML = 'Woof';
}

window.onload = Woof;

// on button click change button text to 'Woof woof!'
let WoofWoof = function(){
  doge.innerHTML = 'Woof woof!';
}
// changed it to onmousedown to make it a more snappy experience
doge.onmousedown = WoofWoof;

// insert image

let htmlImageElement = new Image((600/2), (797/2));
htmlImageElement.src = 'assets/img/dogeteim.jpg'
document.body.insertBefore(htmlImageElement, doge);
