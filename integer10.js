// Integer10

let N =  +prompt("Sekund kiriting")

let restSecond = N % 3600
let second = restSecond % 60
let hour = (N - restSecond) / 3600

console.log(hour);
console.log(second);