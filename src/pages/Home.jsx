import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <main className="page-layout">
            <Sidebar />
            <section className="main-content">
                <div className="hero">
                    <h1>Digital Solutions That Grow Your Business</h1>
                    <p>
                        We build reliable, scalable, and secure web solutions
                        to help businesses succeed in the digital era.
                    </p>
                </div>

                <div className="services">
                    <div className="card">
                        <h3>Web Development</h3>
                        <p>Modern, responsive websites.</p>
                    </div>
                    <div className="card">
                        <h3>DevOps</h3>
                        <p>CI/CD, Docker & Cloud.</p>
                    </div>
                    <div className="card">
                        <h3>Cloud</h3>
                        <p>AWS & scalable infrastructure.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;