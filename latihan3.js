class SensorPasut {
    constructor(nama, lokasi) {
      this.nama = nama  
      this.lokasi = lokasi
      this._status ='mati'
    } 
    aktifkan() {
        this._status = 'hidup'
        return `sensor ${this.nama} dengan lokasi ${this.lokasi} aktif`;
    }
    matikan() {
        this._status = 'mati'
        return `sensor ${this.nama} dengan lokasi ${this.lokasi} mati`;
    }  
    getStatus() {
     return `status sensor ${this.nama} dengan lokasi ${this.lokasi} ${this._status}`   
    }         
}

class usiaSensor extends SensorPasut{
    constructor(nama, lokasi, usia){
        super(nama, lokasi)
        this.usia = usia
    }
    usiaSensor() {
        return `sensor ${this.nama} dengan lokasi ${this.lokasi} aktif dengan usia ${this.usia} tahun`
    }
}

let sensorPasutMerak = new usiaSensor('selat sunda', 'merak', 80)
console.log(sensorPasutMerak.aktifkan())
console.log(sensorPasutMerak.getStatus())
console.log(sensorPasutMerak.usiaSensor())