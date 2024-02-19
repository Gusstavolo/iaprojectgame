const player = document.getElementById('player');



const newspaperSpinning = [
    { transform: "translateY(player.offsetTop)" },
    { transform: "translateY(-30px)" },
  ];
  

  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };


  
  const newspaper = document.querySelector(".playerconf");
  
newspaper.animate(newspaperSpinning, newspaperTiming);


