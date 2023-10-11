import "../index.css";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="assets/shared/desktop/logo.svg" alt="Coffeeroasters' logo" />
      <nav>
        <ul className="header__nav-menu">
          <li>
            <a href="/index.html" className="font-nav header__nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us.html" className="font-nav header__nav-link">
              About us
            </a>
          </li>
          <li>
            <a href="/create-plan.html" className="font-nav header__nav-link">
              Create your plan
            </a>
          </li>
        </ul>
        <div className="burger-nav">
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
