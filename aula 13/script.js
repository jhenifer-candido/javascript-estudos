function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha1.png'
        document.body.style.background = '#FCA10D'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#659DBF'
    } else {
        //boa noite
        img.src = 'noite1.png'
        document.body.style.background = '#5656F1'
    }
}
