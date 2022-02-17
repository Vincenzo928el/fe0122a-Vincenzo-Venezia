function resetCalcolatrice(){
    let risultato = document.getElementById("risultato")
    risultato.value = ''
}

function totale(){
    let res = document.getElementById("risultato")
    let totale = eval(res.value)
    res.value = totale
}

function prendiTasto(tasto){
    let risultato = document.getElementById("risultato")
    let num = tasto.id;
    risultato.value += num 
}
