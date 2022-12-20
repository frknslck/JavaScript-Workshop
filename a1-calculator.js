const n1 = +prompt("Lütfen 1. sayiyi giriniz")
const n2 = +prompt("Lütfen 2. sayiyi giriniz")
const op = prompt("Lütfen yapmak istediğiniz işlemin operatorunu giriniz (+  -  * /) ")

if (op === "+") {
    console.log(n1 + n2);
}else if (op === "-"){
    console.log(n1 - n2);
}else if (op === "*"){
    console.log(n1 * n2);
}else if (op === "/"){
    console.log(n1 / n2);
}else{
    console.log("Lütfen geçerli bir sayi/operator giriniz!");
}
