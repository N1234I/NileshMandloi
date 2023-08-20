function playaudio(event) {
    var audioFile = event.target.getAttribute("data-sound");
    var audio = new Audio(audioFile);
    audio.play();
}
