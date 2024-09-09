import React from "react";
import { HeadLine } from "../../components/ui";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";

const questions = [
  {
    header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
  },
  {
    header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
  },
  {
    header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
  },
  {
    header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
  },
  {
    header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
  },
  {
    header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
  },
];
export const FAQ = () => {
  return (
    <section className="py-5 ">
      <HeadLine
        title={"frequently asked questions"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident  ident pro"
        }
      />
      <Container>
        <Accordion>
          {questions.map((question, index) => {
            return (
              <Accordion.Item
                key={index}
                className="border my-4"
                eventKey={index}
              >
                <Accordion.Header>{question.header}</Accordion.Header>
                <Accordion.Body>{question.body}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
};
