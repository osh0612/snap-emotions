function startTimer(seconds) {
    const textInput = document.getElementById('textInput');
    if (!textInput.value.trim()) {
      alert('Please enter some text before starting the timer.');
      return;
    }
  
    // Disable input and buttons while timer is running
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
      button.disabled = true;
    });
  
    // Set timer to make text disappear
    setTimeout(() => {
      textInput.value = '';
      textInput.disabled = false;
      buttons.forEach(button => {
        button.disabled = false;
      });
    }, seconds * 1000);
  }
  