import "./Header.css";
import Logo from "../assets/svg/Frame.svg";
import Logo2 from "../assets/svg/Frame (2).svg";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="" className="logo" />

      <nav className="aTeg-container">
        <span className="spanTag">
          <a href="#" className="aTeg">
            Features
          </a>
          <img src={Logo2} alt="" />
        </span>

        <a href="#" className="aTeg">
          Pricing
        </a>

        <span className="spanTag">
          <a href="#" className="aTeg">
            Resources
          </a>
          <img src={Logo2} alt="" />
        </span>

        <div className="button-container">
          <button className="log-in-button">Log in</button>
          <button className="sign-up-button">Sign up</button>
        </div>
      </nav>
    </header>
  );
}
