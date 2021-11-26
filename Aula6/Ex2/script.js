function carregar() {
 var img = document.getElementById('img')
 var mensagem = document.getElementById('mensagem')
    img.style.width = "250px"
    img.style.height= "250px"
    var data = new Date()
    var horas = data.getHours()
    mensagem.innerHTML = `Agora são ${horas} horas`
    if (horas >= 8 && horas < 12) {
        // BOM DIA!
        img.src = ('manha.jpg')
         } else if (horas>= 12 && horas < 18) {
        // BOA TARDE!
         img.src = "tarde.jpg"
    } else {
        //BOA NOITE!
         img.src = "noite.jpg"
     }
}
