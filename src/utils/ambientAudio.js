// Ambient Web Audio Generator: Angin Hutan & Desau Dedaunan Kanopi
// Berbasis Web Audio API murni (tanpa file eksternal, anti-CORS failure)

class ForestAtmosphereAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.windFilter = null;
    this.noiseNode = null;
    this.lfoNode = null;
    this.birdInterval = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  createPinkNoiseBuffer() {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  play() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // Buat sumber noise angin
    const noiseBuffer = this.createPinkNoiseBuffer();
    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Filter resonansi daun (simulasi embusan angin melalui tajuk daun)
    this.windFilter = this.ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.setValueAtTime(420, this.ctx.currentTime);
    this.windFilter.Q.setValueAtTime(3.2, this.ctx.currentTime);

    // LFO untuk variasi desau angin alami
    this.lfoNode = this.ctx.createOscillator();
    this.lfoNode.type = 'sine';
    this.lfoNode.frequency.setValueAtTime(0.18, this.ctx.currentTime); // ~5.5 detik per siklus embusan angin

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(180, this.ctx.currentTime);
    this.lfoNode.connect(lfoGain);
    lfoGain.connect(this.windFilter.frequency);

    // Hubungkan kabel audio
    this.noiseNode.connect(this.windFilter);
    this.windFilter.connect(this.masterGain);

    this.noiseNode.start();
    this.lfoNode.start();

    // Fade in lembut
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.28, this.ctx.currentTime + 1.5);
    this.isPlaying = true;

    // Tambahkan kicau burung hutan lembut secara periodik
    this.scheduleGentleChirp();
  }

  scheduleGentleChirp() {
    if (!this.isPlaying) return;
    const nextChirpDelay = 4000 + Math.random() * 8000;
    this.birdInterval = setTimeout(() => {
      if (this.isPlaying) {
        this.playSynthesizedBirdChirp();
        this.scheduleGentleChirp();
      }
    }, nextChirpDelay);
  }

  playSynthesizedBirdChirp() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 2600 + Math.random() * 1200;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.45, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.9, now + 0.16);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.045, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  stop() {
    if (!this.isPlaying || !this.ctx) return;
    clearTimeout(this.birdInterval);
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      if (this.noiseNode) {
        try { this.noiseNode.stop(); } catch (e) {}
      }
      if (this.lfoNode) {
        try { this.lfoNode.stop(); } catch (e) {}
      }
      this.isPlaying = false;
    }, 1300);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const forestAudioInstance = new ForestAtmosphereAudio();
