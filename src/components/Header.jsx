import React from 'react';

function Header(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">BEAR.UZ</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">REPO</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;