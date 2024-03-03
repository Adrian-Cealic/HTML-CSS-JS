//-------DROP DOWN MENU----------------
// const dropdownToggle = document.querySelector('.dropdown_toggle')
// const dropdown = document.querySelector('.dropdown')

// dropdown.addEventListener('click',()=>
// {
//     dropdown.classList.toggle('active')
// })

// document.addEventListener('click',(event)=>
// {
//     if(!dropdown.contains(event.target)){
//         dropdown.classList.remove('active');
//     }
// })
//----------------type to search---------------
// function filterProducts(text)
// {
//     const producutList = document.querySelector('product-list');
//     const products = document.querySelectorAll('.product');
//     products.forEach(product =>
//         {
//             if(product.textContent.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
//             {
//                 product.style.display = "block";
//             }
//             else
//             {
//                 product.style.display = "none";
//             }
//         })    //pentru fiecare element gasit in array executa un callback
// }
// filterProducts("");

//---------------TO DO-----------------
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

function removeTask(btn)
{
    const li = btn.parentElement;
    li.remove();
}


function addTask()
{
   const taskContent = taskInput.value.trim();
   if(taskContent !== "")
   {
    const li = document.createElement('li');
    li.innerHTML=`
    <span>${taskContent}</span>
    <button class = 'delete-btn' onclick='removeTask(this)'>Remove</button>`
    taskList.appendChild(li);
    taskInput.value = "";
   }

}
document.querySelector('.add-btn').addEventListener('click',addTask);

//---------SLIDER-------------
// const slides = document.querySelectorAll('.slide');
// const left = document.querySelector('.left');
// const right = document.querySelector('.right');

// let currentSliderIndex = 0;
// function showSlide(index)
// {
//    slides.forEach((slide,i)=>
//    {
//     if(i === index)  // == dupa valorea , === dupa tipuri de date
//     {
//         slide.classList.add('active');
//     }
//     else
//     {
//         slide.classList.remove('active');
//     }
//    })
// }
// right.addEventListener('click',()=>
// {
//     currentSliderIndex = (currentSliderIndex - 1 + slides.length) % slides.length; //pentru a fi infinit
//     showSlide(currentSliderIndex);
// })

// left.addEventListener('click',()=>
// {
//     currentSliderIndex = (currentSliderIndex + 1) % slides.length; //pentru a fi infinit
//     showSlide(currentSliderIndex);
// })
// showSlide(currentSliderIndex);
