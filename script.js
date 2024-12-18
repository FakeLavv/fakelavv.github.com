document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('toggleMusic');
    const volumeSlider = document.getElementById('volumeSlider');
    const audioIcon = toggleBtn.querySelector('.audio-icon');

    audio.volume = volumeSlider.value / 100;

    toggleBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioIcon.textContent = '🔊';
        } else {
            audio.pause();
            audioIcon.textContent = '🔈';
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
        audioIcon.textContent = e.target.value == 0 ? '🔈' : '🔊';
    });
});
