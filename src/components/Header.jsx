import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-flex">
                <div className="logo">
                    Digi<span>Solutions</span>
                </div>

                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
