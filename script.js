let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)];

btn.addEventListener('click', function(){ 
    let input = document.getElementById('userInput').value;
    if (input == number){ 
        output.innerHTML = `You Guess Well Done :), Your number was ${number}`
    } else if (input < number){ 
        output.innerHTML = "Your Guessed too low!!"
    } else if (input > number){ 
        output.innerHTML = "Your Guessed too big!!"
    }
});
