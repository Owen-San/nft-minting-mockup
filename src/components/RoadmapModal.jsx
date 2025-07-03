import React, { useEffect, useState } from "react";
import "../RoadmapModal.css";
import mintImage from "../assets/speakeasy.png";

export default function MintModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);
  const [password, setPassword] = useState("");

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

  const handleSubmit = () => {
    console.log("Entered password:", password);
    // TODO: add mint logic later
  };

  if (!visible) return null;

  return (
    <div
      className={`modal__backdrop ${isOpen ? "modal__open" : "modal__closing"}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✖
        </button>

        <img src={mintImage} alt="Mint Access" className="modal__image" />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="modal__input"
        />

        <button onClick={handleSubmit} className="modal__button">
          Unlock Mint
        </button>
      </div>
    </div>
  );
}