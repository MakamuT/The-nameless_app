// JavaScript to handle modal positioning

// Redirect thumbnail click to video page
const video = document.getElementById("videoTing");

video.addEventListener("click", () => {
  window.location = "playVideo.html";
});

$("#exampleModalLong").on("shown.bs.modal", function (e) {
  $(".modal-backdrop").addClass("modal-backdrop-side");
});

// Javascript to detect voice for voice search
const voiceSearch = document.getElementById("voiceDetection");
const navbar = document.getElementById("navbar");
let voiceSvg = document.getElementById("voiceSvg");

voiceSearch.addEventListener("click", () => {
  voiceSearch.classList.toggle("voiceOn");
  // voiceSvg.setAttribute("fill", "#AA4A44")
});

let recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();
recognition.lang = "en-US"; // Set recognition language to English
let isRecognizing = false;
let searchInput = document.getElementById("searchInput");

document
  .getElementById("voiceDetection")
  .addEventListener("click", function () {
    if (!isRecognizing) {
      recognition.start();
      console.log("Recording started");
    } else {
      recognition.stop();
      console.log("Recording stopped");
    }
  });

recognition.onstart = function () {
  isRecognizing = true;
};

recognition.onend = function () {
  isRecognizing = false;
  voiceSearch.classList.toggle("voiceOn");
};

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript;
  searchInput.placeholder = transcript;
};

if (searchInput.placeholder == transcript) {
  console.log("it is in there");
}

// Profile customization JavaScript
