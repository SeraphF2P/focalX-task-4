import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { HeadLine } from "../../components/ui";

const departments = [
  {
    title: "cardiology",
    image: "/departments-1.jpg",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
  },
  {
    title: "Neurology",
    image: "/departments-2.jpg",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
  },
  {
    title: "Hepatology",
    image: "/departments-3.jpg",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
  },
  {
    title: "Pediatrics",
    image: "/departments-4.jpg",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
  },
  {
    title: "Ophthalmologists",
    image: "/departments-5.jpg",
    subtitle:
      "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph: `Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero`,
  },
];

export const Departments = () => {
  const [activeDepartment, setActiveDepartment] = useState(departments[0]);
  return (
    <section className=" py-5">
      <Container>
        <HeadLine
          title={"Departments"}
          subtitle={
            "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident pro"
          }
        />
        <div className=" d-flex flex-column flex-lg-row">
          <div className=" d-flex flex-column  ">
            {departments.map((department) => {
              const isActive = department.title === activeDepartment.title;
              return (
                <button
                  data-isactive={isActive}
                  onClick={() => setActiveDepartment(department)}
                  key={department.title}
                  className=" p-3   text-start department-section-btn  text-capitalize fw-semibold"
                >
                  {department.title}
                </button>
              );
            })}
          </div>
          <div className=" py-4 d-flex flex-column gap-2  flex-lg-row-reverse">
            <div style={{ aspectRatio: 1 }} className=" position-relative    ">
              <Image
                className=" position-absolute top-0 left-0 object-fit-cover h-100 w-100"
                src={activeDepartment.image}
              />
            </div>
            <div className=" px-3">
              <h3>{activeDepartment.title}</h3>
              <p>{activeDepartment.subtitle}</p>
              <p>{activeDepartment.paragraph}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
