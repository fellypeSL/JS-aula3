//substituir texto

let texto ="estão chegando as provas"
console.log(texto.replace("provas", "avaliações"))

//fixar um valor

let num = 223.45555
console.log(num.toFixed(2))

//caixa alerta

alert("olá meu amigo(a)")

//caixa de confirmação

let teste =confirm("Você é um aluno?")
console.log(teste)

//caixa de prompt

/*
let texto1 = prompt("digite seu nome")
//console.log("o nome dele é :", texto1)
document.write("O nome dele é:", texto1)
*/

//if

if(20 > 10){
document.write("20 é maior")
document.write("<br><br>")
}


if(20 < 10){
    document.write("20 é menor")

}

if(20 >= 10){
document.write("20 é maior ou igual")
document.write("<br><br>")
}

//if else

if(25 < 15){
    document.write("Numero maior")
}else{
    document.write("Numero menor")
    document.write("<br><br>")
}

//if else declarando variável

let numero =10

if(numero > 10){
    document.write("o Numero é maior")
}else{
    document.write("o numero é menor")
    document.write("<br><br>") 
}

//if else encadeado

//let idade = 18
let idade =prompt("Digite sua idade")

if(idade <= 12){
    document.write("é uma criança")
    document.write("<br><br>")
}else if(idade <= 17){
    document.write("é um adolescente")
    document.write("<br><br>")
}else if(idade <=30){
    document.write("é um jovem adulto")
    document.write("<br><br>")
}else{
    document.write("é um adulto experiente vulgo maduro")
    document.write("<br><br>")
}

let valor = 25
if(valor < 10 || valor > 20){
    document.write("Este valor não está entre 10 e 20")
}