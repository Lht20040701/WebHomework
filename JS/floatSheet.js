const le = document.querySelector('.floatSheet .hidden .le')
const pau = document.querySelector('.floatSheet .hidden .pau')
const ri = document.querySelector('.floatSheet .hidden .ri')

let arr = ['audio/0.mp3', 'audio/1.mp3', 'audio/2.mp3', 'audio/3.mp3']

const mu = document.querySelector('.fixFooter .musicBox .tag')

let nowId = 1

le.addEventListener('click', function() {
    nowId = (nowId - 1 + arr.length) % arr.length
    mu.src = arr[nowId]
    console.log(nowId)
})

// console.log(mu)
pau.addEventListener('click', function() {
    if (mu.paused) mu.play()
    else mu.pause()
})

ri.addEventListener('click', function() {
    nowId = (nowId + 1 + arr.length) % arr.length
    mu.src = arr[nowId]
    console.log(nowId)
})