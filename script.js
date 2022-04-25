var btnTranslate = document.querySelector("#translate-btn")
var txtInput = document.querySelector("#text-input")
var outputArea = document.querySelector("#output-area")



function translatonURL(userInput) {
    var tranURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?text=" + userInput
    return tranURL
}


function clickHandler(){
    var inputText = txtInput.value
    
   fetch(translatonURL(inputText))
   .then(response => response.json())
   .then(JSON => console.log(JSON.contents.translated))
}
btnTranslate.addEventListener("click", clickHandler)