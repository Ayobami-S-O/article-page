// var audioTrack = WaveSurfer.create({
//     container: '.audio',
//     waveColor: '#eee',
//     progressColor: 'red',
//     barWidth: 2 
// });


// var audioTrack = WaveSurfer.create({
//     container: ".audio",
//     waveColor: "#fff",
//     progressColor: "#fff",
//     barWidth: 2
// });

// audioTrack.load('../audio/track1.mp3');

// const playBtn = document.querySelector(".play-btn");
// const stopBtn = document.querySelector(".stop-btn");
// const muteBtn = document.querySelector(".mute-btn");
// const volumeSlider = document.querySelector(".play-btn");

// playBtn.addEventListener("click", () =>{
//     audioTrack.playPause();

//     if (audioTrack.isPlaying()) {
//         playBtn.classList.add("playing")
//     } else {
//         playBtn.classList.remove("playing")
//     }
// })

// stopBtn.addEventListener("click", () => {
//     audioTrack.stop();
//     playBtn.classList.remove("playing")
// })

// volumeSlider.addEventListener("mouseUp", () => {
//     changeVolume(volumeSlider.value)
// })


// const changeVolume = (volume) =>{
//     if (volume === 0){
//         muteBtn.classList.add("muted")
//     } else{
//         muteBtn.classList.remove("muted")
//     }
//     audioTrack.setVolume(volume)
// }

// muteBtn.addEventListener("click", () =>{
//     if(muteBtn.classList.contains("muted")){
//         muteBtn.classList.remove("muted");
//         audioTrack.setVolume(0.5);
//         volumeSlider.value = 0.5;
//     } else {
//         audioTrack.setVolume(0);
//         muteBtn.classList.add("muted");
//         volumeSlider.value = 0
//     }
// })


// document.getElementById("name").addEventListener("click", function myName(){
//     var name = prompt('What is your name?');

//     document.getElementById("name").innerHTML = name;
    
// })