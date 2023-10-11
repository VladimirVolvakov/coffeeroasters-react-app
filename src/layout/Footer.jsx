const Footer = () => {
  return (
    <footer>
      <img
        src="assets/shared/desktop/logo-light.svg"
        alt="Coffeeroasters' logo"
      />
      <nav>
        <ul>
          <li>
            <a href="/index.html">Home</a>
          </li>
          <li>
            <a href="/about-us.html">About us</a>
          </li>
          <li>
            <a href="/create-plan.html">Create your plan</a>
          </li>
        </ul>
      </nav>
      <div>
        <a href="https://www.facebook.com">
          <img
            src="assets/shared/desktop/icon-facebook.svg"
            alt="Our Facebook account"
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            src="assets/shared/desktop/icon-twitter.svg"
            alt="Our Twitter account"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src="assets/shared/desktop/icon-instagram.svg"
            alt="Our Instagram account"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
