let pulsante = document.querySelector(".btn")

let allValue = document.querySelectorAll(".form-control")

let avviso = document.querySelectorAll(".avviso")

let form = document.querySelector("form")

pulsante.addEventListener("click", function (evento) {
  let formValido = true;

  evento.preventDefault()

  let [nome, cognome, email, password, indirizzo, citta, zip] = allValue

  allValue.forEach(function (elemento) {
    if (elemento.value == "") {
      elemento.nextElementSibling.textContent = "Richiesto"
      formValido = false
    } else {
      elemento.nextElementSibling.textContent = "*"
    }
  })

  emailUtenti.forEach(function (elemento) {
    if (elemento == email.value) {
      email.nextElementSibling.textContent = "Questa mail è già presente"
      formValido = false
    }
  });

  if (formValido) {
    var nuovoUtente = new utente(
      nome.value,
      cognome.value,
      email.value,
      password.value,
      indirizzo.value,
      citta.value,
      zip.value
    )
    salvaDati(nuovoUtente)

    alert("Registrato")

    history.pushState({}, "", "login.html")

    location.href = "login.html"
  }
})

function salvaDati(aggiungi) {
  let user = localStorage.getItem("utentiSalvati")
  let dataBase = user ? JSON.parse(user) : []
  dataBase.push(aggiungi)
  localStorage.setItem("utentiSalvati", JSON.stringify(dataBase))
}

class utente {
  constructor(nome, cognome, email, password, indirizzo, citta, zip) {
    this.nome = nome
    this.cognome = cognome
    this.email = email
    this.password = password
    this.indirizzo = indirizzo
    this.citta = citta
    this.zip = zip
  }
}

let esperimento = localStorage.getItem("utentiSalvati")
let esperimento2 = JSON.parse(esperimento)
let emailUtenti = []

esperimento2.forEach(function (elemento) {
  elemento.email
  emailUtenti.push(elemento.email)
})
