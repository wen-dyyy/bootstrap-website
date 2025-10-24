let button=document.getElementById('menu')
let navbar=document.getElementById('sidenav')
let close=document.getElementById('close-btn')

button.addEventListener('click',()=>{
    navbar.classList.add('active')

})
close.addEventListener('click',()=>{
    navbar.classList.remove('active')
})