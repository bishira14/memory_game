  const cards = document.querySelectorAll('.card');
  let flippedCard = true;
  let firstCard = null;
  let secondCard = null;
  let lockedBoard = true;
  let score = 0;
  let scoreElement = document.querySelector('.info h2 span');
  let win = [];

  let timerSeconds = 59;
  let timerMinutes = 1;
  let secondsElement = document.querySelector('.timer .seconds');
  let minutesElement = document.querySelector('.timer .minutes');
  let showFinish = document.querySelector('.finish');
  let finishScore = document.querySelector('.finishScore');
  let finishTime = document.querySelector('.finishTime');

  setInterval(function(){
      if(win.length == 6) {
        finishScore.innerHTML = score;
        showFinish.style.display = 'flex';
        return;
      }
      timerSeconds--;
      if(timerSeconds < 10){
       secondsElement.innerHTML = '0' + timerSeconds;
     }else{
       secondsElement.innerHTML = timerSeconds;
     }
      if(timerSeconds == 0){
        timerMinutes--;
        setTimeout(function(){
          return minutesElement.innerHTML = timerMinutes;

        },1000)
        timerSeconds = 59;
      }
    if(timerMinutes < 0){
      minutesElement.innerHTML = '0';
      secondsElement.innerHTML = '00';
      setTimeout(function(){
        finishScore.innerHTML = score;
        showFinish.style.display = 'flex';
        return;
      },1000);

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
              colorChange(scoreElement);
              win.push('win');
              setTimeout(function(){lockedBoard = true},200);
            }else{
              setTimeout(function(){
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                score--;
                scoreElement.innerHTML = score;
                colorChange(scoreElement);
                lockedBoard = true;
              }, 1000);

            }

         flippedCard = true;


       }
      function colorChange(element){
        if(score > 0){
          element.style.color = 'rgb(60, 119, 60)';
        }else if(score == 0){
          element.style.color = 'white';
        }else{
          element.style.color = 'rgb(255, 0, 0)';
        }

      }
      //colorchange for finish
      colorChange(finishScore);
     }

   }


 }

startGame();
