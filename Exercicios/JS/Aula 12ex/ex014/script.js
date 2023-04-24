function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
    if(hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotodamanha.png'
        document.body.style.background = '#d1ac77'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'fotodatarde.png'
        document.body.style.background = '#febd5a'
    } else {
        // Boa noite!
        img.src = 'fotodanoite.png'
        document.body.style.background = '#433556'
    }
}
