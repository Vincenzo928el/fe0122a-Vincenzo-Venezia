class SonAccount{
    balanceInit: number = 0
    primaOperazione: number = 0
    secondaOperazione: number = 0
    terzaOperazione: number = 0
    quartaOperazione: number = 0
    quintaOperazione: number = 0

    constructor(balanceInit: number){
        this.balanceInit = balanceInit
    }

    oneDeposit(sommaAggiunta:number):number{
        this.primaOperazione = this.balanceInit + sommaAggiunta
        return this.balanceInit += sommaAggiunta
    }
    oneWithDraw(sommaPrelevata:number):number{
        this.secondaOperazione = this.balanceInit + sommaPrelevata
        return this.balanceInit -= sommaPrelevata
    }
    twoDeposit(sommaAggiunta2:number):number{
        this.terzaOperazione = this.balanceInit + sommaAggiunta2
        return this.balanceInit += sommaAggiunta2
    }
    twoWithDraw(sommaPrelevata2:number):number{
        this.quartaOperazione = this.balanceInit + sommaPrelevata2
        return this.balanceInit -= sommaPrelevata2
    }
}

class MotherAccount extends SonAccount{
    interest: number
    constructor(balanceInit: number, interest:number){
        super(balanceInit)
        this.interest = interest
    }
    addInterest(i:number):number{
        i*10/100
        return this.interest + i
    }
}

let conto1 = new SonAccount(40)
//let conto2 = new MotherAccount(50)

conto1.oneDeposit(1)
console.log(conto1.balanceInit)

/*conto2.oneDeposit(5)
console.log(conto2.balanceInit)*/

let prelievo1 = new SonAccount(3000)
let prelievo2 = new SonAccount(4000)

prelievo1.oneWithDraw(500)
console.log(prelievo1.balanceInit)

prelievo2.oneWithDraw(656)
console.log(prelievo2.balanceInit)


