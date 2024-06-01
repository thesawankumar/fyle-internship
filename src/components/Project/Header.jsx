/* eslint-disable react/prop-types */
import "./Header.css";

const Header = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  );
};

export default Header;
