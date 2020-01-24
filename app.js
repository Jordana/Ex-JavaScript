
function dayHours() {
    var msg = window.document.getElementById('msg')
    var msgHora = window.document.getElementById('msgHora')
    var img = window.document.getElementById('imagem')
    var frase = window.document.getElementById('frase')
    var data = new Date()                           // Obtem a data/hora atual
    var hora = data.getHours()                    // especifica o hora na coleta do dado, new Date()
    //var hora = 00
    msgHora.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 5 && hora <= 12){
        img.src = "_imagens/dia.png"
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia.`
        frase.innerHTML = `Um pequeno pensamenro positivo pela manhã pode mudar todo o seu dia.`
    }else if (hora > 12 && hora <= 18){
        img.src = "_imagens/tarde.png"
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde.`
        frase.innerHTML = `Não escute as pessoas negativas. Junte-se a quem enxerga a vida com bom olhos. Alie-se a quem te ama de verdade e que curte seu sucesso e crescimento.`
    }else if (hora > 18 && hora <= 24){
        img.src = "_imagens/noite.png"
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa noite.`
        frase.innerHTML = `Apague a luz do seu quarto, abra a janeta e sinta o silêncio da noite. Escute o riso das estrelas e sinta o abraço que a lua de dá para que você possa descansar tranquilamente.`
    }else {
        img.src = "_imagens/madrugada.png"
        document.body.style.background = '#000000'
        msg.innerHTML = `Madrugada.`
        frase.innerHTML = `A noite é uma criança, a madrugada é o brinquedo. Não sou eu quem dorme tarde, é o sol que nasce cedo.`
    }
}