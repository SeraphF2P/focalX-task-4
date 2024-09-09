import React from "react";
import { Button, Container } from "react-bootstrap";

export const Filler = () => {
  return (
    <section className="py-4 bg-primary ">
      <Container
        style={{
          height: "50vh",
        }}
        className=" d-flex flex-column text-white text-center  justify-content-center align-items-center gap-4"
      >
        <h3 className="  text-capitalize">in an emergensy ? need help now ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          aspernatur necessitatibus rem consequatur officiis quod sint voluptate
          illum praesentium beatae, dolor, ipsum itaque aperiam hic?
        </p>
        <Button
          variant="primary"
          style={{
            fontSize: "10px",
          }}
          className=" text-white text-capitalize  fs-4 border small  "
        >
          make an appointment
        </Button>
      </Container>
    </section>
  );
};
