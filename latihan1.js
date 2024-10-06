const SIK = {
    kelas: 'b',
    angkatan: 20,
    waldos: 'wsa',
}
console.log(SIK.kelas)
console.log(SIK.angkatan)
console.log(SIK.waldos)

const SIKKEL = {}

SIKKEL.kelas = 'b'
SIKKEL.angkatan = 20
SIKKEL.waldos = 'wsa'

console.log(SIKKEL.kelas)

delete SIKKEL.angkatan

let orang = {
    nama : 'bintang',
    umur : 20,
    jeniskelamin : 'laki-laki',
    kendaraan :{
        mobil : 'bugatti chirron',
        motor : 'suzuki hayabusa',

    }
}

console.log(orang.kendaraan.mobil)

orang.kendaraan.mobil = 'mazda miata'
console.log(orang.kendaraan.mobil)

let tampil = "nama saya " + orang.nama + " umur saya " + orang.umur + " dengan jeniskelamin " + orang.jeniskelamin
// document.getElementById("demo").innerHTML = tampil

let mahasiswa ={
    namaDepan : 'bintang',
    namaBelakang : 'hikmattulloh',
    namaLengkap : function(){
        return this.namaDepan + ' ' + this.namaBelakang
    }
}

let tampilMhs = "nama saya " + mahasiswa.namaDepan + " nama lengkap saya " + mahasiswa.namaLengkap()


function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama
    this.kelas = kelas
    this.angkatan = angkatan
}

const mhs1 = new mahasiswaSIK('bintang', 'b', 20)
const mhs2 = new mahasiswaSIK('habibi', 'b', 23)
const mhs3 = new mahasiswaSIK('keisha', 'b', 20)

console.log("mahasiswa ke 1 adalah " + mhs1.nama)
console.log("mahasiswa ke 2 adalah " + mhs2.nama)

