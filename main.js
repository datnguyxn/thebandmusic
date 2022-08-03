var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("js-slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


// Open modal tickets
//Begin
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContanier = document.querySelector('.js-modal-container')

function showBuyTicket() {
    modal.classList.add('open')
}

function hideBuyTicket() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

modalClose.addEventListener('click', hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

modalContanier.addEventListener('click', function (event) {
    event.stopPropagation()
})
//End

