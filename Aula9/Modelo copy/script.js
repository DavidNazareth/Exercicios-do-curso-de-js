function clicar(){
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
var soma = Number(inicio + passo)
res.innerHTML(`Resposta ${soma}`)



}