function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-adulto.png')
            }else if (idade >= 21 && idade <50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'homem-velho.png')
            }
        }else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade >= 21 && idade <50) {
                //Adulto
                img.setAttribute('src', 'mulher-jovem.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulher-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}