import "./Homepage.css";
import Image from "../assets/img/Frame.png";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="first-main-div">
        <h1 className="title"> Make the Impossible</h1>

        <div className="text-container">
          <p className="text">
            Create and edit content like never before. Your next generation
            creative toolkit — powered by machine learning.
          </p>
        </div>

        <button className="try-button">Try Runway for free</button>
      </div>

      <div className="second-main-div">
        <img src={Image} alt="image" className="photo-of-desert" />

        <button className="sign-button">Sign up</button>
      </div>
    </div>
  );
}
