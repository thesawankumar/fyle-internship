import "./Footer.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="logo">
        <div className="logo-item">
          {images.map((image) => {
            return <img src={image} key={image} alt="Harrison Industry Co." />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
