let random = randomNumber();

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function display() {
    const input = document.getElementById('num-input').value;
    const guess = parseInt(input, 10);

    if (guess === random) {
        document.getElementById('result').innerHTML = 'Correct! You guessed it right.';
    } else {
        document.getElementById('result').innerHTML = 'Wrong! Not matched.';
    }
}
