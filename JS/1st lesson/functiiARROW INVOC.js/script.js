//arrow function with style
const changeColor = () =>
{
    document.body.style.backgroundColor = "#a2a8d3";
}
changeColor();

const changefontsize = (size) =>
{
   let h1 =  document.getElementsByTagName('h1');
    for (let i = 0; i < h1.length; i++) {
        h1[i].style.fontSize=`${size}px`;
        
    }
}
changefontsize(100);

