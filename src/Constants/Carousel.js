import React, { useState, useEffect } from "react";
import { VolunteerA, VolunteerB, VolunteerC } from "../Assets";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handlePrev = () => {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  };

  const handleNext = () => {
    const newSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newSlide);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(newSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalSlides; i++) {
      dots.push(
        <span
          key={i}
          onClick={() => handleDotClick(i)}
          className={`dot ${currentSlide === i ? "active" : ""}`}
          style={{
            display: "inline-block",
            height: "8px",
            width: "8px",
            margin: "0 5px",
            borderRadius: "50%",
            backgroundColor: currentSlide === i ? "#00CC66" : "gray",
            cursor: "pointer",
          }}
        ></span>
      );
    }
    return dots;
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="carousel-container lg:h-[100vh]" id="carousel">
          <img
            className={`w-full h-full bg-black opacity-25 ${currentSlide === 0 ? "block" : "hidden"}`}
            src={VolunteerA}
            alt="First slide"
          />
          <img
            className={`w-full h-full bg-black opacity-25 ${currentSlide === 1 ? "block" : "hidden"}`}
            src={VolunteerB}
            alt="Second slide"
          />
          <img
            className={`w-full h-full bg-black opacity-25 ${currentSlide === 2 ? "block" : "hidden"}`}
            src={VolunteerC}
            alt="Third slide"
          />
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {renderDots()}
        </div>
      </div>
    </div>
  );
}
