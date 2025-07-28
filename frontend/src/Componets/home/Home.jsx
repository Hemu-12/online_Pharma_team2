import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import '../home/Home.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar toggleDarkMode={() => setDarkMode((prev) => !prev)} />
      <Hero />
      <MedicineSlider />
      <Services />
      <Testimonials />
      <Contact />
      <DoctorSlider />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">PharmaCare</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Doctors</li>
        <li>Medicine</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-icons">
        <div className="icon-container">
          <FaShoppingCart className="icon" />
          <span className="cart-badge">3</span>
        </div>

        <button className="sign-in-btn">
          <FaUser className="icon" />
          <span>Sign In</span>
        </button>

        <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
          <MdDarkMode className="icon" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Best Drugstore In Your Reach</h1>
        <p>Trusted pharmacy platform to buy medicines, upload prescriptions, and get expert help.</p>
        <button>Explore Medicines</button>
      </div>
      <div className="hero-image">
        <img src="/Images/Home_images/pexels-pixabay-139398.jpg" alt="Pharmacy illustration" />
      </div>
    </div>
  </section>
);

const MedicineSlider = () => {
  const medicines = [
    ['/Images/Home_images/paracetamol.jpeg', 'Paracetamol'],
    ['/Images/Home_images/cough-syrup.jpeg', 'Cough Syrup'],
    ['/Images/Home_images/antibiotic.jpeg', 'Antibiotic'],
    ['/Images/Home_images/vitamins.jpeg', 'Vitamins'],
    ['/Images/Home_images/skin-cream.jpeg', 'Skin Cream'],
    ['/Images/Home_images/inhaler.jpeg', 'Inhaler'],
    ['/Images/Home_images/pain-reilef.jpeg', 'Pain Relief'],
    ['/Images/Home_images/nasalSpary.jpeg', 'Nasal Spray'],
    ['/Images/Home_images/allergytable.jpeg', 'Allergy Tablets'],
    ['/Images/Home_images/multivitamin.jpeg', 'Multivitamins'],
  ];

  return (
    <section className="slider-section">
      <h2>Top Medicines</h2>
      <div className="slider-container">
        {medicines.map(([src, name], i) => (
          <div className="slider-card" key={i}>
            <img src={src} alt={name} />
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const DoctorSlider = () => {
  const doctors = [
    ['Dr. Sharma', '/Images/Home_images/femaledoctor.jpeg'],
    ['Dr. Verma', '/Images/Home_images/maleDoctor.jpeg'],
    ['Dr. Khan', '/Images/Home_images/maleDoctor.jpeg'],
    ['Dr. Iyer', '/Images/Home_images/femaledoctor.jpeg'],
    ['Dr. Rao', '/Images/Home_images/maleDoctor.jpeg'],
    ['Dr. Gupta', '/Images/Home_images/femaledoctor.jpeg'],
    ['Dr. Patel', '/Images/Home_images/maleDoctor.jpeg'],
    ['Dr. Joshi', '/Images/Home_images/maleDoctor.jpeg'],
    ['Dr. Roy', '/Images/Home_images/maleDoctor.jpeg'],
    ['Dr. Meena', '/Images/Home_images/femaledoctor.jpeg'],
    ['Dr. Radhika', '/Images/Home_images/maleDoctor.jpeg'],
  ];

  return (
    <section className="slider-section">
      <h2>Top Drug Experts</h2>
      <div className="slider-container">
        {doctors.map(([name, src], i) => (
          <div className="slider-card" key={i}>
            <img
              src={src}
              alt={name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="cards">
      {['Search Medicines', 'Upload Prescription', 'Talk to Drug Expert', 'Order COVID Essentials'].map(
        (title, index) => (
          <div className="card" key={index}>
            <h3>{title}</h3>
            <p>High-quality and fast service to meet your pharmacy needs.</p>
          </div>
        )
      )}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Users Say</h2>
    <div className="cards">
      <div className="card">
        <p>"Fast delivery and easy to use. PharmaCare saved me time and effort!"</p>
        <h4>- Ananya</h4>
      </div>
      <div className="card">
        <p>"Great service and genuine medicines. The prescription upload feature is awesome."</p>
        <h4>- Rohit</h4>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-to-top${visible ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

const Footer = () => (
  <footer>
    <div className="footer-content">
      <p>&copy; 2025 PharmaCare — Your trusted pharmacy partner.</p>
      <p>Reach us at <a href="mailto:support@pharmacare.com">support@pharmacare.com</a> | +91-999-888-7777</p>
      <div className="socials">
        <a href="/">Instagram</a>
        <a href="/">Twitter</a>
        <a href="/">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default App;
