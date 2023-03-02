import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menubar = () => {

  return (
    <div >
      <Navbar
        collapseOnSelect
        expand="lg"
        
        className="navbar-light bg-light"
        style={{  }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home"> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              {/* <h4 className="menubar-tag-h4">
                <span>A</span>thithi {" "}
                <span>B</span>ook
              </h4> */}
              {/* <a class="navbar-brand" href="/"> */}
              <img src="images/Omni-Logo-1.png" alt="" className="d-inline-block align-text-top w-75" />

              {/* </a> */}
            </div>
          </Link>
          {/* VMS ATHITHI */}
          {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav menu-list-items " style={{justifyContent:""}} >
            <Nav className=" nav-tag ">
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0">
                {/* <div className="menu-list-div"> */}
                <Link to="/" className="menu-Link " style={{display: "block",width: "115px"}}>Home</Link>
                {/* </div> */}
              </Nav.Link>
              <Nav.Link href="#" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/drywall" className="menu-Link " style={{display: "block",width: "115px"}}>Drywall</Link>
              </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/cskphillips" className="menu-Link" style={{display: "block",width: "115px"}}>CSK Phillips</Link>
              </Nav.Link>

              {/* <Nav.Link href="#features" style={{fontWeight:"500",color:"black"}}>Home</Nav.Link> */}
              {/* <Nav.Link href="#pricing" style={{fontWeight:"500",color:"black"}}>Benefits</Nav.Link> */}
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/cskslotted" className="menu-Link" style={{display: "block",width: "115px"}}>CSK Slotted</Link>
              </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/panphillips" className="menu-Link" style={{display: "block",width: "115px"}}>PAN Phillips</Link>
              </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/panslotted" className="menu-Link" style={{display: "block",width: "115px"}}>PAN Slotted</Link>
              </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/woodphillips" className="menu-Link " style={{display: "block",width: "115px"}}>WOOD Phillips</Link>
              </Nav.Link>
              <Nav.Link href="#features" className="menu-list-div mt-0 p-0 justify-content-end m-0" >
                <Link to="/woodslotted" className="menu-Link"style={{display: "block",width: "115px"}}>WOOD Slotted</Link>
              </Nav.Link>
              {/* <Nav.Link href="#pricing" style={{fontWeight:"500",color:"black"}}>About us</Nav.Link>
              <Nav.Link href="#pricing" style={{fontWeight:"500",color:"black"}}>Contact us</Nav.Link> */}

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Nav >
              <Nav.Link href="#deets"></Nav.Link>

              <div className="d-flex justify-content-center align-items-center m-0 p-2 login-signup-main-div">
              <Nav.Link href="#features" className="link-div mt-0 p-0" >
                <div >
                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0,0,0,.70)",

                    }}
                  >
                    <h6 className="m-0 p-0 me-2 login-h6-tag">LOGIN</h6>
                  </Link>
                </div>
                </Nav.Link>
                <div>
                  <h6 className="m-0 p-0 login-h6-tag">/</h6>
                </div>
                <Nav.Link href="#features" className="link-div mt-0 p-0" >
                <div className="">
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0,0,0,.70)",
                    }}
                  >
                    <h6 className="mx-2 m-0 p-0 login-h6-tag">SIGNUP</h6>
                  </Link>
                </div>
                </Nav.Link>
              </div>

            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} bg="dark"  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
    </div>
  );
};

export default Menubar;
