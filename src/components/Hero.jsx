import React, { useState } from "react";
import logo from "../assets/logo.png";
import nftImage from "../assets/Don_Croakleone.png";
import RoadmapModal from "./RoadmapModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Logo */}
      <nav className="nav__floating">
        <div className="nav__row">
          <div className="nav__left">
            <img
              src={logo}
              alt="PONZICO Logo"
              className="logo__img"
              draggable="false"
            />
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
          <div className="nft__wrapper">
            <img src={nftImage} alt="Featured NFT" className="nft__featured" />
          </div>

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
