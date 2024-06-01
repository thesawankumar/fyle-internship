/* eslint-disable react/no-unescaped-entities */
import "./Feedback.css";
function Feedback() {
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">CLIENT'S FEEDBACK</h2>
      <h1 className="feedback-heading">PEOPLE SAY'S ABOUT US !</h1>
      <div className="feedback-content">
        <p className="feedback-quote">
          <span className="quote-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.66667C4.53333 1.66667 1.66667 4.53333 1.66667 8C1.66667 11.4667 4.53333 14.3333 8 14.3333C11.4667 14.3333 14.3333 11.4667 14.3333 8C14.3333 4.53333 11.4667 1.66667 8 1.66667ZM9.89333 8.91504L10.3814 8.42783L11.4689 9.53047C11.7999 9.85361 11.7999 10.3702 11.4689 10.6933L10.3814 11.7797L9.89333 11.2925C9.60741 11.0165 9.60741 10.5039 9.89333 10.2279L12.0173 7.1139L9.89333 8.91504ZM9.08324 12.4002C9.54659 12.9563 9.54659 13.6698 9.08324 14.2261C8.6199 14.7823 7.91642 14.7823 7.45308 14.2261C6.98973 13.6698 6.98973 12.9563 7.45308 12.4002C7.91642 11.844 8.6199 11.844 9.08324 12.4002Z"
                fill="#CCD1D5"
              />
            </svg>
          </span>
          Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is
          reproduced below for those interested. Sections Bonorum et Malorum
          original.
        </p>
        <p className="feedback-name">
          <span className="name-highlight">JANNAT TUMPA</span> - COO, AMERIMAR
          ENTERPRISES, INC.
        </p>
      </div>
    </div>
  );
}

export default Feedback;
