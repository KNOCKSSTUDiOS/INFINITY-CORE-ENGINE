sound/engine.js 
class SoundEngine {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.connect(this.audioContext.destination);
    this.tracks = [];
    this.effects = {};
    this.isPlaying = false;
  }

  createTrack(name, volume = 1) {
    const track = {
      name,
      gain: this.audioContext.createGain(),
      source: null,
      isPlaying: false,
      volume,
      effects: []
    };
    track.gain.gain.value = volume;
    track.gain.connect(this.masterGain);
    this.tracks.push(track);
    return track;
  }

  playSound(trackName, frequency, duration = 1000) {
    const track = this.tracks.find(t => t.name === trackName);
    if (!track) return;

    const oscillator = this.audioContext.createOscillator();
    const envelope = this.audioContext.createGain();

    oscillator.frequency.value = frequency;
    oscillator.connect(envelope);
    envelope.connect(track.gain);

    envelope.gain.setValueAtTime(0, this.audioContext.currentTime);
    envelope.gain.linearRampToValueAtTime(0.5, this.audioContext.currentTime + 0.1);
    envelope.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration / 1000);

    return { oscillator, envelope };
  }

  createReverbEffect() {
    const dry = this.audioContext.createGain();
    const wet = this.audioContext.createGain();
    const convolver = this.audioContext.createConvolver();

    dry.connect(this.masterGain);
    wet.connect(convolver);
    convolver.connect(this.masterGain);

    return { dry, wet, convolver, mix: (amount) => {
      dry.gain.value = 1 - amount;
      wet.gain.value = amount;
    }};
  }

  setMasterVolume(volume) {
    this.masterGain.gain.value = Math.max(0, Math.min(1, volume));
  }

  stop() {
    this.tracks.forEach(track => {
      if (track.source) track.source.stop();
    });
  }
}

export default SoundEngine;
