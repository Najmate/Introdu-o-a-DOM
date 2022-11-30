function handleClick() {
    document.querySelector('#titulo').innerHTML = 'Saitama'

}

function handleMove() {
    document.querySelector('#titulo').innerHTML = 'Saitama'

    if (titulo = 'Saitama') {
        document.querySelector('#foto1').src = 'https://www.intoxianime.com/wp-content/uploads/2019/07/one-punch-man-Saitama-1280x720.jpg'
        document.querySelector('#frase').innerHTML = ' "Eu não estou trabalhando como herói por que quero que vocês idiotas me admirem! Eu faço porque eu quero!"'
        document.querySelector('#frase2').innerHTML = ' "Antes, quando lutava sentia tantas emoções dentro de mim... Medo, pânico, raiva... Mas agora eu posso terminar tudo em apenas um golpe."'
        document.querySelector('#frase3').innerHTML = ' "Se você realmente quer se tornar forte, pare de se preocupar com o que os outros pensam sobre você. Viver a sua vida não tem nada a ver com o que os outros pensam."'

    }



}

function handleOut() {
    document.querySelector('#titulo').innerHTML = 'Calveludo'

    if (titulo = 'Calveludo') {
        document.querySelector('#foto1').src = 'https://i.ytimg.com/vi/DukWMgAu69E/maxresdefault.jpg'
        document.querySelector('#frase').innerHTML = '"O maior medo do ser humano, é ficar calvo!!!"'
        document.querySelector('#frase2').innerHTML = ' "Eu juro... É a saideira, da saideira, da saideira!"'
        document.querySelector('#frase3').innerHTML = '"Eu só bebo em algumas poucas circunstâncias: quando estou feliz, quando estou triste, quando estou sozinho, quando estou acompanhado, quando estou sem fome e quando estou com fome. Fora isso, nem toco na bebida. A não ser que eu esteja com sede."'
    }
}
