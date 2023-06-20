import heroImg from "../img/Group.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={heroImg} alt="" className="hero-img--lg" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">online experiences</h1>
        <p className="lead">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
