import React from "react";
import { HeadLine } from "../../components/ui";
import { Button, Col, Container, Row } from "react-bootstrap";

const cards = [
  {
    name: "free",
    price: "0",
    features: [
      {
        name: "aida dere",
        included: true,
      },
      {
        name: "nec feugiat nisl",
        included: true,
      },
      {
        name: "nulla at volutpat dota",
        included: true,
      },
      {
        name: "phareta massa",
        included: false,
      },
      {
        name: "massa ultricies mi",
        included: false,
      },
    ],
    bestDeal: false,
    addvanced: false,
  },
  {
    name: "business",
    price: "19",
    features: [
      {
        name: "aida dere",
        included: true,
      },
      {
        name: "nec feugiat nisl",
        included: true,
      },
      {
        name: "nulla at volutpat dota",
        included: true,
      },
      {
        name: "phareta massa",
        included: true,
      },
      {
        name: "massa ultricies mi",
        included: false,
      },
    ],
    bestDeal: true,
    addvanced: false,
  },
  {
    name: "developer",
    price: "29",
    features: [
      {
        name: "aida dere",
        included: true,
      },
      {
        name: "nec feugiat nisl",
        included: true,
      },
      {
        name: "nulla at volutpat dota",
        included: true,
      },
      {
        name: "phareta massa",
        included: true,
      },
      {
        name: "massa ultricies mi",
        included: true,
      },
    ],
    bestDeal: false,
    addvanced: false,
  },
  {
    name: "ultimate",
    price: "49",
    features: [
      {
        name: "aida dere",
        included: true,
      },
      {
        name: "nec feugiat nisl",
        included: true,
      },
      {
        name: "nulla at volutpat dota",
        included: true,
      },
      {
        name: "phareta massa",
        included: true,
      },
      {
        name: "massa ultricies mi",
        included: true,
      },
    ],
    bestDeal: false,
    addvanced: true,
  },
];
export const Pricing = () => {
  return (
    <section className="py-5 ">
      <HeadLine
        title={"pricing"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident  ident pro"
        }
      />
      <Container>
        <Row xs={1} lg={4} className="  gap-4 justify-content-center ">
          {cards.map((card) => {
            return (
              <Col
                key={card.name}
                style={{ width: "288px" }}
                className=" p-0 text-center  shadow  overflow-hidden d-flex flex-column position-relative"
              >
                {card.addvanced && (
                  <p
                    style={{
                      rotate: "45deg",
                      right: -40,
                      top: 24,
                    }}
                    className=" position-absolute  px-5 py-2 text-capitalize bg-primary text-white"
                  >
                    addvanced
                  </p>
                )}
                <h3
                  style={{
                    color: card.bestDeal ? "white" : "gray",
                    backgroundColor: card.bestDeal
                      ? "var(--bs-primary)"
                      : "#e7e7e7",
                  }}
                  className=" py-4 text-capitalize"
                >
                  {card.name}
                </h3>
                <div className="  d-flex  align-items-center justify-content-center">
                  <span className="  align-self-start fs-3 ">$</span>
                  <p className=" m-0 py-2 fs-1">{card.price}</p>
                  <span className=" ms-2 " style={{ color: "gray" }}>
                    / month
                  </span>
                </div>
                {card.features.map((feature) => {
                  return (
                    <p
                      key={feature.name}
                      className=" text-capitalize py-2"
                      style={{
                        ...(!feature.included
                          ? {
                              textDecoration: "line-through",
                              color: "lightgray",
                            }
                          : []),
                      }}
                    >
                      {feature.name}
                    </p>
                  );
                })}
                <div
                  style={{ backgroundColor: "#e7e7e7" }}
                  className=" py-4 d-flex justify-content-center align-items-center"
                >
                  <Button className=" text-white text-capitalize px-4">
                    buy now
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
