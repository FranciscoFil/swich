const readline = require('readline-sync')

 

const numero1 = readline.questionFloat("Numero: ")

const numero2 = readline.questionFloat("Outro Numero: ")

 

console.log("O que deseja fazer com esses numeros: ")

console.log("+ - SOMAR")

console.log("- - SUBTRAIR")

console.log("* - MULTIPLICAR")

console.log("/ - DIVIDIR")

 

const operador = readline.question("Qual operação: ")

 

switch(operador){

    case "+":
        console.log(`${numero1} + ${numero2}: ${numero1 + numero2}`)
        break
    case "-":
        console.log(`${numero1} - ${numero2}: ${numero1 - numero2}`)
        break
    case "*":
        console.log(`${numero1} * ${numero2}: ${numero1 * numero2}`)
        break
    case "/":
        console.log(`${numero1} / ${numero2}: ${numero1 / numero2}`)
        break

       

    default:

        console.error("Opção invalida!")    

}