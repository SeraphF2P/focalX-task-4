import React from "react";
import { Container } from "react-bootstrap";
import { Icon } from "../../components/ui";
import { socialLinks } from "../../configs/site";

export const Footer = () => {
  return (
    <footer className="  bg-primary bg-opacity-10 ">
      <Container className="text-capitalize gap-4 gap-lg-2 py-5 d-flex flex-column align-items-center justify-content-start flex-lg-row">
        <div className="vstack gap-2 flex-grow-1 me-auto">
          <h2 className=" text-capitalize">medicio</h2>
          <p>A108 adam street</p>
          <p>New York, NY 535022</p>
          <p>
            <span className=" fw-semibold text-capitalize">phone:</span>
            +1 5589 55488 55
          </p>
          <p>
            <span className=" fw-semibold text-capitalize">email:</span>
            info@example.com
          </p>
          <div className="hstack gap-2">
            {socialLinks.map((socialLink) => {
              const Component = (props) => Icon[socialLink.icon](props);
              return (
                <span
                  key={socialLink.name}
                  style={{
                    border: "1px solid currentColor",
                    width: "48px",
                    height: "48px",
                    cursor: "pointer",
                  }}
                  className=" link-hover rounded-circle hstack  justify-content-center"
                >
                  <Component style={{ width: "24px", height: "24px" }} />
                </span>
              );
            })}
          </div>
        </div>
        <ul className=" vstack gap-2">
          <h4 className=" text-capitalize">useful links</h4>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">terms of service</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
        </ul>
        <ul className=" vstack gap-2">
          <h4 className=" text-capitalize">our services</h4>
          <li>
            <a href="#">web design</a>
          </li>
          <li>
            <a href="#">web development</a>
          </li>
          <li>
            <a href="#">marketing</a>
          </li>
          <li>
            <a href="#">graphic design</a>
          </li>
        </ul>
        <ul className=" vstack gap-2">
          <h4 className=" text-capitalize">hic solutasetp</h4>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
        </ul>
        <ul className=" vstack gap-2">
          <h4 className=" text-capitalize">hic solutasetp</h4>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
        </ul>
      </Container>
      <Container>
        <div
          style={{ borderTop: "1px solid lightgray" }}
          className=" text-capitalize py-4 vstack align-items-center"
        >
          <p>copyright medicio all rights reserved </p>
          <p>
            designed by{" "}
            <a
              href="#"
              className=" text-primary text-decoration-none fw-semibold"
            >
              BootstrapMade
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
