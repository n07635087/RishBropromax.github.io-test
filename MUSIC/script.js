const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const volumeUpButton = document.getElementById('volume-up-button');
const volumeDownButton = document.getElementById('volume-down-button');
const volumeRange = document.getElementById('volume-range');

playButton.addEventListener('click', function() {
	audioPlayer.play();
});

pauseButton.addEventListener('click', function() {
	audioPlayer.pause();
});

stopButton.addEventListener('click', function() {
	audioPlayer.pause();
	audioPlayer.currentTime = 0;
});

volumeUpButton.addEventListener('click', function() {
	audioPlayer.volume += 0.1;
});

volumeDownButton.addEventListener('click', function() {
	audioPlayer.volume -= 0.1;
});

volumeRange.addEventListener('change', function() {
	audioPlayer.volume = volumeRange.value;
});
