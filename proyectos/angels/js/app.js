const menuToggle = document.querySelector('.header__toggle');
const navigation = document.querySelector('.header__nav');
const navigationLinks = document.querySelectorAll('.header__nav a');

if (menuToggle && navigation) {

    menuToggle.addEventListener('click', () => {

        const isOpen = navigation.classList.toggle('is-open');

        menuToggle.setAttribute('aria-expanded', isOpen);

    });

    navigationLinks.forEach(link => {

        link.addEventListener('click', () => {

            navigation.classList.remove('is-open');

            menuToggle.setAttribute('aria-expanded', 'false');

        });

    });

}