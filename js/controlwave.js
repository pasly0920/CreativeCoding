const controlMenuIcon = document.querySelector('.fas');
const controlMenu = document.querySelector('.controlMenu');
const controlMenuPop = document.querySelector('.fa-times');

controlMenuIcon.addEventListener('click', (event) => {
    event.target.classList.toggle('hidden');
    controlMenu.classList.add('show');
})

controlMenuPop.addEventListener('click', (event) => {
    controlMenu.classList.remove('show');
    controlMenuIcon.classList.toggle('hidden');
})