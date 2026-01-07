function Hero() {
  return (
    <section id="home">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active position-relative">
            <img
              src="/images/event1.jpg"
              className="d-block w-100"
              alt="Live Events"
              style={{ height: "85vh", objectFit: "cover" }}
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">
              <h1 className="display-4 fw-bold">
                Discover Events Near You
              </h1>
              <p className="lead mb-4">
                Find exciting local events happening around you
              </p>
              <a href="#events" className="btn btn-primary btn-lg px-4">
                Browse Events
              </a>
            </div>
          </div>

          <div className="carousel-item position-relative">
            <img
              src="/images/event2.jpg"
              className="d-block w-100"
              alt="Concerts"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="display-4 fw-bold">
                Concerts, Meetups & More
              </h1>
              <p className="lead mb-4">
                Music, tech, sports and social events
              </p>
              <a href="#events" className="btn btn-outline-light btn-lg px-4">
                Explore Now
              </a>
            </div>
          </div>

          <div className="carousel-item position-relative">
            <img
              src="/images/event3.jpg"
              className="d-block w-100"
              alt="Community Events"
              style={{ height: "85vh", objectFit: "cover" }}
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="display-4 fw-bold">
                Create Moments That Matter
              </h1>
              <p className="lead mb-4">
                Join events and connect with your community
              </p>
              <a href="#contact" className="btn btn-primary btn-lg px-4">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
