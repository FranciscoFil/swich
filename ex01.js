const readline = require("readline-sync")



console.log("---Informe o seu sexo---")
console.log()
console.log("M -  PARA MASCULINO")
console.log("F - PARA FEMININO")
console.log()
let sexo = readline.question("Qual o seu sexo: ")

switch(sexo){
    case "M":
    console.log("SEXO VALIDO")
    console.log("O seu sexo é Masculino")
    break

    case "F":
    console.log("SEXO VALIDO")
    console.log("O seu sexo é Feminino")
    break

    default:
        console.log("Sexo invalido!")
}