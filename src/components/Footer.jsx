import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} PONZICO. All rights reserved.</p>
          <ul className="footer__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#collection">Collection</a>
            </li>
            <li>
              <a href="#mint">Mint</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
