const Header = () => {
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="/preciosolar/">
                    Precio Solares
                </a>
            </h1>
        </div>

        <div class="Header-nav">
            <nav class="navbar">
                <ul>
                    <li><a href="/preciosolar/#modulos">Módulos</a></li>
                    <li><a href="/preciosolar/#estructuras">Estructuras</a></li>
                    <li><a href="/preciosolar/#cables">Cables</a></li>
                    <li><a href="/preciosolar/#conectores">Conectores</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
    `;
    return view;
};

export default Header;