import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="page-layout">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="home-content">

                {/* Hero Section */}
                <section className="home-hero">
                    <div className="hero-inner">
                        <h1>Welcome to Test-Website</h1>
                        <p className="hero-subtitle">
                            We design, build, and deliver modern digital
                            solutions that help businesses grow, scale,
                            and succeed in a digital-first world.
                        </p>

                        <div className="hero-actions">
                            <button className="primary-btn">
                                Get Started
                            </button>
                            <button className="secondary-btn">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        Test-Website is a technology-driven organization focused
                        on creating simple, reliable, and scalable software
                        solutions. Our goal is to transform ideas into powerful
                        digital products that deliver real value.
                    </p>

                    <p>
                        With a team of experienced developers, designers, and
                        DevOps engineers, we specialize in building applications
                        that are secure, efficient, and easy to maintain.
                    </p>
                </section>

                {/* Services Overview */}
                <section className="services-section">
                    <h2>Our Core Services</h2>

                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Web Development</h3>
                            <p>
                                We create responsive and high-performance web
                                applications using modern technologies and best
                                practices.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>Mobile Solutions</h3>
                            <p>
                                From mobile-friendly websites to scalable
                                backend services, we ensure seamless mobile
                                experiences.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>Cloud & DevOps</h3>
                            <p>
                                Automated CI/CD pipelines, containerization,
                                monitoring, and cloud-native deployments.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>System Automation</h3>
                            <p>
                                Linux automation, infrastructure management,
                                monitoring, and performance optimization.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mobile Section */}
                <section className="mobile-section">
                    <h2>Mobile Solutions</h2>
                    <p>
                        Our mobile services are designed to deliver fast,
                        reliable, and scalable solutions across devices.
                        Whether it's mobile optimization or backend support,
                        we ensure consistent performance.
                    </p>

                    <div className="mobile-features">
                        <div className="mobile-feature">
                            <h4>Device Compatibility</h4>
                            <p>
                                Optimized for Android, iOS, and all modern
                                browsers to ensure smooth user experiences.
                            </p>
                        </div>

                        <div className="mobile-feature">
                            <h4>Performance Focused</h4>
                            <p>
                                Lightweight architecture designed for speed,
                                responsiveness, and reduced load times.
                            </p>
                        </div>

                        <div className="mobile-feature">
                            <h4>Secure by Design</h4>
                            <p>
                                Security-first approach to protect data,
                                transactions, and user privacy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <h2>How We Work</h2>

                    <div className="process-steps">
                        <div className="process-step">
                            <span className="step-number">01</span>
                            <h4>Requirement Analysis</h4>
                            <p>
                                We start by understanding your business needs
                                and defining clear project goals.
                            </p>
                        </div>

                        <div className="process-step">
                            <span className="step-number">02</span>
                            <h4>Design & Architecture</h4>
                            <p>
                                Clean UI design and scalable architecture
                                planning for long-term growth.
                            </p>
                        </div>

                        <div className="process-step">
                            <span className="step-number">03</span>
                            <h4>Development</h4>
                            <p>
                                Agile development with regular testing and
                                continuous integration.
                            </p>
                        </div>

                        <div className="process-step">
                            <span className="step-number">04</span>
                            <h4>Deployment & Support</h4>
                            <p>
                                Production-ready deployment with monitoring
                                and ongoing support.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="testimonial-section">
                    <h2>What Clients Say</h2>

                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p>
                                “Test-Website delivered exactly what we needed.
                                The system is fast, reliable, and easy to use.”
                            </p>
                            <span>— Enterprise Client</span>
                        </div>

                        <div className="testimonial-card">
                            <p>
                                “Their DevOps and automation approach helped us
                                reduce deployment time significantly.”
                            </p>
                            <span>— Startup Founder</span>
                        </div>
                    </div>
                </section>

                {/* Call To Action */}
                <section className="cta-section">
                    <h2>Ready to Build Something Great?</h2>
                    <p>
                        Let’s work together to turn your ideas into powerful
                        digital solutions.
                    </p>

                    <button className="primary-btn">
                        Contact Us
                    </button>
                </section>

                {/* Footer */}
                <footer className="home-footer">
                    <p>
                        © 2026 Test-Website. All rights reserved.
                    </p>
                </footer>

            </main>
        </div>
    );
};

export default Home;
