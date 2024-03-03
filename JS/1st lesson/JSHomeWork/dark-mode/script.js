document.addEventListener('DOMContentLoaded',()=>
{
    const darkLightTheme = document.getElementById('btn1');
    darkLightTheme.addEventListener('click',()=>
    {
        const element = document.body;
        element.classList.toggle("dark-mode");
    })
})
