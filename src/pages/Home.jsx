import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="page-layout">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="home-content">

                {/* HERO / SEARCH SECTION */}
                <section className="booking-hero">
                    <div className="hero-wrapper">
                        <h1>Book Tickets Instantly</h1>
                        <p className="hero-tagline">
                            Flights, buses, trains, movies, and events —
                            all bookings in one simple platform.
                        </p>

                        {/* Search Box */}
                        <div className="search-box">
                            <div className="search-row">
                                <div className="search-field">
                                    <label>From</label>
                                    <input type="text" placeholder="Enter source city" />
                                </div>

                                <div className="search-field">
                                    <label>To</label>
                                    <input type="text" placeholder="Enter destination city" />
                                </div>

                                <div className="search-field">
                                    <label>Date</label>
                                    <input type="date" />
                                </div>

                                <div className="search-field">
                                    <label>Passengers</label>
                                    <select>
                                        <option>1 Passenger</option>
                                        <option>2 Passengers</option>
                                        <option>3 Passengers</option>
                                        <option>4+ Passengers</option>
                                    </select>
                                </div>
                            </div>

                            <button className="search-btn">
                                Search Tickets
                            </button>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="services-section">
                    <h2>What You Can Book</h2>

                    <div className="services-grid">
                        <div className="service-card">
                            <h3>✈ Flights</h3>
                            <p>
                                Book domestic and international flights
                                at the best prices with instant confirmation.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>🚌 Bus Tickets</h3>
                            <p>
                                Choose from thousands of bus routes with
                                comfortable seating and trusted operators.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>🚆 Train Tickets</h3>
                            <p>
                                Search train schedules, seat availability,
                                and book tickets with ease.
                            </p>
                        </div>

                        <div className="service-card">
                            <h3>🎬 Movies & Events</h3>
                            <p>
                                Book movie tickets and event passes in
                                advance and avoid long queues.
                            </p>
                        </div>
                    </div>
                </section>

                {/* POPULAR ROUTES */}
                <section className="routes-section">
                    <h2>Popular Routes</h2>

                    <div className="routes-grid">
                        <div className="route-card">
                            <h4>Delhi → Mumbai</h4>
                            <p>Starting from ₹3,499</p>
                        </div>

                        <div className="route-card">
                            <h4>Bangalore → Chennai</h4>
                            <p>Starting from ₹1,299</p>
                        </div>

                        <div className="route-card">
                            <h4>Pune → Hyderabad</h4>
                            <p>Starting from ₹2,199</p>
                        </div>

                        <div className="route-card">
                            <h4>Kolkata → Delhi</h4>
                            <p>Starting from ₹3,999</p>
                        </div>
                    </div>
                </section>

                {/* OFFERS SECTION */}
                <section className="offers-section">
                    <h2>Exclusive Offers</h2>

                    <div className="offers-grid">
                        <div className="offer-card">
                            <h3>Flat 20% OFF</h3>
                            <p>On first flight booking</p>
                        </div>

                        <div className="offer-card">
                            <h3>Bus Cashback</h3>
                            <p>Up to ₹200 on bus tickets</p>
                        </div>

                        <div className="offer-card">
                            <h3>Movie Night Deal</h3>
                            <p>Buy 1 Get 1 Free</p>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="process-section">
                    <h2>How Booking Works</h2>

                    <div className="process-grid">
                        <div className="process-step">
                            <span>1</span>
                            <h4>Search</h4>
                            <p>
                                Enter your route, date, and preferences
                                to find available tickets.
                            </p>
                        </div>

                        <div className="process-step">
                            <span>2</span>
                            <h4>Compare</h4>
                            <p>
                                Compare prices, timings, and seat options
                                from multiple providers.
                            </p>
                        </div>

                        <div className="process-step">
                            <span>3</span>
                            <h4>Book</h4>
                            <p>
                                Securely book your tickets with instant
                                confirmation.
                            </p>
                        </div>

                        <div className="process-step">
                            <span>4</span>
                            <h4>Travel & Enjoy</h4>
                            <p>
                                Carry your e-ticket and enjoy a hassle-free journey.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TRUST SECTION */}
                <section className="trust-section">
                    <h2>Why Choose Us</h2>

                    <div className="trust-grid">
                        <div className="trust-item">
                            <h4>Secure Payments</h4>
                            <p>All transactions are protected with encryption.</p>
                        </div>

                        <div className="trust-item">
                            <h4>24x7 Support</h4>
                            <p>Dedicated customer support whenever you need help.</p>
                        </div>

                        <div className="trust-item">
                            <h4>Trusted Partners</h4>
                            <p>We work with verified travel and event partners.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <h2>Start Your Journey Today</h2>
                    <p>
                        Book tickets in minutes and travel with confidence.
                    </p>
                    <button className="primary-btn">
                        Book Now
                    </button>
                </section>

                {/* FOOTER */}
                <footer className="home-footer">
                    <p>© 2026 TicketBooking Platform. All rights reserved.</p>
                </footer>

            </main>
        </div>
    );
};

export default Home;
