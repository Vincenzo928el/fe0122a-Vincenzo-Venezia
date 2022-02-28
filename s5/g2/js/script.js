let budget = document.querySelector("input").value;

let pulsante = document.querySelector("button");

pulsante.addEventListener('click', aggiornaBudget);

function aggiornaBudget(){
    let res = document.querySelector("input").value;
}

while ( budget > 0)  {
    let spesa = Math.floor(Math.random()*50)
    budget -= spesa;
    document.getElementById("valori-budget").innerHTML = budget; }

//switch messaggi
switch(res){
    case 500:
        document.querySelector('#avviso').innerHTML = "attenzione budget a metà: " + res;
        break;
    case 100:
        document.querySelector('#avviso').innerHTML = "attenzione budget quasi esaurito: " + res;
        break;
    default:
        document.querySelector('#avviso').innerHTML = "il tuo budget è pari a: " + res;
}