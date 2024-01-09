const menuButton = document.getElementById('open-menu');
const navbar = document.querySelector('.navbar');
//desktop a partir de 1024px
const menuButtonDesktop = document.getElementById('menu-open-desk');
const navbarDesktop = document.querySelector('.navbar-container')
// Mostrar el menú al hacer clic en el botón
menuButton.addEventListener('click', function() {
    navbar.classList.toggle('show');
    menuButton.classList.toggle('hide');
    
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickInsideButton = menuButton.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideButton) {
        navbar.classList.remove('show');
        menuButton.classList.remove('hide'); 
    }
});

//interaccion en desktop a partir de 1024px

menuButtonDesktop.addEventListener('click', function() {
    navbarDesktop.classList.toggle('show');
    menuButtonDesktop.classList.toggle('hide');
    
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbarDesktop.contains(event.target);
    const isClickInsideButton = menuButtonDesktop.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideButton) {
        navbarDesktop.classList.remove('show');
        menuButtonDesktop.classList.remove('hide'); 
    }
});
//fin del 1024px

//al refrescar la pagina se vuelve arroba
window.onload = function() {
    // Desplazamiento suave hacia arriba al recargar la página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

/* document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-container');
    const containerNav = header.querySelector('.container-nav');
    const navbar = containerNav.querySelector('.navbar');
    const logo = containerNav.querySelector('.logo');
    const marca = containerNav.querySelector('.marcName');
 */
    // Abrir el menú al hacer clic en el logo
/*     containerNav.addEventListener('click', function (event) {
        navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
        logo.style.display = (logo.style.display === 'none') ? 'block' : 'none';
        marca.style.display = (marca.style.display === 'none') ? 'block' : 'none';
        event.stopPropagation();
    });
 */
    // Cerrar el menú al hacer clic fuera de él
/*     document.addEventListener('click', function (event) {
        const isClickInside = containerNav.contains(event.target);
        if (!isClickInside && navbar.style.display === 'block') {
            navbar.style.display = 'none';
            logo.style.display = 'block';
            marca.style.display = 'block';
        }
    });
}); */
/* document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-container');
    const containerNav = header.querySelector('.container-nav');
    const navbar = containerNav.querySelector('.navbar');
    const logo = containerNav.querySelector('.logo');
    const marca = containerNav.querySelector('.marcName');
    const closedButton = containerNav.querySelector('.container-closed');

    // Función para cerrar el menú
    const closeNavbar = function () {
        navbar.style.display = 'none';
        logo.style.display = 'block';
        marca.style.display = 'block';
    };

    // Abrir/cerrar el menú al hacer clic en el contenedor del nav
    containerNav.addEventListener('click', function (event) {
        navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
        logo.style.display = (logo.style.display === 'none') ? 'block' : 'none';
        marca.style.display = (marca.style.display === 'none') ? 'block' : 'none';
        event.stopPropagation();
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        const isClickInside = containerNav.contains(event.target);
        if (!isClickInside && navbar.style.display === 'block') {
            closeNavbar();
        }
    });

    // Cerrar el menú al hacer clic en el botón de cerrar (closed)
    closedButton.addEventListener('click', function (event) {
        closeNavbar();
        event.stopPropagation();
    });
}); */
