const resultElement = document.getElementById('result');
const increaseBtn = document.getElementById('increment');
const decreaseBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let result = 0

function newResult() {
    resultElement.textContent = result
}

decreaseBtn.addEventListener('click', function() {
    result--;
    newResult();
});
increaseBtn.addEventListener('click', function() {
    result++;
    newResult();
});
resetBtn.addEventListener('click', function(){
    result = 0;
    newResult();
});