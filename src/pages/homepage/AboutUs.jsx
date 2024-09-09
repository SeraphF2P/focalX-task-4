import React from "react";
import { HeadLine, Icon } from "../../components/ui";
import { Container, Image } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <section>
      <HeadLine
        title={"about us"}
        subtitle={"lorem ipsum d wef asdas wefwdfasdfasdas"}
      />
      <Container className=" d-flex flex-column gap-4 flex-lg-row justify-content-between align-items-center">
        <div
          style={{ aspectRatio: 16 / 9 }}
          className=" position-relative w-100     "
        >
          <Image
            src="/about.jpg"
            className=" position-absolute top-0 left-0 h-100 w-100  object-fit-cover "
          />
          <div
            className=" d-flex justify-content-center align-items-center  position-absolute bg-primary text-white overflow-hidden  rounded-circle    "
            style={{
              width: "64px",
              height: "64px",
              outline: "10px solid rgb(51, 204, 204,0.4)",
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
            }}
          >
            <Icon.videoStart
              style={{ width: "32px", height: "32px", marginLeft: "4px" }}
            />
          </div>
        </div>
        <div style={{ maxWidth: "65ch" }} className=" flex-grow-1 ">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            aut.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            numquam qui cum modi quos accusantium praesentium blanditiis,
            necessitatibus nam nulla.
          </p>
          <div className=" d-flex justify-content-center">
            <Icon.check
              style={{ width: "24px", height: "24px" }}
              className=" me-2 text-primary"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, vero.
            </p>
          </div>
          <div className=" d-flex justify-content-center">
            <Icon.check
              style={{ width: "24px", height: "24px" }}
              className=" me-2 text-primary"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, vero.
            </p>
          </div>
          <div className=" d-flex justify-content-center">
            <Icon.check
              style={{ width: "24px", height: "24px" }}
              className=" me-2 text-primary"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, vero.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            accusantium. Id itaque fuga quos sint temporibus corporis veniam
            rerum laborum odit, optio nemo voluptatibus, facilis cupiditate. At
            aperiam rerum quae!
          </p>
        </div>
      </Container>
    </section>
  );
};
