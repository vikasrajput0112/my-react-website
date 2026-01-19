const Services = () => {
    return (
        <section className="service-section">
            <div className="service-container">
                <h1>Our Services</h1>

                <p className="service-intro">
                    We provide end-to-end technology solutions that help
                    businesses modernize, scale, and operate efficiently.
                </p>

                <div className="service-grid">
                    <div className="service-card">
                        <h3>Web Development</h3>
                        <p>
                            Responsive and scalable web applications using
                            modern frameworks and best practices.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>DevOps & CI/CD</h3>
                        <p>
                            Automated pipelines, Docker, Jenkins, and cloud
                            deployments for faster and safer releases.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Cloud Solutions</h3>
                        <p>
                            Cloud infrastructure design, migration, and
                            optimization on AWS and other platforms.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>System Automation</h3>
                        <p>
                            Linux automation, shell scripting, monitoring,
                            and system optimization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
