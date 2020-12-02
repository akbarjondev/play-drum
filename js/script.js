var allKeys = document.querySelectorAll('.keys__key');

window.addEventListener('keydown', (evt) => {
	var playAudio = document.querySelector(`audio[data-key="${evt.which}"]`);
	var keyboard = document.querySelector(`div[data-key="${evt.which}"]`);

	allKeys.forEach((key) => {
		key.classList.remove('keys__key--pressed');
	});
	
	keyboard.classList.add('keys__key--pressed');

	if(!playAudio) {
		return;
	}

	playAudio.currentTime = 0;
	playAudio.play();
});