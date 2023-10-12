import "../index.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="assets/shared/desktop/logo-light.svg"
        alt="Coffeeroasters' logo"
      />
      <nav className="footer__nav">
        <ul className="footer__nav-menu">
          <li>
            <a href="/index.html" className="font-nav footer__nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us.html" className="font-nav footer__nav-link">
              About us
            </a>
          </li>
          <li>
            <a href="/create-plan.html" className="font-nav footer__nav-link">
              Create your plan
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer__media-links">
        <a href="https://www.facebook.com">
          <img
            src="assets/shared/desktop/icon-facebook.svg"
            alt="Our Facebook account"
            className="footer__media-img"
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            src="assets/shared/desktop/icon-twitter.svg"
            alt="Our Twitter account"
            className="footer__media-img"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src="assets/shared/desktop/icon-instagram.svg"
            alt="Our Instagram account"
            className="footer__media-img"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
