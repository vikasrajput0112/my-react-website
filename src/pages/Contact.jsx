const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h1>Contact Us</h1>

                <p className="contact-intro">
                    Have a question, need support, or want to collaborate with us?
                    Fill out the form below and our team will respond shortly.
                </p>

                <div className="contact-grid">
                    {/* Left Side – Contact Info */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>

                        <p>
                            <strong>Email:</strong><br />
                            support@testwebsite.com
                        </p>

                        <p>
                            <strong>Phone:</strong><br />
                            +91 98765 43210
                        </p>

                        <p>
                            <strong>Office Location:</strong><br />
                            Noida, Uttar Pradesh, India
                        </p>

                        <p className="contact-note">
                            We are available Monday to Friday, 9:00 AM – 6:00 PM.
                        </p>
                    </div>

                    {/* Right Side – Contact Form */}
                    <form className="contact-form">
                        <h2>Send Us a Message</h2>

                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            placeholder="Write your message here..."
                            rows="5"
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
