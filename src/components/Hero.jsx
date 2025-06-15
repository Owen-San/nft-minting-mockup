import React, { useState, useEffect } from "react";
import logo from "../assets/logoplaceholder.png";
import nftImage from "../assets/Don_Croakleone.png";

export default function Hero() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top || Infinity;

      const scrollingDown = window.scrollY > lastScrollY;
      const nearFooter = footerTop < window.innerHeight;

      if (scrollingDown && nearFooter) {
        setShowNav(false);
      } else if (!nearFooter) {
        setShowNav(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Nav */}
      <nav
        className={`nav__floating ${showNav ? "nav__visible" : "nav__hidden"}`}
      >
        <div className="nav__row">
          <div className="logo__img--wrapper">
            <img
              src={logo}
              alt="PONZICO Logo"
              className="logo__img"
              draggable="false"
            />
          </div>
          <div className="nav__centered-header">
            <h1 className="nav__header">PONZICO</h1>
          </div>
          <ul className="nav__links">
            <li>
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#collection">Roadmap</a>
            </li>
            <li>
              <a href="#mint" className="nav__link--primary">
                MINT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Rain Effect */}
      <div className="rain-overlay">
        {[...Array(50)].map((_, i) => (
          <div
            className="raindrop"
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 1 + 0.4}s`,
              opacity: Math.random() * 0.3 + 0.1,
              height: `${Math.random() * 40 + 30}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero">
        <div className="container">
          <div
            className="row"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <img src={nftImage} alt="Featured NFT" className="nft__featured" />
            <h2 className="hero__header">PONZICO</h2>
            <a href="#collection" className="cta-button">
              MINT
            </a>
          </div>
        </div>
      </section>
    </>
  );
}