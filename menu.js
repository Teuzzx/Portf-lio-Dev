
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})



//Parte das áreas de conhecimento


document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.tooltip').style.opacity = '1';
    });
  
    card.addEventListener('mouseleave', () => {
      card.querySelector('.tooltip').style.opacity = '0';
    });
  });
  



  //menu hamburger

  function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("visible");
    menu.classList.toggle("hidden");
}
