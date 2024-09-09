import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const slides = [
  {
    image: "/hero-carousel/hero-carousel-1.jpg",
    header: "slide 1",
    paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/hero-carousel/hero-carousel-2.jpg",
    header: "slide 2",
    paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/hero-carousel/hero-carousel-3.jpg",
    header: "slide 3",
    paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];
export function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      as={"section"}
      style={{
        height: "calc(100vh - 115.2px)",
        marginTop: "115.2px",
      }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {slides.map((slide, index) => {
        return (
          <Carousel.Item
            style={{
              height: "calc(100vh - 115.2px)",
            }}
            key={slide.image}
            className=" position-relative    w-100 "
          >
            <img
              className=" w-100  position-absolute left-0 top-0 h-100  object-fit-cover "
              src={slide.image}
              alt={slide.header}
            />
            <Carousel.Caption
              style={{
                backgroundColor: "rgba(255, 255, 255,0.7)",
                borderTop: "4px solid var(--bs-primary)",
                bottom: "80px",
              }}
              className="  text-black p-4 flex-column d-flex   top-50   "
            >
              <h2 className=" text-capitalize fw-bold">{slide.header}</h2>
              <p>{slide.paragraph}</p>
              <Button className=" mb-2  m-auto px-4 text-capitalize text-white">
                read more
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
