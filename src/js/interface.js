var keys = {shift: false};

window.addEventListener("keydown", function(e){
  console.log(e.which);
  if(e.which == 16) {
    keys.shift = true;
  }
  switch(e.which) {
    case 32: // "space"
      (oscillator.connected) ? oscillator.disconnect() : oscillator.connect();  
      break;
    case 219: // [
      oscillator.switchWave(-1);
      break;
    case 221: // ]
      oscillator.switchWave(1);
      break;
    case 65:
      oscillator.setFrequency(getHz(-9))
      break;
    case 87:
      oscillator.setFrequency(getHz(-8))
      break;
    case 83:
      oscillator.setFrequency(getHz(-7))
      break;
    case 69:
      oscillator.setFrequency(getHz(-6))
      break;
    case 68:
      oscillator.setFrequency(getHz(-5))
      break;
    case 70:
      oscillator.setFrequency(getHz(-4))
      break;
    case 84:
      oscillator.setFrequency(getHz(-3))
      break;
    case 71:
      oscillator.setFrequency(getHz(-2))
      break;
    case 89:
      oscillator.setFrequency(getHz(-1))
      break;
    case 72:
      oscillator.setFrequency(getHz(0))
      break;
    case 85:
      oscillator.setFrequency(getHz(1))
      break;
    case 74:
      oscillator.setFrequency(getHz(2))
      break;
    case 75:
      oscillator.setFrequency(getHz(3))
      break;
    case 79:
      oscillator.setFrequency(getHz(4))
      break;
    case 76:
      oscillator.setFrequency(getHz(5))
      break;
    default:
      break;
  }
});

window.addEventListener("keyup", function(e){
  if(e.which == 16) {
    keys.shift = false;
  }
});

window.addEventListener("mousedown", function(e){ 
  console.log(e);
});

window.addEventListener("mousemove", function(e){
  if(keys.shift) {
    oscillator.setFrequency(e.screenY);
  }
});
