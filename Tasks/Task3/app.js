const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


createBtn.onclick = function() {
    if(inputElement.value.length === 0) {return}
    listElement.insertAdjacentHTML(
        'beforeend', 
            `<li class="list-group-item d-flex 
            justify-content-between
            align-items-center">
            <span>${inputElement.value}</span>
            <span>
                <span class="btn btn-small btn-danger" 
                data-type="remove">&times;</span>
            </span>`)
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