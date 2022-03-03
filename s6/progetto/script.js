        //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
        //crea un ciclo che si fermi alla sedicesima iterazione
            
            //genera un numero randomico che va da zero l numero si elementi presenti nell'array mieImg
            //usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine
            //rimuovi l'immagine dall'array
    
            //usa jquery per creare un div come questo:
            //<div class="images" id="emoji'+i+'" ></div>
            //contenente un tag img come questo: 
            //<img id="'+i+'" src="img/'+immagineRandom+'.png"  width="130" height="130">
            //dove i è un indice che si incrementa e immagineRandom è l'immagine pescata randomicamente
    
            //ricordati di mostrare gli elementi di html appena creati

        //gestione evento click
        //creo un array in cui salverò le informazioni sugli elementi cliccati
    
        //preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)
    
            //Crea un contatore di click
            //inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
            //incrementa di 1 il valore ottenuto
            //riscrivi il numero nell'html, sostituendolo con quello pre esistente
    
            //crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare
            //se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri
    
                
                //crea una variabile contenente l'id dell'immagine cliccata
                //crea una variabile contenente l'attributo src dell'immagine cliccata
    
                //rendi visibile l'immagine presente nell'elemento cliccato
                
                //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
               
                //aggiungi l'oggetto appena creato all'array immaginiCliccate
    
                //controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno 
    
                    //crea un nuovo if per verificare se le immagini selezionate sono identiche o meno
                    //confronta gli elementi cliccati, se le proprietà src sono identiche svuota l'array immaginiCliccate
                    //se le proprietà src sono diverse svuota l'array immaginiCliccate e nascondi entrambe le immagini
                    
                    //usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare 
                    //le carte che ha scoperto prima che queste scompaiano

$(()=>{
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock"];
    
    for(let i = 0; i < 16; i++){

        let random = Math.floor(Math.random() * mieImg.length)
        let immagineRandom = mieImg.splice(random, 1)

        $('<div class="images" id="emoji0'+i+'"><img id="'+i+'"src="img/'+immagineRandom+'.png" width="130" height="130"></div>').appendTo('#memory')

        $("div.images").hover(function(){
            $(this).css("background-color", "azure");
            }, function(){
            $(this).css("background-color", "#00dadb");
          });
    }

    immaginiCliccate = []

    $('.images').click(function(){

        let nClick = $('.numclicks span').text()
        nClick++
        $('.numclicks span').text(nClick)

        if(immaginiCliccate.length !=2){

            let imgId = $(this).children().attr('id')

            let imgSrc = $(this).children().attr('src')

            $('#' +imgId).show()

            let oggettoImg = {
                id: imgId,
                src: imgSrc
            }

            immaginiCliccate.push(oggettoImg)

            if(immaginiCliccate.length == 2){

                if(immaginiCliccate[0].src == immaginiCliccate[1].src){
                    immaginiCliccate = []
                    
                }else{
                    setTimeout(function(){
                        $('#'+immaginiCliccate[0].id).hide()
                        $('#'+immaginiCliccate[1].id).hide()

                        immaginiCliccate = []
                    }, 300)  
                }
            }
       }

    })
    $('#start').click(function(){
        $('#memory').show()
        var now = new Date()
            now.setHours(0)
            now.setMinutes(0)
            now.setSeconds(0)

        function nowdate(){
            var h = now.getHours()
            var m = now.getMinutes()
            var s = now.getSeconds()

            now.setSeconds(s+1)

            h = now.getHours()
            m = now.getMinutes()
            s = now.getSeconds()

            if (s < 10) {
               s = "0" + s
            }
            if (m < 10){
                m = "0" + m
            }
            if (h < 10){
                h = "0" + h
            }
            $("#timer").text(h+" : "+m+" : "+s)
            setTimeout(function(){nowdate()
            }, 1000)
        }
        $("#start").click(nowdate)  
    })
    $('#memory').hide()

    $('#restart').click(function(){
        window.location.reload()
    })  

})