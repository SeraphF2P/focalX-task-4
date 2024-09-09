import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { HeadLine, Icon } from "../../components/ui";
import useViewportSize from "../../hooks/useVIewportSize";

const slides = [
  {
    image: "/testimonials/testimonials-1.jpg",
    name: "john larson",
    job: "enterpreneur",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/testimonials/testimonials-2.jpg",
    name: "john larson",
    job: "enterpreneur",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/testimonials/testimonials-3.jpg",
    name: "john larson",
    job: "enterpreneur",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/testimonials/testimonials-4.jpg",
    name: "john larson",
    job: "enterpreneur",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    image: "/testimonials/testimonials-5.jpg",
    name: "john larson",
    job: "enterpreneur",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];
export const Testimonials = () => {
  const [activeindex, setActiveIndex] = useState(2);
  const viewport = useViewportSize();
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  const cardWidth = viewport.width < 992 ? 100 : 33;
  const modifier = viewport.width < 992 ? 0 : cardWidth;
  return (
    <section>
      <HeadLine
        title={"testimonials"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident  ident pro"
        }
      />
      <Container>
        <div
          style={{
            height: "60vh",
          }}
          className=" position-relative w-100  overflow-hidden   "
        >
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                style={{
                  left: `${index * cardWidth + modifier}%`,
                  translate: `${activeindex * -100}% 0%`,
                  transition: "translate 0.4s linear",
                  width: `${cardWidth}%`,
                }}
                className="  h-100    position-absolute py-5"
              >
                <div
                  key={slide.image}
                  style={{
                    maxWidth: "40ch",
                  }}
                  className=" m-auto  "
                >
                  <p
                    style={{
                      marginBottom: "-36px",
                      paddingBottom: "44px",
                      backgroundColor: "#efefef",
                    }}
                    className="px-3 pt-3 rounded"
                  >
                    <Icon.quote
                      style={{ width: "36px", height: "36px" }}
                      className=" text-primary p-2"
                    />
                    {slide.paragraph}
                    <Icon.quote
                      style={{
                        width: "36px",
                        height: "36px",
                        rotate: "180deg",
                      }}
                      className=" text-primary p-2 "
                    />
                  </p>
                  <div className="  ms-3 ">
                    <Image
                      roundedCircle
                      style={{
                        width: "72px",
                        outline: "8px solid white",
                      }}
                      className="    overflow-hidden object-fit-cover "
                      src={slide.image}
                      alt={slide.header}
                    />
                    <p className=" mb-0 mt-1 fw-bold text-capitalize">
                      {slide.name}
                    </p>
                    <p
                      style={{ color: "gray" }}
                      className="mb-0 text-capitalize"
                    >
                      {slide.job}
                    </p>
                  </div>
                </div>
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
