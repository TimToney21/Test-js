const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    if(this.disabled) return;

    this.classList.add('loading');
    this.disabled = true;

    setTimeout(() => {
        this.classList.remove('loading');
        this.disabled = false;
    }, 2000)
})