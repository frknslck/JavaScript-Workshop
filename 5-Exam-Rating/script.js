const not = +prompt("Lütfen not değerini giriniz")

if (not>0 && not<25) {
    console.log("FF");  
} else if (not>26 && not<45) {
    console.log("DD");
} else if (not>46 && not<65) {
    console.log("CC");
} else if (not>66 && not<75) {
    console.log("BB");
} else if (not>76 && not<90) {
    console.log("BA");
} else if (not>91 && not<100) {
    console.log("AA");
} else {
    console.log("Please enter numbers between 0-100");
}
