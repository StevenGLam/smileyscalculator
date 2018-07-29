let allDivs = document.querySelectorAll('div');



allDivs.forEach((div) =>  {
    
div.addEventListener('click', (e)=> {
    
    console.log(e.target.textContent);
})
})