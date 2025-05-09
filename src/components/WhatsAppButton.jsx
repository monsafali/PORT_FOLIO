import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923116940272"; // Replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "15px",
        fontSize: "32px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
