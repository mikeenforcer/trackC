let number = document.getElementById('number1');
let counter = 0;

setInterval(() => {
    if (counter == 65) {
        clearInterval;
    }
    else {
        counter += 1;
        number.innerHTML = `${counter}%`;
    }

},20);
let number1 = document.getElementById('number2');
let counter1 = 0;

setInterval(() => {
    if (counter1 == 65) {
        clearInterval;
    }
    else {
        counter1 += 1;
        number1.innerHTML = `${counter1}%`;
    }

},20);