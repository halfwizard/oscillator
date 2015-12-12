function Synth() {
  this.context = new (window.AudioContext || window.webkitAudioContext)();
  this.destination = this.context.destination;
  this.gainNode = this.context.createGain();
  this.delayNode = this.context.createDelay();
  //this.activeOscillator = oscillator.
  
  this.gainNode.connect(this.destination);
  this.delayNode.connect(this.destination);
}

function Oscillator(synth) {
  this.oscillator = synth.context.createOscillator();
  this.volume = synth.context.createGain();
  this.connected = false;
  this.waveforms = ["sine","square","sawtooth","triangle"];
  this.wave = 0;
  
  this.oscillator.start(0);
  this.volume.connect(synth.gainNode);
  console.log('new synth');
}

Oscillator.prototype.connect = function(){
  this.oscillator.connect(this.volume);
  this.connected = true;
}

Oscillator.prototype.disconnect = function(){
  this.oscillator.disconnect();
  this.connected = false;
}

Oscillator.prototype.setFrequency = function(frequency) {
  this.oscillator.frequency.value = frequency;
}

Oscillator.prototype.switchWave = function(i) {
  this.wave += 1;
  if(this.wave < 0) this.wave = this.waveforms.length-1;
  if(this.wave > this.waveforms.length-1) this.wave = 0;
  this.oscillator.type = this.waveforms[this.wave];
}