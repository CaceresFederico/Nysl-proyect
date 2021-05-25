const pages = document.getElementsByClassName('pages');
const title = document.getElementById('titulo');
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');

function showHidePage (id){
    const getId = document.getElementById(id);
    for (i = 0; i < pages.length; i++) {
        pages[i].classList.add('hidepages');
    }
    getId.classList.remove('hidepages');
    title.innerText = `${id.toUpperCase()}`
}

document.addEventListener('DOMContentLoaded', ()=>{
    upButton.addEventListener ('click', () =>{
        window.scrollTo(0,0); 
    })
    downButton.addEventListener ('click', () =>{
        window.scrollTo(0,10000); 
})
});