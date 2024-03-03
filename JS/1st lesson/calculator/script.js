//calculator
document.querySelector('button').addEventListener('click',()=>
{
    const firstNumber = parseInt(document.querySelector('#first').value);
    const secondNumber = parseFloat(document.querySelector('#second').value);
    const result = document.querySelector('.result');

     let sum = firstNumber + secondNumber;
     
     result.textContent = sum;
})
