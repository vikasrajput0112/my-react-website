const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h4>About Digi Solutions</h4>

                <p className="about-intro">
                    Solutions is a modern digital technology company
                    focused on delivering scalable, secure, and high-quality
                    software solutions. We help organizations transform their
                    ideas into powerful digital products.
                </p>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>Who We Are</h3>
                        <p>
                            We are a team of skilled developers, DevOps
                            engineers, and cloud specialists with hands-on
                            experience in building enterprise-grade
                            applications and automation pipelines.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>What We Deliver</h3>
                        <p>
                            Our services include web application development,
                            cloud infrastructure, CI/CD automation, container
                            orchestration, and system modernization.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Our Approach</h3>
                        <p>
                            We follow industry best practices, clean
                            architecture, and agile methodologies to ensure
                            every solution is reliable, maintainable, and
                            future-ready.
                        </p>
                    </div>
                </div>

                <div className="about-footer">
                    <p>
                        At Digi Solutions, our goal is simple — to build
                        technology that empowers businesses, improves
                        efficiency, and drives long-term success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
