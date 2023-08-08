
const inputText = document.getElementById('input-text');
inputText.style = 'background: red; padding: 5px 10px; color: white;';
document.styleSheets[0].insertRule('#input-text::placeholder {color: #ebebeb}');


const divElements = document.querySelectorAll('div');
console.log(Array.from(divElements));
console.log(divElements)