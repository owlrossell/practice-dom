const headingOne = document.createElement('h1');
const counterParagraph = document.createElement('p');
const buttonDecrease = document.createElement('button');
const buttonReset = document.createElement('button');
const buttonIncrease = document.createElement('button');
const buttonDiv = document.createElement('div');
buttonDiv.append(buttonDecrease, buttonReset, buttonIncrease);

let counter = 0;

const evaluateColor = (number, element) => {
    if(number < 0)
        element.style.color = '#A03A25';
    else if (number === 0)
        element.style.color = '#E99579';
    else
        element.style.color = '#E6DEAD';
}

headingOne.innerText = 'Contador';
counterParagraph.innerText = counter+'';
buttonIncrease.innerText = 'Incrementar';
buttonDecrease.innerText = 'Decrementar';
buttonReset.innerText = 'Resetear';

buttonIncrease.addEventListener('click', (event) => {
    counter++;
    counterParagraph.innerText = counter+'';
    evaluateColor(counter, counterParagraph);
})

buttonDecrease.addEventListener('click', (event) => {
    counter--;
    counterParagraph.innerText = counter+'';
    evaluateColor(counter, counterParagraph);
})

buttonReset.addEventListener('click', (event) => {
    counter = 0;
    counterParagraph.innerText = counter+'';
    evaluateColor(counter, counterParagraph);
})

document.body.append(
    headingOne,
    counterParagraph,
    buttonDiv
);


