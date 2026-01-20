const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h1>Contact Us</h1>

                <p className="contact-intro">
                    Have a question or want to work with us?
                    Reach out and we’ll get back to you shortly.
                </p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>Email: info@digisolutions.com</p>
                        <p>Phone: +91 98765 37474-617317</p>
                        <p>Location: India</p>
                    </div>

                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
