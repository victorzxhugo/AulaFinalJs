let bars = document.querySelector('.bars')
let aside = document.querySelector('aside')

bars.addEventListener('click', (e)=>{
    aside.classList.toggle('active-bars')
})