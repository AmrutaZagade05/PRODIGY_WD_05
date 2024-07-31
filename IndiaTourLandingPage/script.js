// document.addEventListener('DOMContentLoaded', (event) => {
//     const menuBar = document.getElementById('menu-bar');
//     const sideMenu = document.querySelector('.side-menu');
//     const banner = document.querySelector('.banner');

//     menuBar.addEventListener('click', () => {
//         sideMenu.classList.toggle('active');
//         banner.classList.toggle('active');
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const menuBar = document.querySelector('.menu-bar');
    menuBar.addEventListener('click', function() {
        toggleMenu();
    });

    function toggleMenu() {
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.classList.toggle('active');
    }
});
