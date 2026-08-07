const menuButton = document.querySelector('.header__toggle');
const navigation = document.querySelector('.header__nav');
const navigationLinks = document.querySelectorAll('.header__nav a');

menuButton.addEventListener('click', () => {

    const menuIsOpen = navigation.classList.toggle('is-open');

    menuButton.setAttribute('aria-expanded', menuIsOpen);

});

navigationLinks.forEach(link => {

    link.addEventListener('click', () => {

        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');

    });

});