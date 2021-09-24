import functions from './functions.js'
import data from './data.js'


var synth = window.speechSynthesis

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
  inputTxt.blur();
}

function utter(input) {
    var utterThis = new SpeechSynthesisUtterance(input);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
    console.info(`speech synth said: "${input}"`)
}

voiceSelect.onchange = function(){
    utter(inputTxt.value);
}

pitch.onchange = function(){ 
    pitchValue.textContent = pitch.value;
    utter(inputTxt.value);
}

rate.onchange = function(){
    rateValue.textContent = rate.value;
    utter(inputTxt.value);
}

var SpeechRecognition = window.webkitSpeechRecognition

var SpeechRecognitionEvent = webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()

recognition.interimResults = false;
recognition.continuous = true;
let conga = ""



//function performed on result event
recognition.addEventListener('result', e => {
    var currentResult = (e.results[e.results.length-1][0])
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
    conga = transcript.pop().trim()
    console.info('%cResult recieved',"color: #7777FF; font-style: italic; background-color: #DDDDDD;padding: 2px");
    console.info(`Result: "${conga}" | Confidence: ${(currentResult.confidence*100).toFixed(1)}%`);
    inputTxt.value = conga
    data.globalTranscript.push(conga)
    utter(conga)
})

recognition.addEventListener('end', e => {
    console.log('%cAudio capturing ended',"color: red; font-style: italic; background-color: gray;padding: 6px; border: dashed")
    recognition.start()
})

recognition.addEventListener('audiostart', function() {
    console.log('%cAudio capturing started',"color: lime; font-style: italic; background-color: gray; padding: 6px; border: dashed");
});

recognition.addEventListener('audioend', function() {
});

recognition.addEventListener('speechend', function() {
    console.log('detected speech ended');
    console.log('result: ' + conga);
});

recognition.addEventListener('speechstart', function() {
    console.log('Speech detected');
});


recognition.start()

