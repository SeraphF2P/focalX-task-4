import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "../../components/ui/Icon";

const cards = [
  {
    icon: "heartbeat",
    title: "title 1",
    paragraph:
      "lorem ipsum dolor sit amet, consectetur adipis occ tempor invididunt ut labore et",
  },
  {
    icon: "thermometer",
    title: "title 2",
    paragraph:
      "lorem ipsum dolor sit amet, consectetur adipis occ tempor invididunt ut labore et",
  },
  {
    icon: "pills",
    title: "title 3",
    paragraph:
      "lorem ipsum dolor sit amet, consectetur adipis occ tempor invididunt ut labore et",
  },
  {
    icon: "dna",
    title: "title 4",
    paragraph:
      "lorem ipsum dolor sit amet, consectetur adipis occ tempor invididunt ut labore et",
  },
];

export const Infos = () => {
  return (
    <section className="py-5">
      <Container className=" d-flex flex-column flex-md-row gap-4">
        <Row className="gap-4 w-100 mx-auto">
          {cards.map((card, index) => {
            const Component = (props) => Icon[card.icon](props);
            return (
              <Col
                key={index}
                xs={12}
                md={6}
                lg
                className=" d-flex flex-column mx-auto gap-2 py-5 bg-white rounded shadow px-4 "
              >
                <Component
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                  className=" text-primary"
                />
                <h3>{card.title}</h3>
                <p>{card.paragraph}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
