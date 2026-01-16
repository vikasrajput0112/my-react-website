const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h1>About Us</h1>

                <p className="about-intro">
                    We are a technology-driven team focused on building
                    reliable, scalable, and secure digital solutions that
                    help businesses grow and succeed in today’s fast-moving
                    digital world.
                </p>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>Who We Are</h3>
                        <p>
                            We are passionate engineers and problem-solvers
                            with strong experience in modern web technologies,
                            cloud platforms, and DevOps practices.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>What We Do</h3>
                        <p>
                            From frontend applications to backend systems,
                            CI/CD pipelines, and cloud deployments, we deliver
                            end-to-end solutions tailored to business needs.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Our Mission</h3>
                        <p>
                            Our mission is to simplify technology for businesses
                            by delivering high-quality, secure, and
                            performance-driven digital products.
                        </p>
                    </div>
                </div>

                <div className="about-footer">
                    <p>
                        We believe in long-term partnerships, transparency,
                        and continuous improvement. Every solution we build
                        is designed to scale with your business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
