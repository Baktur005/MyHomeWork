import "./Footer.css";
import logo3 from "../assets/svg/Frame (3).svg";
import Logo4 from "../assets/svg/Frame (4).svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="span">
          <img src={logo3} alt="logo" className="logo3" />
          <a href="" className="h1-title">
            Get Started Now
          </a>
        </span>
      </div>

      <div>
        <div className="section-container">
          <div className="footer-section runway">
            <img src={Logo4} alt="logo" />
          </div>
          <div className="footer-section">
            <h2>Features</h2>
            <ul>
              <li>Green Screen</li>
              <li>Generative Media</li>
              <li>Face Animatio(Soon)</li>
              <li>liModel Playground</li>
              <li>Training </li>
              <li>Hosted Models</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Resources</h2>
            <ul>
              <li>Educators</li>
              <li>Blog</li>
              <li>Learn & Docs</li>
              <li>Support</li>
              <li>Python SDK</li>
              <li>Made With</li>
              <li>Sign up</li>
              <li>Log in</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Runway</h2>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>System Status</li>
              <li>Release Notes</li>
              <li>Join our Slack</li>
              <li> YouTube</li>
              <li>Twitter</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="last-footer-container">
          <p>2021 Runway AI, Inc.</p>

          <section className="section-tag-inside-the-last-container">
            <a href="">Code of Conduct</a>
            <a href="">Privacy Policy</a>
            <a href="">CCPA</a>
            <a href="">Terms and Conditions</a>
          </section>
        </div>
      </div>
    </footer>
  );
}
