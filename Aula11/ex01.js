var a = [2,1,3,5,4]
a.push(6)
a.sort()
console.log(`A variavel é composta pelos valores ${a}`)
console.log(`A posição 1 é ${a[0]}`)
/* for (b = 0; b < a.length; b++) {
    console.log(` A posição ${b} tem o valor ${a[b]}`)
}
*/

for ( b in a) {
    console.log(` A posição ${b} tem o valor ${a[b]}`)
}
b = a.indexOf(5)
if (b == -1) {
    console.log("Valor não encontrado")
} else{
    console.log(`O valor 5 esta na posição ${b}`)
}
