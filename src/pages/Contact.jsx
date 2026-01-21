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
                    {/* Left side */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p><strong>Email:</strong> info@digisolutions.com</p>
                        <p><strong>Phone:</strong> +91 98765 37474</p>
                        <p><strong>Location:</strong> India</p>
                    </div>

                    {/* Right side */}
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
