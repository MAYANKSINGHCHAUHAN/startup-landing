const Testimonials = () => {
  const testimonials = [
    "Stay in the loop",
    "Take your word to you",
    "Try it",
    "Go ahead",
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Don't take our word for it
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((text, i) => (
            <div
              key={i}
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3>{text}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
