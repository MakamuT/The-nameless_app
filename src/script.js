  // JavaScript to handle modal positioning

  $('#exampleModalLong').on('shown.bs.modal', function (e) {
    $('.modal-backdrop').addClass('modal-backdrop-side');
  });

  // Javascript to detect voice for voice search
  const voiceSearch = document.getElementById('voiceDetection')
  const navbar = document.getElementById('navbar')
  let voiceSvg = document.getElementById('voiceSvg')
  

  voiceSearch.addEventListener('click', () => {


    voiceSearch.classList.toggle("voiceOn")
    // voiceSvg.setAttribute("fill", "#AA4A44")
})

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US'; // Set recognition language to English
let isRecognizing = false;

document.getElementById('voiceDetection').addEventListener('click', function() {
    if (!isRecognizing) {
        recognition.start();
        console.log("Recording started");
    } else {
        recognition.stop();
        console.log("Recording stopped");
    }
});

recognition.onstart = function() {
    isRecognizing = true;
};

recognition.onend = function() {
    isRecognizing = false;
};


// Profile customization JavaScript
const uploadContainer = document.getElementById('uploadContainer');
const fileInput = document.getElementById('fileInput');
const fileInputLabel = document.getElementById('fileInputLabel');
const preview = document.getElementById('preview');

uploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadContainer.classList.add('dragover');
});

uploadContainer.addEventListener('dragleave', () => {
    uploadContainer.classList.remove('dragover');
});

uploadContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadContainer.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    displayImage(file);
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    displayImage(file);
});

function displayImage(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        preview.innerHTML = '';
        preview.appendChild(img);
    };

    reader.readAsDataURL(file);
}