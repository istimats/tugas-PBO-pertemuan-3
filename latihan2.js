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
        return ` ${this._status}`
    }
    setStatusTidakTersedia(){
        this._status = 'tidak tersedia'
        return ` ${this._status}`
    }
    infoKapal() {
        return `kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan}`}  
}

class kodeKapal extends Kapal{
    constructor(nama, jenis, tujuan, kodeKapal, jumlah) {
        super(nama, jenis, tujuan, jumlah)
        this.kodeKapal = kodeKapal
    }
    kodekapal(){
        
        return ` dengan kode kapal ${this.kodeKapal}`
    }
}
class kapalTanker extends Kapal{
    constructor(nama,jenis, tujuan, jumlah, kapasitasTanker) {
     super(nama, jenis, tujuan, jumlah)
     this.kapasitasTanker = kapasitasTanker   
    }
   
    info(){
        console.log(`kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan} berjumlah ${this.jumlah} dengan kapasitas ${this.kapasitasTanker} MT`)
    }
}

class kapalPemumpang extends kodeKapal{
    constructor(nama,jenis, tujuan, kodeKapal, kapasitasPenumpang) {
     super(nama,jenis, tujuan, kodeKapal)
     this.kapasitasPenumpang = kapasitasPenumpang   
    }
   
    info(){
        console.log(this.infoKapal() + this.kodekapal() + ` berkapasitas ${this.kapasitasPenumpang} orang`)
    }
}

class kapalNelayan extends kodeKapal{
    constructor(nama,jenis,  kapasitasMuatan) {
     super(nama,jenis)
     this.kapasitasMuatan = kapasitasMuatan  
    }
   
    info(){
        console.log(`kapal ${this.nama} berjenis kapal ${this.jenis} bermuatan ${this.kapasitasMuatan} TON`)
    }
}

class kapalCargo extends kodeKapal{
    constructor(nama,jenis, tujuan, kodeKapal, kapasitasCargo) {
     super(nama,jenis, tujuan, kodeKapal)
     this.kapasitasCargo = kapasitasCargo   
    }
   
    info(){
        console.log(`kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan}`
        + this.kodekapal() + ` berkapasitas ${this.kapasitasCargo} TEU `+this.getStatus())
    }
}

class kapalKontainer extends kodeKapal{
    constructor(nama,jenis, tujuan, kodeKapal, kapasitasKontainer) {
     super(nama,jenis, tujuan, kodeKapal)
     this.kapasitasKontainer = kapasitasKontainer   
    }
   
    info(){
        console.log(`kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan}` 
        + this.kodekapal() + ` berkapasitas ${this.kapasitasKontainer} FEU `+this.getStatus())
    }
}

class kapalSelam extends kodeKapal{
    constructor(nama,jenis, tujuan, kodeKapal, bahanBakar) {
     super(nama,jenis, tujuan, kodeKapal)
     this.bahanBakar = bahanBakar   
    }
   
    info(){
        console.log(`kapal ${this.nama} berjenis kapal ${this.jenis} tujuan ${this.tujuan}`
         + this.kodekapal() + ` bahan bakar ${this.bahanBakar} `+this.getStatus())
    }
}




let kapal1 = new kapalTanker('pertammina', 'tanker','banyuwangi', 10, 10000)
let kapal2 = new kapalPemumpang('bahari2', 'pemumpang','gilimanuk',402, 100)
let kapal3 = new kapalNelayan('bahari3', 'nelayan', 403)
let kapal4 = new kapalCargo('evergreen', 'cargo','Hong Kong', 404, 1000)
let kapal5 = new kapalKontainer('socialcontrol', 'kontainer','Hong Kong', 405, 1000)
let kapal6 = new kapalSelam('jayaserem', 'selam','selat sunda', 406,'nuklir')





kapal1.info()
kapal2.info()
kapal3.info()
kapal4.info()
kapal5.info()
kapal6.info()
