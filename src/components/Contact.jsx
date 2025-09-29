import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
      className="border m-4 "
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Popup by Clicking me
      </button>
      <Popup
        isOpen={isOpen}
        header={<h1>Contact Us</h1>}
        footer={<h1>Thanks to contact us</h1>}
        setIsOpen={setIsOpen}
      > <p>Our Contact no is +92*******</p></Popup>
    </>
  );
}
