import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class NewRelease extends Component {
  state = {
    Search: [],
  };

  fetchSaga = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=d29d9bb8&s=avengers");
      if (resp.ok) {
        const data = await resp.json();

        this.setState({ Search: data.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchSaga();
  };
  render() {
    return (
      <>
        <Container fluid className="mt-5">
          <h2 className="">New Releases</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center ">
            {this.state.Search.slice(0, 6).map(film => (
              <Col key={film.imdbID} className="mt-2 mb-2 px-1">
                <img className="img-fluid" src={film.Poster} alt={film.Title} style={{ height: "300px" }} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default NewRelease;
