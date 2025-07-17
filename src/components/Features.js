const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          One product, unlimited solutions
        </h2>
        <div className="features-grid">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3>Keep projects on schedule</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
