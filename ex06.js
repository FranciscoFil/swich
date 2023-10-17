const readline = require("readline-sync")
let pesoPlaneta = 0

console.log("Escolha um planeta para saber o peso dele")
console.log("1 - Mercurio")
console.log("2 - Venus")
console.log("3 - Marte")
console.log("4 - Jupiter")
console.log("5 - Saturno")
console.log("6 - Urano")

const planeta = readline.questionInt("Informe o planeta: ")

const pesoTerra = readline.questionFloat("Seu peso: ")

switch(planeta){
    case 1: 
        pesoPlaneta = (pesoTerra / 10) * 0.37
        break
    case 2: 
        pesoPlaneta = (pesoTerra / 10) * 0.88
        break
    case 3: 
        pesoPlaneta = (pesoTerra / 10) * 0.38
        break
    case 4: 
        pesoPlaneta = (pesoTerra / 10) * 2.64
        break
    case 5: 
        pesoPlaneta = (pesoTerra / 10) * 1.15
        break
    case 6: 
        pesoPlaneta = (pesoTerra / 10) * 1.17
        break
    default:
        pesoPlaneta = 0
}

console.clear()

console.log(`Seu peso neste planeta é: ${pesoPlaneta}`)