//con l'elemento nascosto
var toggle = document.querySelector('#menu .toggle')

toggle.addEventListener('click', function(){
    let tendina = document.querySelector('.tendina')
    tendina.classList.toggle('nascosto')
})

//senza l'elemento nascosto con if e else
var toggle2 = document.querySelector('#menu2 .toggle')

toggle2.addEventListener('click', function(){
    let tendina = document.querySelector('#menu2 .tendina')

    if(tendina.style.display == "block"){
        tendina.style.display = "none"
    }else{
        tendina.style.display = "block"
    }
})