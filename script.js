var btnTranslate = document.querySelector("#translate-btn")
var txtInput = document.querySelector("#text-input")

function clickHandler(){
    var inputText = txtInput.value
    console.log(inputText)
}
btnTranslate.addEventListener("click", clickHandler)