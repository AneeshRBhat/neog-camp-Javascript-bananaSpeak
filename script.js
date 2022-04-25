var btnTranslate = document.querySelector("#translate-btn")
var txtInput = document.querySelector("#text-input")
var outputArea = document.querySelector("#output-area")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function translatonURL(userInput) {
    var tranURL = serverURL + "?text=" + userInput
    return tranURL
}

function errorHandler(error) {
    console.log("server error", error)
    alert("There is some problem with the server, please try again.")
}


function clickHandler(){
    var inputText = txtInput.value
    
   fetch(translatonURL(inputText))
   .then(response => response.json())
   .then(JSON => {var outputText = JSON.contents.translated
                  outputArea.innerText = outputText})
   .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler)