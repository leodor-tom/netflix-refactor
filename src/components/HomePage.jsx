import { Container, Dropdown } from "react-bootstrap";
import TrendingNow from "./TrendingNow";
import WhatchAgain from "./WhatchAgain";
import NewRelease from "./NewRelease";
import MyFooter from "./MyFooter";

const HomePage = () => (
  <>
    <Container fluid>
      <div class="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">Movies</h2>
          <Dropdown className="ms-4 mt-1">
            <Dropdown.Toggle
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              id="dropdown-basic"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Domedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            class="bi bi-grid-fill"
            viewBox="0 0 16 16"
            className="mx-2"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            class="bi bi-grid-3x2-gap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z" />
          </svg>
        </div>
      </div>
    </Container>
    <TrendingNow />
    <WhatchAgain />
    <NewRelease />
    <MyFooter />
  </>
);

export default HomePage;
