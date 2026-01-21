import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-layout">
                {/* LEFT SIDEBAR */}
                <Sidebar />

                {/* RIGHT CONTENT */}
                <div className="home-main">
                    <div className="home-card">
                        <h1>Welcome to Test-Website-</h1>
                        <p>
                            We build simple, reliable, and scalable digital
                            solutions with a clean and user-friendly experience.
                        </p>
                    </div>

                    <div className="home-card">
                        <h2>Mobile</h2>
                        <p>This is mobile services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
