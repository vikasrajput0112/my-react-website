import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App() {
    return (
        <>
            <Header />

            <div className="page-layout">
                <Sidebar />

                <main className="main-content">
                    <div className="hero">
                        <h1>Digital Solutions That Grow Your Business</h1>
                        <p>
                            We build reliable, scalable, and secure web solutions
                            to help businesses succeed in the digital era.
                        </p>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}

export default App;
