const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


createBtn.onclick = function() {
    if(inputElement.value.length === 0)return
    const note = document.createElement('li')
    note.classList.add('note')

    const text = document.createElement('span')
    text.textContent = inputElement.value

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'Erase'

    deleteBtn.onclick = function() {
        note.remove();
    };

    note.appendChild(text)
    note.appendChild(deleteBtn)
    listElement.appendChild(note)
    inputElement.value = ''
    inputElement.focus()
}

/*listElement.addEventListener('click', function(event) {
    if (event.target.getAttribute('data-type') === 'remove') {
        const listItem = event.target.closest('li')
        if (listItem) {
            listItem.remove()
        }
    }
})

function getNoteTemplate() {
    return `
    <li class="list-group-item d-flex 
        justify-content-between
        align-items-center">
        <span>${inputElement}</span>
        <span>
            <span class="btn btn-small btn-danger" 
            data-type="remove">&times;</span>
        </span>
    </li>`
}*/