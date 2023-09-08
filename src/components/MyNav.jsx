import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.png";
const MyNav = () => (
  <Navbar expand="lg" data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src={logo} width="100" height="55" className="d-inline-block align-top" alt="netflix logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tvShows">TV Shows</Nav.Link>
          <Nav.Link href="#movies" active>
            Movies
          </Nav.Link>
          <Nav.Link href="#recAdd">Recently Added</Nav.Link>
          <Nav.Link href="#myList">My List</Nav.Link>
          <Nav.Link className="text-white " style={{ marginInlineStart: "auto" }} href="#searchI">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Nav.Link>
          <Nav.Link className="fw-bold text-white" href="#kids">
            KIDS
          </Nav.Link>
          <Nav.Link className=" text-white" href="#bell">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Nav.Link>
          <Nav.Link className=" text-white" href="#user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
