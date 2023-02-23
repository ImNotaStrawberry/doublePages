var  btn = document.getElementById('transferir')
btn.addEventListener('click', transfer)

function transfer(){
    var inputhtml = document.getElementById('inputHtml').value 
    document.write(`${inputhtml} Qualquer coisa`)
}