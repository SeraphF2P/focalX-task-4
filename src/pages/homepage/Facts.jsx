import React from "react";
import { Icon } from "../../components/ui";
import { Col, Container, Row } from "react-bootstrap";

const cards = [
  {
    icon: "doctors",
    title: "25",
    paragraph: "doctors",
  },
  {
    icon: "hospital",
    title: "15",
    paragraph: "departments",
  },
  {
    icon: "flask",
    title: "8",
    paragraph: "research labs",
  },
  {
    icon: "patch",
    title: "150",
    paragraph: "awards",
  },
];
export const Facts = () => {
  return (
    <section>
      <Container className=" py-5   ">
        <Row className="gap-4 w-100 mx-auto">
          {cards.map((card) => {
            const Component = (props) => Icon[card.icon](props);
            return (
              <Col
                xs={12}
                md={6}
                lg
                key={card.title}
                style={{
                  maxWidth: "320px",
                }}
                className=" w-100 d-flex mx-auto   justify-content-start px-2  bg-white shadow rounded py-4  align-items-center"
              >
                <Component
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                  className=" px-2 text-primary"
                />
                <div className=" ">
                  <h3 className=" m-0">{card.title}</h3>
                  <p className=" m-0">{card.paragraph}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
