const Header = () => {
    return (
        <header className="header">
            <div className="container header-flex">
                <div className="logo">My<span>Website</span></div>
                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;