const Header = () => {
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="/">
                    Precio Solares
                </a>
            </h1>
        </div>

        <div class="Header-nav">
            <nav class="navbar">
                <ul>
                    <li><a href="/#modulos">Módulos</a></li>
                    <li><a href="/#estructuras">Estructuras</a></li>
                    <li><a href="/#cables">Cables</a></li>
                    <li><a href="/#conectores">Conectores</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
    `;
    return view;
};

export default Header;