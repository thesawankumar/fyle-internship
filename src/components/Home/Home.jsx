import { useSpring, animated } from "@react-spring/web";
import landingImage from "../../assets/hero.png";
import "./Home.css";
import { useState } from "react";
import ContactModal from "../Contact/ContactModal";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <div>
      <animated.div style={fadeIn} className="landing-section">
        <div className="text-content">
          <h2 className="award-text">AWARD WINNING</h2>
          <h1 className="title">DIGITAL MARKETING AGENCY</h1>
          <p className="description">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante et elit fringilla ac at purus.
          </p>
          <button
            onClick={() => setModalIsOpen(true)}
            className="contact-button"
          >
            CONTACT US
          </button>
        </div>
        <div className="image-content">
          <img src={landingImage} alt="Digital Marketing Agency" />
        </div>
      </animated.div>
      <ContactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </div>
  );
};

export default Hero;
