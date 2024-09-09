import React from "react";
import { Container } from "react-bootstrap";

export const HeadLine = ({ title, subtitle, centered = true }) => {
  return (
    <Container
      className={`py-5   d-flex gap-2 flex-column   ${
        centered
          ? "justify-content-center text-center align-items-center"
          : "justify-content-start  text-start  "
      }`}
    >
      <h2 className=" text-capitalize">{title}</h2>
      <div
        style={{
          height: "3px",
          width: "48px",
        }}
        className=" bg-primary rounded "
      />
      <p>{subtitle}</p>
    </Container>
  );
};
