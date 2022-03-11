let esperimento = localStorage.getItem("utentiSalvati")
let arrayUtenti = JSON.parse(esperimento)

let inputMail = document.querySelector("#exampleInputEmail1")
let inputPass = document.querySelector("#exampleInputPassword1")
let bottone = document.querySelector("button")

bottone.addEventListener("click", function (evento) {

    evento.preventDefault();

    let utenteTrovato = arrayUtenti.find(user => user.email == inputMail.value && user.password == inputPass.value)
    if(utenteTrovato != undefined){

        alert('Sei dentro!')
        history.pushState({}, "", "elencoUtenti.html")
        location.href = "elencoUtenti.html"

    }else{
        alert('c\'è qualcosa che non va')
    }

/*//METODO FATTO DA NOI
arrayUtenti.forEach(function(user) {
    if(user.mail == inputMail.value && user.password == inputPass.value) {
        
        logValid = true
        alert("Sei stato identificato")

        history.pushState({}, "", "elencoUtenti.html")

        location.href = "elencoUtenti.html"     
    }
})
if(logValid){
    alert("Sei dentro")
}else{
    alert('c\'è un errore nei dati')
}*/

})