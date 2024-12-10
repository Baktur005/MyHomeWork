import "./Section.css";
import Image2 from "../assets/img/image.png";

export default function Section() {
  return (
    <div className="main">
      <p className="pTag">Start creating</p>
      <div className="container">
        <div>
          <ul className="title">
            <li>
              <a href="#">Generate</a>
            </li>
            <li>
              <a href="#">Automate</a>
            </li>
            <li>
              <a href="#">Transform</a>
            </li>
            <li>
              <a href="#">Analyze</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
          </ul>
        </div>

        <div>
          <img src={Image2} alt="image" className="image" />
        </div>
      </div>
    </div>
  );
}
