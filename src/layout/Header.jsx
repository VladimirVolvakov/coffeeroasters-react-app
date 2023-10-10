const Header = () => {
  return (
    <header>
      <img src="assets/shared/desktop/logo.svg" alt="Coffeeroasters' logo" />
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
