class Kapal {
    constructor(nama, jenis, tujuan, jumlah) {
        this.nama = nama
        this.jenis = jenis
        this.jumlah = jumlah
        this.tujuan = tujuan
        this._status = 'tersedia'
    }
    getStatus(){
        return this._status;
    }
    setStatusTersedia(){
        this._status = 'tersedia'
        return `kapal ${this.nama} dengan jenis ${this.jenis}  ${this._status}`
    }
    setStatusTidakTersedia(){
        this._status = 'tidak tersedia'
        return `kapal ${this.nama} dengan jenis ${this.jenis} ${this._status}`
    }
    infoKapal() {
        return `kapal ini ${this.nama} berjenis kapal ${this.jenis} dengan tujuan ${this.tujuan} berjumlah ${this.jumlah}`}  
}

class kodeKapal extends Kapal{
    constructor(nama, jenis, tujuan, kodeKapal, jumlah) {
        super(nama, jenis, tujuan, jumlah)
        this.kodeKapal = kodeKapal
    }
    kodekapal(){
        
        return `dengan kode kapal ${this.kodeKapal}`
    }
}
class kapalTanker extends Kapal{
    constructor(nama,jenis, tujuan, jumlah, kapasitasTanker) {
     super(nama, jenis, tujuan, jumlah)
     this.kapasitasTanker = kapasitasTanker   
    }
   

    kapasitastanker(){
        return `kapasitas tankernya ${this.kapasitasTanker}`
    }
}


let kapalPenumpang = new kodeKapal('kapal penumpang', 'ferry', 'bakau huni', 401, 20)
console.log(kapalPenumpang.infoKapal())
console.log(kapalPenumpang.setStatusTersedia())
console.log(kapalPenumpang.kodekapal())

let kapalpertamina = new kapalTanker('pertamina', 'tanker','bakau huni', 10, 10000)
console.log(kapalpertamina.infoKapal())
console.log(kapalpertamina.kapasitastanker())