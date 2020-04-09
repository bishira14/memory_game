let cards = document.querySelectorAll('.card');
let flippedCard = true;
let firstCard = null;
let secondCard = null;

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', flipCard);
  function flipCard(){
    if(flippedCard) {
      firstCard = cards[i];
      firstCard.classList.add('flip');
      flippedCard = false;
    }else{
      secondCard = cards[i];
      secondCard.classList.add('flip');
      console.log(firstCard.dataset.framework);
      console.log(secondCard.dataset.framework);
       setInterval(function(){
         if(firstCard.dataset.framework === secondCard.dataset.framework){

         }else{
           firstCard.classList.remove('flip');
           secondCard.classList.remove('flip');
         }
       },1000);
       flippedCard = true;


    }


  }
}
