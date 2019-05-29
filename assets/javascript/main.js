
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


// onclick display image
let handleClickDoge = function() {
  if (dogeteim.hasAttribute('style')) {
    document.getElementsByTagName('img')[0].removeAttribute("style")
  } else {
    dogeteim.style.visibility = 'hidden';
  }
}
doge.addEventListener('click', handleClickDoge)
