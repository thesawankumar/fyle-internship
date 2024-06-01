import { FaHeart, FaClock, FaCheckCircle, FaAward } from "react-icons/fa";
import "./Growth.css";

const Growth = () => {
  return (
    <div className="container">
      <div className="header">
        <p className="subtitle">EXPERTS GROWTH</p>
        <h2 className="title">OUR COMPANY GROWTH</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <FaHeart />
          </div>
          <h3 className="number">199 +</h3>
          <p className="label">Satisfied Customers</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaClock />
          </div>
          <h3 className="number">1591 +</h3>
          <p className="label">Days Of Operation</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaCheckCircle />
          </div>
          <h3 className="number">283 +</h3>
          <p className="label">Complete Project</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaAward />
          </div>
          <h3 className="number">75 +</h3>
          <p className="label">Win Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Growth;
