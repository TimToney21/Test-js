const toggleBtn = document.getElementById("toggle");
const content = document.getElementById("content");
let itVisible = true;

toggleBtn.addEventListener('click', function() {
    if(itVisible) {
        content.style = 'display: none';
    } else {
        content.style.display = 'inline';
    }
    toggleBtn.textContent = itVisible ? 'Показать' : 'Скрыть';
    itVisible = !itVisible;
})