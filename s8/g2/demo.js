var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = 0;
        this.primaOperazione = 0;
        this.secondaOperazione = 0;
        this.terzaOperazione = 0;
        this.quartaOperazione = 0;
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (sommaAggiunta) {
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;
    };
    SonAccount.prototype.oneWithDraw = function (sommaPrelevata) {
        this.secondaOperazione = this.balanceInit + sommaPrelevata;
        return this.balanceInit -= sommaPrelevata;
    };
    SonAccount.prototype.twoDeposit = function (sommaAggiunta2) {
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    };
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    return MotherAccount;
}(SonAccount));
var conto1 = new SonAccount(40);
var conto2 = new MotherAccount(50);
conto1.oneDeposit(1);
console.log(conto1.balanceInit);
conto2.oneDeposit(5);
console.log(conto2.balanceInit);
var prelievo1 = new SonAccount(3000);
var prelievo2 = new SonAccount(4000);
prelievo1.oneWithDraw(500);
console.log(prelievo1.balanceInit);
prelievo2.oneWithDraw(656);
console.log(prelievo2.balanceInit);
