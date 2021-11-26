let adicionados = document.getElementById("adicionados")
let res = document.getElementById("adicionados")
let ress = document.getElementById("res")
let valor = []
function adicionar() {
    let numero = Number(document.getElementById("numeros").value)
    let tostando = valor.indexOf(numero)
    if (tostando === -1 && numero >= 1 && numero <= 100) {
        valor.push(numero)
    let item = document.createElement("option")
    item.text = (`Valor ${numero} adicionado`)
    adicionados.appendChild(item)  
    ress.innerHTML = " "
} else{alert("[ERRO] Valor invalido")}
}
function finalizar() {
    if (valor.length == 0) {
        document.getElementById("res").innerHTML = "Adicione valores antes de finalizar!"
    } else {
   
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
       for (pos in valor){
           soma += valor[pos]
           if (valor[pos] > maior ) {
               maior = valor[pos]
           } if (valor[menor] < menor){
               menor = valor[menor]
           }
       }    
        let tot = valor.length
        let media = soma / tot

    ress.innerHTML = " "
    ress.innerHTML += `Ao todo temos ${tot} numeros cadastrados`
    ress.innerHTML += `<p> O maior valor é ${maior} e o menor é ${menor}`
    ress.innerHTML += `<p> A soma de todos os valores é ${soma}`
    ress.innerHTML += `<p> A media dos valores é ${media}`

    }
    
    }
    




/*
______________________________________________________________________________________ 
let adicionados = document.getElementById("adicionados")
let res = document.getElementById("adicionados")
let valor = []
function adicionar() {
    let numero = Number(document.getElementById("numeros").value)
    let tostando = valor.indexOf(numero)
    if (tostando === -1 && numero >= 1 && numero <= 100) {
        valor.push(numero)
    let item = document.createElement("option")
    item.text = (`Valor ${numero} adicionado`)
    adicionados.appendChild(item)
} else{alert("[ERRO] Valor invalido")}
}
______________________________________________________________________________________
*/
