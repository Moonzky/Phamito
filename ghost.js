let ghost_index = 1;
changeghost(ghost_index)

function changeghost(n) {
    let ghost = document.querySelectorAll('.ghost-boxes > div')
    let ghost_nav = document.querySelectorAll('.ghost-nav > button')

    ghost.forEach     (index=> index.classList.remove('ghost-active'))
    ghost_nav.forEach (index=> index.classList.remove('ghost-nav-active'))

    ghost_nav[n-1].classList.add('ghost-nav-active')
    ghost[n-1].classList.add('ghost-active')
}

let slider_index = 0;
showslide(slider_index)


function changeslide(n) {
    showslide (slider_index += n)
}

function showslide(n) {
    let slides= document.querySelectorAll('.carrousel-slider > img')
    if (n >=slides.length) {
        slider_index= 0
    }
    if (n <0) {
        slider_index= slides.length -1
    }
    slides.forEach (slide=> slide.classList.remove('ghost-slider-active'))
    slides[slider_index].classList.add('ghost-slider-active')
}