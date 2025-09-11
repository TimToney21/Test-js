const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


createBtn.onclick = function() {
    if(inputElement.value.length === 0) {return}
    const note = document.createElement('li')
    const text = document.createElement('span')
    text.textContent = inputElement.value 
    note.appendChild(text)
    listElement.appendChild(note)
    inputElement.value = ''
}

listElement.addEventListener('click', function(event) {
    if (event.target.getAttribute('data-type') === 'remove') {
        const listItem = event.target.closest('li')
        if (listItem) {
            listItem.remove()
        }
    }
})