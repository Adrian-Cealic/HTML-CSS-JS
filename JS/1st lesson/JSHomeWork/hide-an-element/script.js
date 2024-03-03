const button = document.querySelector('button');
const lista = document.getElementById("list-container");
button.addEventListener('click',()=>
{
    if(lista.style.display === "none")
    {
        lista.style.display = "block";
    }
    else
    {
        lista.style.display = "none";
    }
})