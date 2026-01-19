import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="page-layout">
            <Sidebar />

            <main className="home-content">
                <section className="home-hero">
                    <h1>Welcome to Test-Website14</h1>
                    <p>
                        We build simple, reliable, and scalable digital
                        solutions with a clean and user-friendly experience.
                    </p>
                </section>

                {/* Mobile Section */}
                <section className="mobile-section">
                    <h2>Mobile</h2>
                    <p>This is mobile services</p>
                </section>
            </main>
        </div>
    );
};

export default Home;
