  let cards = document.querySelectorAll('.card');
  let flippedCard = true;
  let firstCard = null;
  let secondCard = null;
  let lockedBoard = true;

 function startGame(){

   for(let i = 0; i < cards.length; i++){
     (function(){
      let random = Math.floor(Math.random() * cards.length);
       return cards[i].style.order = random;
     })();
     cards[i].addEventListener('click', flipCard);
     function flipCard(){
       if(lockedBoard == false) return;
       if(flippedCard) {
         firstCard = cards[i];
         firstCard.classList.add('flip');
         flippedCard = false;
       }else{
         lockedBoard = false;
         secondCard = cards[i];
         secondCard.classList.add('flip');
           if(secondCard === firstCard){
             firstCard.classList.remove('flip');
             secondCard.classList.remove('flip');
             setTimeout(function(){lockedBoard = true},200);
           } else if(firstCard.dataset.framework === secondCard.dataset.framework){
              firstCard.removeEventListener('click', flipCard);
              secondCard.removeEventListener('click', flipCard);
              setTimeout(function(){lockedBoard = true},200);
            }else{
              setTimeout(function(){
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockedBoard = true;
              }, 1000);

            }

         flippedCard = true;


       }

     }

   }


 }

startGame();
