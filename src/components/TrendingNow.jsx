import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class TrendingNow extends Component {
  state = {
    Search: [],
  };

  fetchSaga = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=d29d9bb8&s=harry%20potter");
      if (resp.ok) {
        const data = await resp.json();
        console.log("data", data);
        this.setState({ Search: data.Search });
        console.log("setState", this.setState);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(this.state);
  };

  componentDidMount = () => {
    console.log("COMPONENT DID MOUNT");

    this.fetchSaga();
  };
  render() {
    console.log("render");
    return (
      <>
        <Container fluid className="mt-5">
          <h2 className="">Trending Now</h2>
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

export default TrendingNow;
