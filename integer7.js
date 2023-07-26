// Integer7

let N =  +prompt("Sekund kiriting")

let restSecond = N % 3600
let second = restSecond % 60
let minute = (restSecond - second) / 60

console.log("minut =",minute);