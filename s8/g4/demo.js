var FirstUser = /** @class */ (function () {
    function FirstUser(numberCarica, numeroCall) {
        this.costoMinuto = 0.20;
        this.numberCarica = numberCarica;
        this.numberCall = numeroCall;
    }
    FirstUser.prototype.ricarica = function (soldi) {
        return this.numberCarica += soldi;
    };
    FirstUser.prototype.minutiDurata = function (minuti) {
        return this.numberCall += minuti;
    };
    FirstUser.prototype.numero404 = function () {
        var soldi = this.numberCall * 0.20;
        //this.numberCall + minuti
        return this.numberCarica -= soldi;
    };
    FirstUser.prototype.getnumeroChiamte = function () {
        return this.numberCall;
    };
    FirstUser.prototype.azzeraCallM = function () {
        this.numberCall = 0;
    };
    return FirstUser;
}());
var Mario = new FirstUser(10, 0);
console.log(Mario);
console.log(Mario.ricarica(10));
console.log(Mario.minutiDurata(40));
console.log(Mario.numero404());
