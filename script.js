function triggerConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      
      const duration = 4 + Math.random() * 3; // Between 4s and 7s
      const delay = Math.random() * 2;        // Up to 2s delay
      const swayIntensity = Math.random() * 30 - 15; // Random sway between -15px and 15px
      const rotateAngle = Math.random() * 360 + 'deg'; // Random rotation between 0 and 360 degrees
  
      confetti.style.animation = `fall-sway ${duration}s linear ${delay}s infinite`;
      confetti.style.setProperty('--sway-intensity', `${swayIntensity}px`);
      confetti.style.setProperty('--rotate-angle', rotateAngle);
  
      confetti.style.backgroundColor = getRandomColor();
      confettiContainer.appendChild(confetti);
    }
  
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 8000); // Cleanup after 8 seconds
  }
  
  function getRandomColor() {
    const colors = ['#ff6f61', '#ffe066', '#51cf66', '#9a8c98', '#6c757d'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  