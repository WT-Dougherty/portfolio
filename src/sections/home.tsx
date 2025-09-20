import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <img src="/headshot.jpeg" alt="Will Dougherty" className="headshot" />
        <div className="home-text">
          <h1>Will Dougherty</h1>
          <h2>Full-Stack Developer</h2>
          <div className="home-buttons">
            <Link to="contact" className="btn" smooth={true} duration={500}>
              Get In Touch
            </Link>
            <Link to="projects" className="btn" smooth={true} duration={500}>
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
