const menu = document.querySelector('#menu')
const opt = document.querySelector('.yelp-others')
opt.style.zIndex = 4
console.dir(opt)

menu.addEventListener('mouseenter', (evt) => {
    if (opt.style.display === 'block') {
        opt.style.display = 'none'
    } else {
        opt.style.display = 'block'
        
    }
})
menu.addEventListener('click', (evt) => {
    if (opt.style.display === 'block') {
        opt.style.display = 'none'
    } else {
        opt.style.display = 'block'
    }
})


