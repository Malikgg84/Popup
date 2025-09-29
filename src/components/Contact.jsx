import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";
import { Data } from "../Data";

export default function Contact() {
  const [prodata, setProData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
console.log(prodata);
  return (
    <>
      <button
        className="m-4 border"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Popup by Clicking me
      </button>
      <button
        className="m-4 border"
        onClick={() => {
          // if we want that our data like as array, function is only import at that time than we use this 
          import ("../Data.js").then(res => setProData(res.Data))  //here when data comes than we set it in setProData
        }}
      >
        Load Products Data
      </button>
      <ul>
        {prodata ? prodata.map((pro) => (
          <li key={pro.id}>{pro.title}</li>
        )): <li></li>}
      </ul>
      <Popup
        isOpen={isOpen}
        header={<h1>Contact Us</h1>}
        footer={<h1>Thanks to contact us</h1>}
        setIsOpen={setIsOpen}
      >
        {" "}
        <p>Our Contact no is +92*******</p>
      </Popup>
    </>
  );
}
