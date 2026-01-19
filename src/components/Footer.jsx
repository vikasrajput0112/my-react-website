import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <p className="footer-text">
                © 2026 My Website. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
