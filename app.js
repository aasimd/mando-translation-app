var inputText = document.querySelector("#txt-area");
var translateButton = document.querySelector(".translate-button");
var outputBox = document.querySelector(".outputbox");
var url = "https://api.funtranslations.com/translate/mandalorian.json"
function errorHandler(error){
    console.log("error occured ", error);
    alert('there was an error, try again after sometime.')
}
function constructUrl(text){
        return url + "?text=" + text 
    }
function clickHandler(){
    var text = inputText.value 
    
    fetch(constructUrl(text))
    .then (response => response.json() )
    .then (json => {
        var translatedText = json.contents.translated;
        outputBox.innerText = translatedText;
    })
    
}









translateButton.addEventListener("click", clickHandler);

