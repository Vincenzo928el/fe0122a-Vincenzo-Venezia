interface Smartphone{
    numberCarica: number
    numberCall: number
    costoMinuto: number

    ricarica(soldi:number):number
    minutiDurata(minuti:number):number
    numero404():number
    getnumeroChiamte():number
}

class FirstUser implements Smartphone{
    numberCarica: number
    numberCall: number
    costoMinuto: number = 0.20

    constructor(numberCarica:number, numeroCall:number){
        this.numberCarica = numberCarica
        this.numberCall = numeroCall
    }

    ricarica(soldi: number){
        return this.numberCarica += soldi
    }
    minutiDurata(minuti:number){
        return this.numberCall += minuti
    }
    numero404(){
        let soldi = this.numberCall * 0.20
        //this.numberCall + minuti
        return this.numberCarica -= soldi
    }
    getnumeroChiamte(){
        return this.numberCall
    }
    azzeraCallM(): void{
        this.numberCall = 0
    }
}
let Mario = new FirstUser(10, 0)

console.log(Mario)
console.log(Mario.ricarica(10))
console.log(Mario.minutiDurata(40))
console.log(Mario.numero404())