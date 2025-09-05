const toggleBtn = document.getElementById('toggle');
const content = document.getElementById('content');

toggleBtn.addEventListener('click', function() {
    content.classList.toggle('hidden');

    toggleBtn.textContent = 
    content.classList.contains('hidden') 
    ? 'Показать' : 'Свернуть';
});