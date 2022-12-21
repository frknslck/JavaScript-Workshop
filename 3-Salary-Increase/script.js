const asgari = 4500
let maas = +prompt("Lütfen maasinizi giriniz")

if (maas<4500){
    maas= maas+(maas*0.5)
    console.log(maas);
}else{
    maas= maas+(maas*0.1)
    console.log(maas);
}


