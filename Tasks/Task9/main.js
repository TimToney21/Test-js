const textElement = document.getElementById('text')
const words = ["Click", "Stuck", "Front", "Dolphin"]
const colors = ["#a29bfe", "#5ab6a9", "#fab1a0", "#74b9ff"]
let index = 0

textElement.addEventListener('click', () => {
    textElement.classList.add('fade-out')

    setTimeout(() => {
        index = (index + 1) % words.length
        textElement.textContent = words[index]
        textElement.style.color = colors[index]
        textElement.classList.remove('fade-out')
        textElement.classList.add('fade-in')
    }, 400)

    setTimeout(() => {
        textElement.classList.remove('fade-in')
    }, 600)
})