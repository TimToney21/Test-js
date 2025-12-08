const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
})

document.addEventListener('click', () => {
    cursor.classList.add('click')
    setTimeout(() => cursor.classList.remove('click'), 150)
})

const hoverables = document.querySelectorAll('a, button')
hoverables.forEach(el =>{
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'))
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'))
})