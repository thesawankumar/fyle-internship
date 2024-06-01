import "./Service.css";
import image1 from "../../assets/image1.png";
import Carousel from "./Carousel";

const sliderClick = (index) => {
  console.log(`Slide ${index + 1} clicked`);
};

const slides = [
  {
    image: image1,
    clickEvent: () => sliderClick(0),
  },
  {
    image: "https://picsum.photos/600/500",
    clickEvent: () => sliderClick(1),
  },
  {
    image: "https://picsum.photos/700/600",
    clickEvent: () => sliderClick(2),
  },
  {
    image: "https://picsum.photos/500/400",
    clickEvent: () => sliderClick(3),
  },
];

const Service = () => {
  return (
    <div className="slider">
      <Carousel slides={slides} />
    </div>
  );
};

export default Service;
