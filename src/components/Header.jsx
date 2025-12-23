import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">Instagram</div>
        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#business">Business</a>
          <a href="#safety">Safety</a>
          <a href="#support">Support</a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-secondary" style={{border: 'none', background: 'transparent'}}>Log in</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
