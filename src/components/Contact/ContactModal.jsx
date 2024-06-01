/* eslint-disable react/prop-types */

import Modal from "react-modal";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      <div className="contact-form">
        <h2>Talk to us</h2>
        <form
          action="https://getform.io/f/zaxdpxxa"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Work email*"
              required
            />
          </div>
          <div className="input-group side-by-side">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              required
            />
          </div>
          <div className="input-group checkbox-group">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">
              I agree to terms and conditions, and provide consent to send me
              communication.
            </label>
          </div>
          <div className="button-container">
            <button type="submit" className="contact-button">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
