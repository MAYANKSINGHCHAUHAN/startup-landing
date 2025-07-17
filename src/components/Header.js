const Header = () => {
  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <h1 className="logo">Startup</h1>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <button className="cta-button">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
