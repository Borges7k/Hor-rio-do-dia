function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    var hora1 = data.getMinutes()
    
    msg.innerText = `Agora são ${hora} horas e ${hora1} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'Damanha.png'
        document.body.style.background = '#6a281e'
    } else if (hora >= 12 && hora <=18) {
        // BOA TARDE
        img.src = 'Datarde.png'
        document.body.style.background = '#ffc775'
    } else {
        //BOA NOITE
        img.src = 'Danoite.png'
        document.body.style.background = '#154775'
    }
}fdd940
