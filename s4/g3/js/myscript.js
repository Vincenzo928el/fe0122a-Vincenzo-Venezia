var anni = 14;
var ingresso = (anni<18) ? "Ingresso proibito" : "Ingresso permesso";
document.write(ingresso);


saluto = () => "Buongiorno a tutti";
alert(saluto());


function operazioni(){
    var num1 = 10;
    var num2 = 5;

    function somma(){
        console.log(num1 + num2);
    }
    return somma();
}
operazioni();


alert(20 == 10);
alert(20 != 10);
document.write("<br>", 20 >= 30);