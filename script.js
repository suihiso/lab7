const sliderLine = document.querySelector('.sliderLine')
const leftBtn = document.querySelector('#leftBtn')
const rightBtn = document.querySelector('#rightBtn')

let offset = 0

leftBtn.addEventListener('click', function(){
    offset -= 500
    if (offset < 0) offset = 1500
    sliderLine.style.right = offset + 'px'
})

rightBtn.addEventListener('click', function(){
    offset += 500
    if (offset > 1500) offset = 0
    sliderLine.style.right = offset + 'px'
})