function contar () {
let n = Number(document.getElementById('numero').value)
let tab = document.getElementById("tabuada")

if (n == 0) {
    alert("Digite um numero")
} else {
    tab.innerHTML = " "
    for ( c = Number(1); c <= 10 ; c++) {
    let item = document.createElement("option")
    item.text = `${n} x ${c} = ${n*c} `
    tabuada.appendChild(item)

    }
}

}