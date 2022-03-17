fetch('Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var capi = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        //console.log(abb.mostraModello())
        console.log(capi);
    });
});
var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    /*mostraModello():string{
        return `Il modello è ${this.modello}`
    }*/
    Vestiti.prototype.getSaldoCapo = function () {
        return Math.ceil(this.prezzoivainclusa * this.saldo / 100);
    };
    /*getSaldoCapo(sconto:number):any{
        sconto = this.saldo
        return this.prezzoivainclusa * sconto / 100
    }*/
    Vestiti.prototype.getAcquistoCapo = function () {
        var sconto = this.prezzoivainclusa * this.saldo / 100;
        return Math.ceil(this.prezzoivaesclusa - sconto);
    };
    return Vestiti;
}());
//CAPO 1
var capo1 = new Vestiti(1, 2121, "primavera", "cardigan", 1231, 5, "nero", 18.50, 22.57, "negozio", 45);
console.log(capo1);
console.log("Lo sconto \u00E8 di + capo1.getSaldoCapo() + \u20AC");
console.log("Il prezzo scontato \u00E8 di + capo1.getAcquistoCapo() + \u20AC");
//CAPO 2
var capo2 = new Vestiti(2, 4111, "estate", "t-shirt", 1251, 6, "rosso", 5.50, 6.71, "magazzino", 30);
console.log(capo2);
console.log("Lo sconto \u00E8 di + capo2.getSaldoCapo() + \u20AC");
console.log("Il prezzo scontato \u00E8 di + capo2.getAcquistoCapo() + \u20AC");
//CAPO 3
var capo3 = new Vestiti(3, 1181, "inverno", "felpa", 1229, 8, "beige", 17.50, 21.35, "negozio", 50);
console.log(capo3);
console.log("Lo sconto \u00E8 di + capo3.getSaldoCapo() + \u20AC");
console.log("Il prezzo scontato \u00E8 di + capo3.getAcquistoCapo() + \u20AC");
