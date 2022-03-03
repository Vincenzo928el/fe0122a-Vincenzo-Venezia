$("#inizia").click(function(){
    $("#box").animate({
        width: "1000px"
    },{
        duration: 20000,
        easing: "linear",
        step: function(x){
            $("#testo").text(Math.round(x * 100 / 1000) + "%")
        }
    })
})

$("#ferma").click(function(){
    $("#box").stop()
})

$("#reset").click(function(){
    $("#box").css({width: ""})
})