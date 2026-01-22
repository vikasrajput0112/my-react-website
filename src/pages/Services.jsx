const Services = () => {
    return (
        <section className="service-section">
            <div className="service-container">

                {/* Heading */}
                <h1>Our Services</h1>

                {/* Intro */}
                <p className="service-intro">
                    We deliver reliable and scalable technology services that
                    help businesses modernize their systems, improve efficiency,
                    and accelerate digital transformation.
                </p>

                {/* Services Grid */}
                <div className="service-grid">
                    <div className="service-card">
                        <h3>Web Application Development</h3>
                        <p>
                            Design and development of responsive, secure, and
                            scalable web applications using modern frameworks
                            and industry best practices.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>DevOps & CI/CD Automation</h3>
                        <p>
                            End-to-end CI/CD pipeline implementation using
                            tools like Jenkins, Docker, Kubernetes, and GitOps
                            for faster and safer application delivery.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Cloud Infrastructure & Solutions</h3>
                        <p>
                            Cloud architecture design, migration, deployment,
                            and optimization on AWS and other leading cloud
                            platforms.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>System Automation & Monitoring</h3>
                        <p>
                            Automation of Linux systems, scripting, monitoring
                            solutions, and performance optimization to ensure
                            stability and reliability.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
