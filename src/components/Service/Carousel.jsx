/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "./Carousel.css";
import { BsCodeSquare } from "react-icons/bs";
const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="carousel-overlay">
              <BsCodeSquare size={30} />
              <h3>Web Development</h3>
              <p>
                Morbi sed lacus nec risus finibus feugiat at fermentum nibh.
                Pellentesque.
              </p>
              <a href="https://www.fylehq.com/" className="read-more">
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
