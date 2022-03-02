/*
//LAVORO NOSTRO
$("<div id=chess> </div>")
.css("height", "400px")
.css("width", "400px")
.css("background-color", "grey")
.css("margin-left", "50vh")
.appendTo("body")

for(let i = 0; i < 16; i++){
    $("#chess").append("<section id='quadrato-"+i+"'> </section>")
    $("#quadrato-"+i).css("height", "100px").css("width", "100px").css("display", "inline-block")
}


$("section").on("mouseover, mouseout",function(){
    $(this).css("bor")
})


//METODO JAVASCRIPT
let scacchiera = document.createElement("div")
scacchiera.id = "scacchiera"

document.querySelector('body').prepend(scacchiera)



for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){

        let div = document.createElement("div")
        div.classList.add('casella')
        let modulo = (x + y) % 2
        //console.log(`modulo di ${x} e ${y} = ${modulo}`)
        //div.innerHTML = `x = ${x}, y = ${y} <br> modulo = ${x + y}`
        if(modulo == 0){
            div.style.backgroundColor='black'
        }
        document.querySelector('#scacchiera').append(div)
    }
}*/

//CON JQUERY
let scacchiera = $('<div id="scacchiera"></div>')
$('body').prepend(scacchiera)

$('#scacchiera').on('click', '.casella', function(){
    $(this).css('background-color', 'red')
})

for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){

        let modulo = (x + y) % 2
        
        if(modulo == 0){
           var bg = 'black'
        }else{
           var bg = 'white'
        }
        $('<div class="casella"></div>')//come createElement
        .css({
            'width': '100px',
            'height': '100px',
            'top': (x * 100) + 'px',
            'left': (y * 100) + 'px',
            'position': 'absolute',
            'display': 'inline-block',
            'margin-left': '-2px',
            'margin-bottom': '-4px',
            'background-color': bg
        })
        .appendTo('#scacchiera')

    }
}
