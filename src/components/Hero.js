const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Landing template for startups
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          The majority our customers do not understand their workflows.
        </p>
        <div className="hero-cta" data-aos="fade-up" data-aos-delay="300">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
