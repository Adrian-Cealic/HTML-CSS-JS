const increase = document.getElementById('button1');
const decrease = document.getElementById('button2');
const paragraf = document.querySelector('p');
let size = 16;
increase.addEventListener('click',()=>
{
    size++;
    paragraf.style.fontSize = size + "px";
})

decrease.addEventListener('click',()=>
{
    size--;
    paragraf.style.fontSize = size + "px";
})
