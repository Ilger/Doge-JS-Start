
// declare button id
let doge = document.getElementById('doge');
// declare img selector
let dogeteim = document.getElementById('dogeteim')

// onload change button text to 'Woof'
let Woof = function() {
  doge.innerHTML = 'Woof';
}

window.onload = Woof;

// onhover change button text to 'Woof woof!'
let WoofWoof = function(){
  doge.innerHTML = 'Woof woof!';
}
doge.onmouseover = WoofWoof;



// insert image
//
// let htmlImageElement = new Image((600/2), (797/2));
// htmlImageElement.src = 'assets/img/dogeteim.jpg'
// document.body.insertBefore(htmlImageElement, doge);
