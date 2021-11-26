function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano > ano) {
        window.alert("[Erro] Verifique os dados e tente novamente! ")
    }   else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var sexo = " "
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.width = "250px"
        img.style.height= "250px"
        if (fsex[0].checked) {
            sexo = "Homem"
        if (idade >= 0 && idade <= 10){
         //criança
         img.setAttribute('src', 'menino.jpg')
        }
        
        else if (idade > 10 && idade <= 50 ){
            //jovem
        img.setAttribute('src','homem.jpg')
    }
        else {
            //velho
        img.setAttribute('src','velho.jpg')
        }

        } else if (fsex[1].checked) {
            sexo = "Mulher"
        if (idade >= 0 && idade <= 10){
                //criança
        img.setAttribute('src','menina.jpg')
               }
               
        else if (idade > 10 && idade <= 50 ){
                   //jovem
            img.setAttribute('src', 'mulher.jpg')
               }
        else {
                   //velho
            img.setAttribute('src','velha.jpg')
               }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
    }
}