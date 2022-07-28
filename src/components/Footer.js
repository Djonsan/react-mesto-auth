import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__author">
        &copy; {new Date().getFullYear()} Evgeniy Tolochkin. Яндекс Практикум
    </p>
    </footer>
  )
}

export default Footer;
