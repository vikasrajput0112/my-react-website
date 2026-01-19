import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-flex">
                <div className="logo">
                    Digi<span>Solutions</span>
                </div>

                <nav className="nav">
                    <Link className="nav-btn" to="/">Home</Link>
                    <Link className="nav-btn" to="/about">About</Link>
                    <Link className="nav-btn" to="/services">Services</Link>
                    <Link className="nav-btn" to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
