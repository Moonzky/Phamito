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