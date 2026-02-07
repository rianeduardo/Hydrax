const menu = document.getElementById('menu');
const overlayMenu = document.getElementById('overlay-menu');
const sidebar = document.getElementById('sidebar');

menu.addEventListener('click', () => {
    overlayMenu.classList.add('active');
    sidebar.classList.add('active');
});

overlayMenu.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
    sidebar.classList.remove('active');
});