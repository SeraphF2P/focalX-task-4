import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeadLine, Icon } from "../../components/ui";
const cards = [
  {
    icon: "heartbeat",
    title: "lorem Ipsum 1",
    paragraph:
      "lorem Ipsum dolor sit amet et pop null aliquet et non proident Lorem Ipsum et ullamcorper",
  },
  {
    icon: "pills",
    title: "lorem Ipsum 2",
    paragraph:
      "lorem Ipsum dolor sit amet et pop null aliquet et non proident Lorem Ipsum et ullamcorper",
  },
  {
    icon: "hospitalUser",
    title: "lorem Ipsum 3",
    paragraph:
      "lorem Ipsum dolor sit amet et pop null aliquet et non proident Lorem Ipsum et ullamcorper",
  },
  {
    icon: "dna",
    title: "lorem Ipsum 4",
    paragraph:
      "lorem Ipsum dolor sit amet et pop null aliquet et non proident Lorem Ipsum et ullamcorper",
  },
  {
    icon: "wheelchair",
    title: "lorem Ipsum 5",
    paragraph:
      "lorem Ipsum dolor sit amet et pop null aliquet et non proident Lorem Ipsum et ullamcorper",
  },
  {
    icon: "notesMedical",
    title: "lorem Ipsum 6",
    paragraph:
      "lorem Ipsum dolor sit amet et pop null aliquet et non proident Lorem Ipsum et ullamcorper",
  },
];
export const Services = () => {
  return (
    <section>
      <HeadLine
        title={"services"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro"
        }
      />
      <Container className=" py-4   ">
        <Row xs={1} sm={1} md={2} lg={3} className=" w-100 mx-auto">
          {cards.map((card, index) => {
            const Component = (props) => Icon[card.icon](props);
            return (
              <Col
                key={index}
                className=" d-flex mx-auto   flex-column   align-items-center"
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                  }}
                  className="bg-white shadow  rounded-circle d-flex justify-content-center align-items-center"
                >
                  <Component
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    className="   text-primary"
                  />
                </div>
                <HeadLine title={card.title} subtitle={card.paragraph} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
