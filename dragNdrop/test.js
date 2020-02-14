let cards = document.getElementsByTagName('li');
for(let card of cards) {
card.onmousedown = function(e) {
	let coords = getCoords(card);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    e.preventDefault();
	card.style.position = 'absolute';
    document.body.appendChild(card);
    moveAt(e);
    card.style.zIndex = 1000;
   
   function moveAt(e) {
    let newX, nexY;
    newX = e.pageX - shiftX;
    newY = e.pageY - shiftY;
    if(newX + card.offsetWidth < e.pageX){
    newX = e.pageX - card.offsetWidth / 2;
    }
    if(newX > e.pageX){
    newX = e.pageX + card.offsetWidth / 2;
    }
    
    card.style.left = newX + 'px';
    card.style.top = newY + 'px';
  }
  
  document.onmousemove = function(e) {
    moveAt(e);
  };
  
  card.onmouseup = function() {
    document.onmousemove = null;
    card.onmouseup = null;
  };
}

card.ondragstart = function() {
  return false;
};

function getCoords(elem) { 
let box = elem.getBoundingClientRect(); 
return { 
top: box.top + pageYOffset, 
left: box.left + pageXOffset 
  }; 
 } 
 }