import React from "react";
import { AboutUs } from "./AboutUs";
import { Facts } from "./Facts";
import { Filler } from "./Filler";
import { Hero } from "./hero";
import { Infos } from "./Infos";
import { Features } from "./Features";
import { Services } from "./Services";
import { MakeAnAppointmentForm } from "./MakeAnAppointmentForm";
import { Departments } from "./Departments";
import { Testimonials } from "./Testimonials";
import { Doctors } from "./Doctors";
import { Gallery } from "./Gallery";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "../../master/footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Infos />
      <Filler />
      <AboutUs />
      <Facts />
      <Features />
      <Services />
      <MakeAnAppointmentForm />
      <Departments />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};
