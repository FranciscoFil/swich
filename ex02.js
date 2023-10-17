const readline = require("readline-sync")
let resultado= 0
console.log("---ESCOLA APRENDER---")
console.log()

console.log("1 - nivel 1 = R$12,00 ")   
console.log("2 - nivel 2 = R$17,00 ")   
console.log("3 - nivel 3 = R$25,00 ")   

let nivel = readline.question("Informe o seu nivel: ")
let horas = readline.questionInt("Informe a hora trabalhada: ")
switch(nivel){
    case "1":
    resultado= horas * 12 
    console.log(` O seu salario é R$${resultado},00 `)
    case "2":
    resultado= horas * 17 
    console.log(` O seu salario é R$${resultado},00 `)
    case "3":
    resultado= horas * 25 
    console.log(` O seu salario é R$${resultado},00 `)
}
