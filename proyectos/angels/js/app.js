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


// Catálogo dinámico de fragancias
const contenedorMujer = document.querySelector('#fragancias-mujer');
const contenedorHombre = document.querySelector('#fragancias-hombre');
const categoriaMujer = document.querySelector('#categoria-mujer');
const categoriaHombre = document.querySelector('#categoria-hombre');
const botonesFiltro = document.querySelectorAll('.fragrance-filter');
const botonesGenero = document.querySelectorAll('.fragrance-gender-filter');
const estadoFiltro = document.querySelector('#filtro-estado');

let sensacionActiva = 'todas';
let generoActivo = 'todos';

function crearTarjetaFragancia(fragancia) {

    const tarjeta = document.createElement('article');
    tarjeta.className = 'fragrance-card';

    const encabezado = document.createElement('div');
    encabezado.className = 'fragrance-card__header';

    const titulo = document.createElement('h4');
    titulo.className = 'fragrance-card__name';
    titulo.textContent = fragancia.nombre;

    const casa = document.createElement('p');
    casa.className = 'fragrance-card__house';
    casa.textContent = `Inspirada en ${fragancia.casa}`;

    encabezado.append(titulo, casa);

    const detalle = document.createElement('div');
    detalle.className = 'fragrance-card__detail';

    const etiquetaCaracter = document.createElement('span');
    etiquetaCaracter.className = 'fragrance-card__label';
    etiquetaCaracter.textContent = 'Carácter';

    const caracter = document.createElement('p');
    caracter.className = 'fragrance-card__character';
    caracter.textContent = fragancia.caracter;

    detalle.append(etiquetaCaracter, caracter);

    const sensaciones = document.createElement('div');
    sensaciones.className = 'fragrance-card__sensations';
    sensaciones.setAttribute('aria-label', 'Sensaciones');

    fragancia.sensaciones.forEach(sensacion => {
        const item = document.createElement('span');
        item.textContent = sensacion;

        if (sensacionActiva !== 'todas' && sensacion === sensacionActiva) {
            item.classList.add('is-highlighted');
        }

        sensaciones.appendChild(item);
    });

    const mensaje = `Hola, quisiera información sobre la fragancia ${fragancia.nombre}, inspirada en ${fragancia.casa}, de Angel's.`;

    const acciones = document.createElement('div');
    acciones.className = 'fragrance-card__actions';

    const conocer = document.createElement('button');
    conocer.type = 'button';
    conocer.className = 'fragrance-card__learn';
    conocer.textContent = 'Conocer carácter';
    conocer.setAttribute('aria-label', `Conocer el carácter ${fragancia.caracter}`);
    conocer.addEventListener('click', () => abrirModalCaracter(fragancia));

    const enlace = document.createElement('a');
    enlace.className = 'fragrance-card__whatsapp';
    enlace.textContent = 'Consultar';
    enlace.href = `https://wa.me/573116435729?text=${encodeURIComponent(mensaje)}`;
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.setAttribute('aria-label', `Consultar ${fragancia.nombre} por WhatsApp`);

    acciones.append(conocer, enlace);
    tarjeta.append(encabezado, detalle, sensaciones, acciones);

    return tarjeta;
}

function obtenerFraganciasFiltradas() {

    return fragancias.filter(fragancia => {

        const coincideGenero =
            generoActivo === 'todos' || fragancia.categoria === generoActivo;

        const coincideSensacion =
            sensacionActiva === 'todas' || fragancia.sensaciones.includes(sensacionActiva);

        return coincideGenero && coincideSensacion;
    });
}

function actualizarEstadoFiltro(cantidad) {

    if (!estadoFiltro) {
        return;
    }

    const generoTexto =
        generoActivo === 'mujer' ? 'para mujer' :
        generoActivo === 'hombre' ? 'para hombre' : '';

    const sensacionTexto =
        sensacionActiva === 'todas' ? '' : `con ${sensacionActiva.toLowerCase()}`;

    const detalle = [generoTexto, sensacionTexto].filter(Boolean).join(' ');

    estadoFiltro.textContent = `${cantidad} ${cantidad === 1 ? 'fragancia' : 'fragancias'}${detalle ? ` ${detalle}` : ' disponibles'}`;
}

