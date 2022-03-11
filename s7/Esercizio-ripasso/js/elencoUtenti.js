let esperimento = localStorage.getItem("utentiSalvati")

let arrayUtenti = JSON.parse(esperimento)

arrayUtenti.forEach((element) => {
  let tBody = document.querySelector("tbody")
  let tr = document.createElement("tr")

  let td = document.createElement("td")
  let td1 = document.createElement("td")
  let td2 = document.createElement("td")
  let td3 = document.createElement("td")
  let td4 = document.createElement("td")
  let td5 = document.createElement("td")
  let td6 = document.createElement("td")
  let pulsante = document.createElement("button")

  td.innerText = element.nome
  td1.innerText = element.cognome
  td2.innerText = element.email
  td3.innerText = element.password
  td4.innerText = element.indirizzo
  td5.innerText = element.citta
  td6.innerText = element.zip
  pulsante.innerText = "Rimuovi utenti"

  tr.appendChild(td)
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)
  tr.appendChild(td5)
  tr.appendChild(td6)
  tr.appendChild(pulsante)

  tBody.appendChild(tr)
})

arrayUtenti.forEach(function(){
    let pulsante1 = document.querySelector(".btn1")

    pulsante1.addEventListener("click", function(){
        arrayUtenti.forEach(element => {
            let tr = document.createElement("tr")
            let tBody = document.querySelector("tbody")

            tBody.remove(tr)
            localStorage.clear()//mi cancella tutto 
            //localStorage.removeItem(td1)
        })
    })
})

/*function rimuoviElementodaDb(el){
    
    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}*/
