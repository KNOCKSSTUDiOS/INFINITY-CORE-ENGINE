cinema/player.js 
class CinemaPlayer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.video = document.createElement('video');
    this.video.style.cssText = 'width: 100%; height: 100%; background: #000;';
    this.container.appendChild(this.video);

    this.controls = this.createControls();
    this.sound = new (window.AudioContext || window.webkitAudioContext)();
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
  }

  createControls() {
    const controls = document.createElement('div');
    controls.style.cssText = `
      position: absolute;
      bottom: 0;
      width: 100%;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      padding: 20px;
      display: flex;
      gap: 10px;
      align-items: center;
    `;

    const playBtn = document.createElement('button');
    playBtn.textContent = '▶';
    playBtn.onclick = () => this.play();

    const pauseBtn = document.createElement('button');
    pauseBtn.textContent = '⏸';
    pauseBtn.onclick = () => this.pause();

    const volumeSlider = document.createElement('input');
    volumeSlider.type = 'range';
    volumeSlider.min = 0;
    volumeSlider.max = 100;
    volumeSlider.value = 100;
    volumeSlider.style.cssText = 'width: 100px; cursor: pointer;';
    volumeSlider.oninput = (e) => {
      this.video.volume = e.target.value / 100;
    };

    controls.appendChild(playBtn);
    controls.appendChild(pauseBtn);
    controls.appendChild(volumeSlider);

    this.container.style.position = 'relative';
    this.container.appendChild(controls);

    return controls;
  }

  addToPlaylist(url, title, monetizationData = {}) {
    this.playlist.push({
      url,
      title,
      monetization: monetizationData,
      views: 0,
      earnings: 0
    });
  }

  play() {
    if (this.playlist.length === 0) return;
    const item = this.playlist[this.currentIndex];
    this.video.src = item.url;
    this.video.play();
    this.isPlaying = true;

    // Track view for monetization
    item.views++;
    if (item.monetization.cpv) {
      item.earnings += item.monetization.cpv;
    }
  }

  pause() {
    this.video.pause();
    this.isPlaying = false;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.play();
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.play();
  }

  getStats() {
    const item = this.playlist[this.currentIndex];
    return {
      title: item.title,
      views: item.views,
      earnings: item.earnings,
      duration: this.video.duration,
      currentTime: this.video.currentTime
    };
  }
}

export default CinemaPlayer;
