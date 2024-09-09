import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { HeadLine, Icon } from "../../components/ui";

export const Contact = () => {
  return (
    <section className="py-5 ">
      <HeadLine
        title={"contact"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident  ident pro"
        }
      />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3621.780605877898!2d46.7393324!3d24.802965!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1725726554074!5m2!1ssv!2sse"
          width="100%"
          height="320px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container className=" py-5">
        <Row xs={1} lg={4} className=" gap-4 gap-lg-0">
          <Col lg={{ span: 6 }}>
            <Row
              lg={2}
              className=" gap-4 gap-lg-0  flex-column justify-content-between h-100"
            >
              <Col lg={{ span: 12, order: 1 }}>
                <div
                  style={{ flexBasis: "320px" }}
                  className=" bg-white gap-2 m-auto text-center shadow d-flex flex-column justify-content-center align-items-center p-4"
                >
                  <div
                    style={{
                      border: "2px dashed var(--bs-primary)",
                      aspectRatio: 1,
                      width: "60px",
                    }}
                    className=" d-flex justify-content-center align-items-center  rounded-circle "
                  >
                    <Icon.twitter
                      style={{ width: "24px", height: "24px" }}
                      className=" text-primary "
                    />
                  </div>
                  <h5 className=" m-0 text-capitalize">address</h5>
                  <p className=" m-0 text-capitalize">
                    A108 adam street, New York, NY 535022
                  </p>
                </div>
              </Col>
              <Col className=" " lg={{ span: 12, order: 3 }}>
                <Row className="gap-4 gap-lg-0" xs={1} sm={1} lg={2}>
                  <Col lg={{ span: 6 }}>
                    <div
                      style={{ flexBasis: "320px" }}
                      className=" bg-white gap-2 m-auto text-center shadow d-flex flex-column justify-content-center align-items-center p-4"
                    >
                      <div
                        style={{
                          border: "2px dashed var(--bs-primary)",
                          aspectRatio: 1,
                          width: "60px",
                        }}
                        className=" d-flex justify-content-center align-items-center  rounded-circle "
                      >
                        <Icon.twitter
                          style={{ width: "24px", height: "24px" }}
                          className=" text-primary "
                        />
                      </div>
                      <h5 className=" m-0 text-capitalize">call us</h5>
                      <p className=" m-0 text-capitalize">+1 5589 55488 55</p>
                    </div>
                  </Col>
                  <Col lg={{ span: 6 }}>
                    <div
                      style={{ flexBasis: "320px" }}
                      className=" bg-white gap-2 m-auto text-center shadow d-flex flex-column justify-content-center align-items-center p-4"
                    >
                      <div
                        style={{
                          border: "2px dashed var(--bs-primary)",
                          aspectRatio: 1,
                          width: "60px",
                        }}
                        className=" d-flex justify-content-center align-items-center  rounded-circle "
                      >
                        <Icon.twitter
                          style={{ width: "24px", height: "24px" }}
                          className=" text-primary "
                        />
                      </div>
                      <h5 className=" m-0 text-capitalize">email us</h5>
                      <p className=" m-0 text-capitalize">info@example.com</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className=" m-auto" lg={{ span: 6, offset: 6, order: 2 }}>
            <form className=" bg-white shadow d-flex flex-column justify-content-center align-items-center p-4 gap-4">
              <Form.Control
                className=" rounded-1"
                name="username"
                type="text"
                placeholder="your name"
                size="sm"
              />
              <Form.Control
                className=" rounded-1"
                size="sm"
                type="email"
                name="email"
                placeholder="your email"
              />
              <Form.Control
                className=" rounded-1"
                size="sm"
                type="text"
                placeholder="subject"
                name="subject"
              />

              <Form.Control
                className=" rounded-1"
                as="textarea"
                rows={4}
                placeholder="message (optional)"
              />
              <Button
                style={{
                  maxWidth: "min-content",
                }}
                className=" text-capitalize   text-nowrap px-3 text-white "
              >
                send a message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
