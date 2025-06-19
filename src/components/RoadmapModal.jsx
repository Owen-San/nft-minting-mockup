import React, { useEffect, useState } from "react";
import "../RoadmapModal.css";

export default function RoadmapModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      className={`modal__backdrop ${isOpen ? "modal__open" : "modal__closing"}`}
      onClick={onClose}
    >
      <div className="modal__content wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal__title">Roadmap</h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              className={`timeline__item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
            >
              <div className="timeline__dot">{item.quarter}</div>
              <div className="timeline__card">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const timelineData = [
  {
    quarter: "Q1",
    title: "The Syndicate Awakens",
    subtitle: "Phase 1 Launch",
    description:
      "The first whispers of Don Croakleone emerge. Website launch, lore drops, and community seeding begin. Eyes start watching.",
  },
  {
    quarter: "Q2",
    title: "Mint Protocol",
    subtitle: "Ponzi Engine Activation",
    description:
      "Minting opens for founding members. Revenue flows directly into the DAO treasury. Early adopters earn Syndicate perks.",
  },
  {
    quarter: "Q3",
    title: "Expansion Phase",
    subtitle: "Layer 2: The Con Widens",
    description:
      "New collections, partner drops, and memetic takeovers. The Syndicate starts acquiring influence across the chain.",
  },
  {
    quarter: "Q4",
    title: "The Vault Opens",
    subtitle: "DAO-Powered Chaos",
    description:
      "Treasury votes begin. Funds deployed to fuel on-chain operations, acquisition campaigns, and coordinated digital heists.",
  },
  {
    quarter: "Q1",
    title: "IRL Mystery",
    subtitle: "The Syndicate Goes Physical",
    description:
      "Merch drops, live puzzles, and unexpected city sightings. PONZICO spills from the chain into the shadows of real life.",
  },
];
