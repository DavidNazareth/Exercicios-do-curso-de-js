function contar(){
let inicio = window.document.getElementById('inicio')
let fim = window.document.getElementById('fim')
let passo = window.document.getElementById('passo')
let res = window.document.getElementById('res')
if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert("[ERRO] Faltam dados!")
    res.innerHTML = "Impossivel contar"
}else {
    res.innerHTML = "Contando: "
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0){
        alert('Passo invalido, considerando passo 1')
        p = 1
    }
    if (i < f){
        for(c = i;c <= f ; c += p) {
        res.innerHTML += `${c} \u{1F449}`
    }
    } else {
        for( c= i; c >= f ; c-= p){
            res.innerHTML += `${c} \u{1F449}`
        }        
    }res.innerHTML += `\u{1F3C1}`
}
}