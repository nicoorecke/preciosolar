const Header = () => {
    const view = `
    <div class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="/">
                    Nico  Recke
                </a>
            </h1>
        </div>

        <div class="Header-nav">
            <nav class="navbar">
                <ul>
                    <li><a href="/#energy">Energy</a></li>
                    <li><a href="/energy">Machine Learning</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/crypto">Crypto</a></li>
                    <li><a href="/youtube">Youtube Channel</a></li>
                    <li><a href="/">Top 10 Netflix!</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
    `;
    return view;
};

export default Header;