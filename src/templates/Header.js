const Header = () => {
    const view = `
        <div class="logo-container">
            <img src="./assets/imgs/acr2.JPG" class="logo" />
        </div>

        <button class="icon-container">
            <img src="./assets/icons/hambBtn.svg" />
        </button>

        <nav class="header-navbar">
            <button class="icon-container">
                <img src="./assets/icons/x.svg" />
            </button>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="#/about">¿Quiénes somos?</a></li>
                <li><a href="#/products">Productos</a></li>
                <li><a href="#/contact">Contacto</a></li>
            </ul>
        </nav>
    `;

    return view;
}

export default Header;