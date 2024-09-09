import React from "react";
import { HeadLine, Icon } from "../../components/ui";
import { Container, Image } from "react-bootstrap";
const cards = [
  {
    icon: "handHoldingMedical",
    title: "lorem Ipsum",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro ident pro ",
  },
  {
    icon: "medkit",
    title: "lorem Ipsum",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro ident pro ",
  },
  {
    icon: "staffSnake",
    title: "lorem Ipsum",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro ident pro ",
  },
  {
    icon: "lungs",
    title: "lorem Ipsum",
    paragraph:
      "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro ident pro ",
  },
];
export const Features = () => {
  return (
    <section>
      <Container className="  d-flex flex-column flex-lg-row justify-content-center gap-4 align-items-center">
        <Image
          src="/features.jpg"
          style={{
            objectPosition: "center bottom",
          }}
          className=" m-0 p-0  w-lg-50   vh-lg-100  h-100 w-100 "
        />
        <div>
          <HeadLine
            centered={false}
            title={"enim quis est voluptatibus aliquid consequatur fugiat"}
            subtitle={
              "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro ident pro"
            }
          />
          <Container className=" d-flex flex-column   justify-content-between align-items-center">
            {cards.map((card, index) => {
              const Component = (props) => Icon[card.icon](props);
              return (
                <div key={index} className=" d-flex gap-4 p-3 w-100">
                  <Component
                    style={{
                      minWidth: "60px",
                      height: "60px",
                    }}
                    className=" bg-white p-3 text-primary shadow "
                  />
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </Container>
        </div>
      </Container>
    </section>
  );
};
