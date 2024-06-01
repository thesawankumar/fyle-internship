
import { FiTarget, FiTrendingUp, FiShield, FiAward } from "react-icons/fi";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <FiTarget size={30} />,
    title: "Clarified Vision & Target",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FiTrendingUp size={30} />,
    title: "High Performance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FiShield size={30} />,
    title: "Maintain Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FiAward size={30} />,
    title: "Better Strategy & Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
