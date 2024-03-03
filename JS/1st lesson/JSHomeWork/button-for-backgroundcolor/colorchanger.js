let colorChanger = document.querySelector('button');
colorChanger.addEventListener('click',()=>
{
    let hexNumbers =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","F",]
    let hexColorCode ="#";

    for(let i=0;i<6;i++)
{
    let random = Math.floor(Math.random()*hexNumbers.length)
    hexColorCode+=hexNumbers[random];
}
document.body.style.backgroundColor =hexColorCode;
    
})
