// const asgari = 4500
const gelir = +prompt("Lütfen gelirinizi giriniz")
const gider = +prompt("Lütfen giderinizi giriniz")

const net = gelir - gider

net>asgari? 
console.log("Kredi alabilirsiniz") : console.log("Kredi alamazsiniz");