function mostrarFragancias() {

    if (typeof fragancias === 'undefined') {
        return;
    }

    if (contenedorMujer) {
        contenedorMujer.replaceChildren();
    }

    if (contenedorHombre) {
        contenedorHombre.replaceChildren();
    }

    const fraganciasFiltradas = obtenerFraganciasFiltradas();
    let cantidadMujer = 0;
    let cantidadHombre = 0;

    fraganciasFiltradas.forEach(fragancia => {

        const tarjeta = crearTarjetaFragancia(fragancia);

        if (fragancia.categoria === 'mujer' && contenedorMujer) {
            contenedorMujer.appendChild(tarjeta);
            cantidadMujer++;
        }

        if (fragancia.categoria === 'hombre' && contenedorHombre) {
            contenedorHombre.appendChild(tarjeta);
            cantidadHombre++;
        }

    });

    if (categoriaMujer) {
        categoriaMujer.hidden = cantidadMujer === 0;
    }

    if (categoriaHombre) {
        categoriaHombre.hidden = cantidadHombre === 0;
    }

    actualizarEstadoFiltro(fraganciasFiltradas.length);
}

function activarFiltro(boton) {

    sensacionActiva = boton.dataset.sensacion;

    botonesFiltro.forEach(item => {
        const estaActivo = item === boton;
        item.classList.toggle('is-active', estaActivo);
        item.setAttribute('aria-pressed', estaActivo.toString());
    });

    mostrarFragancias();
}

function activarFiltroGenero(boton) {

    generoActivo = boton.dataset.genero;

    botonesGenero.forEach(item => {
        const estaActivo = item === boton;
        item.classList.toggle('is-active', estaActivo);
        item.setAttribute('aria-pressed', estaActivo.toString());
    });

    mostrarFragancias();
}

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => activarFiltro(boton));
});

botonesGenero.forEach(boton => {
    boton.addEventListener('click', () => activarFiltroGenero(boton));
});


// Ventana de descripción del carácter
const modalCaracter = document.querySelector('#modal-caracter');
const modalCaracterTitulo = document.querySelector('#modal-caracter-titulo');
const modalCaracterFragancia = document.querySelector('#modal-caracter-fragancia');
const modalCaracterDescripcion = document.querySelector('#modal-caracter-descripcion');
const modalCaracterSensaciones = document.querySelector('#modal-caracter-sensaciones');
const modalCaracterCerrar = document.querySelector('#modal-caracter-cerrar');

function abrirModalCaracter(fragancia) {
    if (!modalCaracter) return;

    modalCaracterTitulo.textContent = fragancia.caracter;
    modalCaracterFragancia.textContent = `${fragancia.nombre} · Inspirada en ${fragancia.casa}`;
    modalCaracterDescripcion.textContent =
        caracteresFragancia[fragancia.caracter] ||
        'Una combinación olfativa con una personalidad propia y distintiva.';

    modalCaracterSensaciones.replaceChildren();

    fragancia.sensaciones.forEach(sensacion => {
        const item = document.createElement('span');
        item.textContent = sensacion;
        modalCaracterSensaciones.appendChild(item);
    });

    if (typeof modalCaracter.showModal === 'function') {
        modalCaracter.showModal();
    } else {
        modalCaracter.setAttribute('open', '');
    }
    document.body.classList.add('modal-open');
}

function cerrarModalCaracter() {
    if (!modalCaracter) return;
    if (typeof modalCaracter.close === 'function') {
        modalCaracter.close();
    } else {
        modalCaracter.removeAttribute('open');
    }
    document.body.classList.remove('modal-open');
}

if (modalCaracterCerrar) {
    modalCaracterCerrar.addEventListener('click', cerrarModalCaracter);
}

if (modalCaracter) {
    modalCaracter.addEventListener('click', event => {
        if (event.target === modalCaracter) {
            cerrarModalCaracter();
        }
    });

    modalCaracter.addEventListener('close', () => {
        document.body.classList.remove('modal-open');
    });
}

mostrarFragancias();
