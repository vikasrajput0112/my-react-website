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
            </section>
        </main>
    );
};

export default Home;
