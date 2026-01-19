import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-flex">
                <div className="logo">
                    My<span>Website</span>
                </div>

                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="#">Services</Link>
                    <Link to="#">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
