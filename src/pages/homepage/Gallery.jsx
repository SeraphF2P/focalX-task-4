import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { HeadLine } from "../../components/ui";
import useViewportSize from "../../hooks/useVIewportSize";

const slides = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-8.jpg",
];
export const Gallery = () => {
  const [activeindex, setActiveIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const viewport = useViewportSize();
  const gap = 16;
  const cardWidth = viewport.width <= 992 ? 100 : 20;
  const modifier = viewport.width <= 992 ? 0 : cardWidth * 2;

  return (
    <section className="py-5 ">
      <HeadLine
        title={"gallery"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident  ident pro"
        }
      />
      <Container>
        <div
          style={{
            height: viewport.width > 992 ? "240px" : "60vh",
          }}
          className=" position-relative w-100  py-4   overflow-hidden  "
        >
          {slides.map((slide, index) => {
            const isActive = activeindex === index;
            return (
              <div
                key={index}
                style={{
                  top: 0,
                  left: `calc(${index * cardWidth + modifier}% - ${gap / 2}px)`,
                  translate: `${activeindex * -100}% 0%`,
                  transition: "translate 0.4s linear",
                  width: `${cardWidth}%`,
                  maxWidth: `calc(100% - ${gap}px)`,
                  height: viewport.width > 992 ? "160px" : "320px",
                  cursor: "pointer",
                }}
                className=" position-absolute   "
                onClick={() => handleSelect(index)}
              >
                <img
                  style={{
                    left: 0,
                    top: 0,
                    transition: "outline 0.3s linear",
                    padding: gap / 2,
                    marginTop: gap / 2,
                    outline: isActive
                      ? `${gap / 2}px solid var(--bs-primary)`
                      : `${gap / 2}px solid transparent`,
                  }}
                  className=" object-fit-cover   w-100 h-100    position-absolute "
                  src={slide}
                  alt={slide}
                />
              </div>
            );
          })}
        </div>
        <div className="  justify-content-center align-items-center  d-flex gap-4 ">
          {slides.map((_, index) => {
            const isActive = index === activeindex;
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                style={{
                  borderRadius: "100%",
                  width: "16px",
                  height: "16px",
                  border: "2px solid var(--bs-primary)",
                  backgroundColor: isActive ? "var(--bs-primary)" : "white",
                }}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
