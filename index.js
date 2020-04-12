  const cards = document.querySelectorAll('.card');
  let flippedCard = true;
  let firstCard = null;
  let secondCard = null;
  let lockedBoard = true;
  let score = 0;
  let scoreElement = document.querySelector('.info h2 span');

  let timerSeconds = 59;
  let timerMinutes = 1;
  let secondsElement = document.querySelector('.timer .seconds');
  let minutesElement = document.querySelector('.timer .minutes');

  setInterval(function(){

      timerSeconds--;
      if(timerSeconds < 10){
       secondsElement.innerHTML = '0' + timerSeconds;
     }else{
       secondsElement.innerHTML = timerSeconds;
     }
      if(timerSeconds == 0){
        timerMinutes--;
        minutesElement.innerHTML = timerMinutes;
        timerSeconds = 59; }

    if(timerMinutes < 0){
      minutesElement.innerHTML = '0';
      return secondsElement.innerHTML = '00';
    }


  },1000);


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
           } else if(firstCard.dataset.info === secondCard.dataset.info){
              firstCard.removeEventListener('click', flipCard);
              secondCard.removeEventListener('click', flipCard);
              score++;
              scoreElement.innerHTML = score;
              colorChange()
              setTimeout(function(){lockedBoard = true},200);
            }else{
              setTimeout(function(){
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                score--;
                scoreElement.innerHTML = score;
                colorChange()
                lockedBoard = true;
              }, 1000);

            }

         flippedCard = true;


       }
      function colorChange(){
        if(score > 0){
          scoreElement.style.color = 'rgb(60, 119, 60)';
        }else if(score == 0){
          scoreElement.style.color = 'white';
        }else{
          scoreElement.style.color = 'rgb(255, 0, 0)';
        }

      }

     }

   }


 }

startGame();
