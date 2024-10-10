//percabangan 
function hitungkalori(aktivitas,waktu){
    let kalori = 0;

    if(aktivitas === "lari") {
        kalori = (60/5)*waktu;
}else if(aktivitas === "push up"){
    kalori = (200 / 30)*waktu;
}else if (aktivitas === "plank"){
    kalori = 5*waktu;
}else{
    console.log("Aktivitas tidak dikenali");
    return 0;
}

return kalori;
}

let totalKalori = 0;

let aktivitas1 = "lari";
let waktu1 = 10;

let aktivitas2 = "push up";
let waktu2 = 15;

let aktivitas3 = "plank";
let waktu3 = 5;

totalKalori+=hitungkalori(aktivitas1,waktu1);
totalKalori+=hitungkalori(aktivitas2,waktu2);
totalKalori+=hitungkalori(aktivitas3,waktu3);

console.log(`Totalkaloriyangterbakar ; ${totalKalori} kalori` );

console.log('=======================')


//perulangan
function palindrome(num){
    let number = num.toString();
    let nilai = ";"

    for(let i = number.legth-1;i>=0;i--){
        nilai+=number[i];
    }
    return number === nilai;
}

function findPalindrome(input){
    for (let num = input+1;;num++){
        if (palindrome(num)){
            return num;
        }
    }
}

console.log(findPalindrome(9));
console.log(findPalindrome(100));
console.log(findPalindrome(200));
console.log(findPalindrome(1000));
console.log(findPalindrome(2345));

console.log('================================');



//ARRAY
//A
console.log('A')
var siswa = [
    {nama:"A",nilai:85},
    {nama:"B",nilai:90},
    {nama:"C",nilai:75},
    {nama:"D",nilai:70},
    {nama:"E",nilai:95},
];

var totalNilai = 0;
for (var i =0;i<siswa.length;i++){
    totalNilai+=siswa[i].nilai;
}
var rataRata = totalNilai/siswa.length;
console.log("Rata-rata nilai siswa:"+rataRata);

var siswaLulus = [];
for(var i=0;i<siswa.length;i++){
    if(siswa[i].nilai>70){
        siswaLulus.push(siswa[i].nama);
    }
}
console.log("Siswa yang lulus:"+siswaLulus.join(","));

var sisiTerbaik=siswa[0];
for(var i= 1;i<siswa.length;i++){
    if(siswa[i].nilai>sisiTerbaik.nilai){
        sisiTerbaik=siswa[i];
    }
}
console.log("Siswa dengan nilai terbesar:"+ sisiTerbaik.nama+"("+sisiTerbaik.nilai+")");

console.log('B')
var mahasiswa = [
    "najilah",
    "rara",
    "bela",
    "rahma",
    "alya",
];

console.log("Mahasiswa yang diawali dengan huruf 'A':");
for (var i = 0;i<mahasiswa.length;i++){
    if (mahasiswa[i].charAt(0) === 'A'){
        console.log(mahasiswa[i]);
    }
}

var namaPanjang = mahasiswa[0];
for (var i = 1;i<mahasiswa.length;i++){
    if (mahasiswa [i].length>namaPanjang.length)
        {
        namaPanjang = mahasiswa[i];
    }
}
console.log("Mahasiswa dengan nama paling:"+namaPanjang);

var namaPendek = mahasiswa[0];
for (var i = 1;i<mahasiswa.length;i++){
    if (mahasiswa[i].length<namaPendek.length){
        namaPendek = mahasiswa[i];
    }
}
console.log("Mahasiswa dengan nama paling pendek:"+namaPendek);

console.log('C');
function ischeck(rajaPos,bentengPos){
    var rajaX = rajaPos[0];
    var rajaY = rajaPos[1];
    var bentengX = bentengPos[0];
    var bentengY = bentengPos[1];

    if(rajaX === bentengX || rajaY === bentengY){
        return true;
    }
    return false;
}
var rajaPos = [4,4];
var bentengPos = [4,7];

if(ischeck(rajaPos,bentengPos)){
    console.log("Raja dalam posisi check oleh Benteng!");
}else{
    console.log("Raja tidak dalam posisi check.");
}