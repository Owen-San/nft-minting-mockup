import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import nftImage from "../assets/Don_Croakleone.png";
import RoadmapModal from "./RoadmapModal";

export default function Hero() {
  const [showNav, setShowNav] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top || Infinity;

      const scrollingDown = window.scrollY > lastScrollY;
      const nearFooter = footerTop < window.innerHeight;

      if (window.scrollY === 0) {
        setShowNav(true);
      } else if (scrollingDown && nearFooter) {
        setShowNav(false);
      } else {
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
          {/* Logo */}
          <div className="nav__left">
            <img
              src={logo}
              alt="PONZICO Logo"
              className="logo__img"
              draggable="false"
            />
          </div>

          {/* Center Navigation */}
          <ul className="nav__center">
            <li>
              <a href="#about" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsModalOpen(true)}
                className="nav__link"
                style={{ cursor: "pointer" }}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a href="#collection" className="nav__link">
                Collection
              </a>
            </li>
          </ul>

          {/* Connect Button */}
          <div className="nav__right">
            <a href="#mint" className="nav__link--primary">
              Connect Wallet
            </a>
          </div>
        </div>
      </nav>

      {/* Rain Effect */}
      <div className="rain-overlay">
        {[...Array(100)].map((_, i) => {
          const thickness = Math.random() < 0.3 ? 3 : 1.5;
          return (
            <div
              className="raindrop"
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 1.2 + 0.6}s`,
                opacity: Math.random() * 0.5 + 0.5,
                height: `${Math.random() * 50 + 40}px`,
                width: `${thickness}px`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Hero Section */}
      <section id="hero">
        <div className="hero__content-row">
          {/* Left: NFT Visual */}
          <div className="nft__wrapper">
            <img src={nftImage} alt="Featured NFT" className="nft__featured" />
          </div>

          {/* Right: Hero Text */}
          <div className="hero__text">
            <div className="hero__content">
              <h1 className="hero__header">PONZICO</h1>
              <p className="hero__subtext">
                WELCOME TO PONZICO. Brick by brick. Layer by layer. A shadowy
                syndicate. A legendary frog. A DAO-powered Ponzi machine.
                PONZICO is a lore-driven, onchain operation led by the elusive
                Don Croakleone — building an empire from memes, mystique, and
                well-coordinated chaos.
              </p>
              <a
                onClick={() => setIsModalOpen(true)}
                className="cta-button"
                style={{ cursor: "pointer" }}
              >
                Roadmap
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Modal */}
      <RoadmapModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}