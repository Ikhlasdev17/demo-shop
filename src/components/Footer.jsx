import React from 'react';

function Footer(props) {
  return (
    <footer className='page-footer'>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All Rights Reserved
          <a className="grey-text text-lighten-4 right" href="#!">REPO</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;