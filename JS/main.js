const act= document.querySelectorAll('.imgBox .foldBox ul li:nth-child(2n+1)')
// console.log(act)
for (let i = 0; i < act.length; i ++ ) {
    act[i].addEventListener('click', function() {
        const pract = document.querySelector('.imgBox .foldBox .act')
        pract.className = 'hid'
        this.nextElementSibling.className = 'act'
        // console.log(this)
    })
}

const hidbut = document.querySelector('.fixFooter .hiderBut')
hidbut.addEventListener('click',  function () {
    // console.log(this.parentElement)
    const temp = this.parentElement.style.bottom
    // console.log(this.parentElement.style.bottom)
    if (temp === '') this.parentElement.style.bottom = '-48px'
    if (temp === '-48px') this.parentElement.style.bottom = ''
})

const search = document.querySelector('.h .search input[type="text"]')
search.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        alert('还没做好 !')
        this.value = ''
    }
})

const hd = document.querySelector('.h')
const tarAll = document.querySelectorAll('.h ul li:nth-child(2n+1)')
// console.log(tarAll)
for (let i = 0; i < tarAll.length; i ++ ) {
    tarAll[i].addEventListener('click', function() {
        if (i === 0) {
            document.querySelector('.Main1').style.display = 'block'
            document.querySelector('.Main2').style.display = 'none'
            document.querySelector('.Main3').style.display = 'none'
            document.querySelector('.Main4').style.display = 'none'
            document.querySelector('.Main5').style.display = 'none'
            document.querySelector('.floatSheet .expose').innerHTML = '当前为<br> <br><strong>首页</strong>'
            hd.style.background = '#a52828'
        } else if (i === 1) {
            document.querySelector('.Main1').style.display = 'none'
            document.querySelector('.Main2').style.display = 'block'
            document.querySelector('.Main3').style.display = 'none'
            document.querySelector('.Main4').style.display = 'none'
            document.querySelector('.Main5').style.display = 'none'
            document.querySelector('.floatSheet .expose').innerHTML = '当前为<br> <br><strong>高山</strong>'
            hd.style.background = '#796038'
        }
        else if (i === 2) {
            document.querySelector('.Main1').style.display = 'none'
            document.querySelector('.Main2').style.display = 'none'
            document.querySelector('.Main3').style.display = 'block'
            document.querySelector('.Main4').style.display = 'none'
            document.querySelector('.Main5').style.display = 'none'
            document.querySelector('.floatSheet .expose').innerHTML = '当前为<br> <br><strong>河流</strong>'
            hd.style.background = '#43766f'
        }
        else if (i === 3) {
            document.querySelector('.Main1').style.display = 'none'
            document.querySelector('.Main2').style.display = 'none'
            document.querySelector('.Main3').style.display = 'none'
            document.querySelector('.Main4').style.display = 'block'
            document.querySelector('.Main5').style.display = 'none'
            document.querySelector('.floatSheet .expose').innerHTML = '当前为<br> <br><strong>草原</strong>'
            hd.style.background = '#49582d'
        }
        else if (i === 4) {
            document.querySelector('.Main1').style.display = 'none'
            document.querySelector('.Main2').style.display = 'none'
            document.querySelector('.Main3').style.display = 'none'
            document.querySelector('.Main4').style.display = 'none'
            document.querySelector('.Main5').style.display = 'block'
            document.querySelector('.floatSheet .expose').innerHTML = '当前为<br> <br><strong>雪地</strong>'
            hd.style.background = '#6a7b7b'
        }
    })
}

const fi = document.querySelector('.comment .commentInputArea .fire')
const ta = document.querySelector('.comment .commentInputArea .tag')
const da = document.querySelector('.comment .displayArea .tag')

fi.addEventListener('click', function() {
    // console.log(ta.value)
    if (ta.value === '') {
        alert('哥们打两个字再发呗')
        return ;
    }
    let child = document.createElement('li')
    child.innerHTML = `
        <div class="txBox">
            <img src="images/tx.png" style="width: 100%; height: 100%;" alt="">
        </div>
        <div class="cord"></div>
        <div class="name">
            匿名用户哦 ♥ :
        </div>
        <div class="speak">${ta.value}</div>
    `
    da.appendChild(child)
    ta.value = ''
})

ta.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        if (ta.value === '') {
            alert('哥们打两个字再发呗')
            return ;
        }
        let child = document.createElement('li')
        child.innerHTML = `
        <div class="txBox">
            <img src="images/tx.png" style="width: 100%; height: 100%;" alt="">
        </div>
        <div class="cord"></div>
        <div class="name">
            匿名用户哦 ♥ :
        </div>
        <div class="speak">${ta.value}</div>
    `
        da.appendChild(child)
        ta.value = ''
    }
})