import React from "react";
import { createPortal } from "react-dom";

export default function Popup({ isOpen, setIsOpen, header, footer, children }) {
    //here with the help of create portal we can render our element where we want  
  return createPortal(
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        {children}
        {footer}
      </div>
    </div>,
    document.querySelector("#portal"),
  );
}
