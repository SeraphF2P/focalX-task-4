import {
  Image,
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  NavLink,
} from "react-bootstrap";
import { Icon } from "../../components/ui/Icon";
import { siteConfig } from "../../configs/site";

export function Header() {
  return (
    <Navbar
      expand={"md"}
      className=" fixed-top bg-white shadow  p-0  d-flex flex-column"
    >
      <div className="bg-primary w-100">
        <Container className=" d-flex justify-content-center justify-content-md-between align-items-center  w-100 ">
          <div className=" d-none d-md-flex text-center    text-white text-capitalize py-2 gap-2      justify-content-center align-items-center    ">
            <Icon.clock
              style={{
                width: "20px",
                height: "20px",
              }}
              className=" "
            />
            <p className=" mb-0 ">monday - saturday,8AM to 10PM</p>
          </div>
          <div className=" text-center  d-flex  text-white text-capitalize py-2 gap-2      justify-content-center align-items-center    ">
            <Icon.mobile
              style={{
                width: "20px",
                height: "20px",
              }}
              className=" "
            />
            <p className=" mb-0 ">call us now +1 5599 55499 55</p>
          </div>
        </Container>
      </div>
      <Container className=" hstack    justify-content-between py-3  flex-nowrap align-items-center ">
        <Navbar.Brand href="#">
          <Image
            width={111}
            height={30}
            className="  "
            src="/logo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className=" border-0"
          aria-controls={`offcanvasNavbar-expand-md`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image
                width={111}
                height={30}
                className="  "
                src="/logo.png"
                alt="logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end px-lg-2">
            <Nav className="      ">
              {siteConfig.navigations.map((route) => {
                if ("options" in route) {
                  return (
                    <NavDropdown
                      style={{
                        fontSize: "10px",
                      }}
                      title="Dropdown"
                      key={route.name}
                      className="text-uppercase nav-link-hover px-lg-2   fw-semibold   "
                      id={`offcanvasNavbarDropdown-expand-md`}
                    >
                      {route.options.map((option) => {
                        return (
                          <NavDropdown.Item
                            key={option.name}
                            href={option.href}
                          >
                            {option.name}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                }
                return (
                  <NavLink
                    style={{
                      fontSize: "10px",
                    }}
                    className="   text-uppercase fw-semibold  nav-link-hover px-lg-2   "
                    key={route.name}
                    href={route.href}
                  >
                    {route.name}
                  </NavLink>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Button
          variant="primary"
          style={{
            fontSize: "10px",
          }}
          className="   small text-white text-capitalize "
        >
          make an appointment
        </Button>
      </Container>
    </Navbar>
  );
}
