import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { HeadLine } from "../../components/ui";

export const MakeAnAppointmentForm = () => {
  return (
    <section className=" py-5 bg-primary  bg-opacity-10">
      <HeadLine
        title={"make an appointment"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro"
        }
      />
      <Container as={"form"}>
        <Row className=" row-gap-4">
          <Col md={4} className="  ">
            <Form.Control
              className=" rounded-1"
              name="username"
              type="text"
              placeholder="your name"
              size="sm"
            />
          </Col>
          <Col md={4} className="  ">
            <Form.Control
              className=" rounded-1"
              size="sm"
              type="email"
              name="email"
              placeholder="your email"
            />
          </Col>
          <Col md={4} className="  ">
            <Form.Control
              className=" rounded-1"
              size="sm"
              type="number"
              placeholder="your phone"
              name="phone"
            />
          </Col>
          <Col md={4} className="  ">
            <Form.Control
              className=" rounded-1"
              size="sm"
              type="date"
              name="date"
            />
          </Col>
          <Col md={4} className="  ">
            <Form.Select
              className="rounded-1 text-capitalize"
              size="sm"
              aria-label="select department"
            >
              <option>select department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={4} className="  ">
            <Form.Select
              className="rounded-1 text-capitalize"
              size="sm"
              aria-label="select doctor"
            >
              <option>select doctor</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={12} className="  ">
            <Form.Control
              className=" rounded-1"
              as="textarea"
              rows={7}
              placeholder="message (optional)"
            />
          </Col>
        </Row>
        <Row>
          <Col className=" py-4 d-flex justify-content-center align-items-center">
            <Button
              style={{
                maxWidth: "min-content",
              }}
              className=" text-capitalize   text-nowrap m-auto text-white "
            >
              make an appointment
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
