import React from "react";
import { HeadLine } from "../../components/ui";
const cards = [
  {
    image: "/doctors/doctors-1.jpg",
    name: "walter white",
    job: "chief medical officer",
  },
  {
    image: "/doctors/doctors-2.jpg",
    name: "sarah jhonson",
    job: "anesthesiologist",
  },
  {
    image: "/doctors/doctors-3.jpg",
    name: "william anderson",
    job: "cardiology",
  },
  {
    image: "/doctors/doctors-4.jpg",
    name: "amanda jepson",
    job: "neurosurgeon",
  },
];
export const Doctors = () => {
  return (
    <section className=" py-5">
      <HeadLine
        title={"Doctors"}
        subtitle={
          "lorem ipsum dolor sit amet consectetur adipiscing elit non proident pro ident  ident pro"
        }
      />
      <div className=" d-flex flex-column gap-4 justify-content-center align-items-center flex-lg-row">
        {cards.map((card) => (
          <div
            key={card.name}
            style={{ width: "288px" }}
            className=" bg-white shadow"
          >
            <img src={card.image} className="w-100" alt="" />
            <div className=" p-3 py-4">
              <h5 className=" text-capitalize m-0">{card.name}</h5>
              <p style={{ color: "gray" }} className=" text-capitalize m-0">
                {card.job}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
