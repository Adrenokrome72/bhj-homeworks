(() => {
    let playing = true,
      activeHole = 1,
      deadCount = 0,
      lostCount = 0;
  
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    const holes = document.querySelectorAll('.hole');
  
    const stop = () => playing = false;
    const getHole = index => document.getElementById(`hole${index}`);
    const deactivateHole = index => getHole(index).className = 'hole';
    const activateHole = index => getHole(index).className = 'hole hole_has-mole';
  
    const updateDeadCounter = () => deadCounter.textContent = deadCount;
    const updateLostCounter = () => lostCounter.textContent = lostCount;
  
    const handleHoleClick = event => {
      const hole = event.target;
      if (hole.classList.contains('hole_has-mole')) {
        deadCount++;
        updateDeadCounter();
        if (deadCount >= 10) {
          alert('Вы победили!');
          resetGame();
        }
      } else {
        lostCount++;
        updateLostCounter();
        if (lostCount >= 5) {
          alert('Вы проиграли!');
          resetGame();
        }
      }
    };
  
    const resetGame = () => {
      deadCount = 0;
      lostCount = 0;
      updateDeadCounter();
      updateLostCounter();
      deactivateHole(activeHole);
      playing = true;
      next();
    };
  
    const next = () => setTimeout(() => {
      if (!playing) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 9);
      activateHole(activeHole);
      next();
    }, 800);
  
    holes.forEach(hole => {
      hole.onclick = handleHoleClick;
    });
  
    next();
  })();
