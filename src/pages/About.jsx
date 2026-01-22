const About = () => {
    const heading = "About Digi Solutions";

    return (
        <section className="about-section">
            <div className="about-container">

                {/* Heading */}
                <h4>{heading}</h4>

                {/* Intro Content */}
                <p className="about-intro">
                    Digi Solutions is a forward-thinking digital technology
                    company dedicated to building scalable, secure, and
                    high-performance software solutions. We partner with
                    businesses to transform complex challenges into reliable
                    digital products.
                </p>

                {/* About Grid */}
                <div className="about-grid">
                    <div className="about-card">
                        <h3>Who We Are</h3>
                        <p>
                            We are a passionate team of software developers,
                            DevOps engineers, and cloud professionals with
                            strong expertise in designing and delivering
                            enterprise-grade applications and automation
                            solutions.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>What We Deliver</h3>
                        <p>
                            We provide end-to-end technology services including
                            web and application development, cloud
                            infrastructure setup, CI/CD automation,
                            containerization, Kubernetes orchestration, and
                            system modernization.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Our Approach</h3>
                        <p>
                            Our approach is built on clean architecture,
                            industry best practices, and agile methodologies.
                            We focus on delivering solutions that are
                            maintainable, secure, and ready for future growth.
                        </p>
                    </div>
                </div>

                {/* Footer Message */}
                <div className="about-footer">
                    <p>
                        At Digi Solutions, our mission is to empower businesses
                        through technology by improving efficiency, enabling
                        innovation, and driving sustainable long-term success.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
