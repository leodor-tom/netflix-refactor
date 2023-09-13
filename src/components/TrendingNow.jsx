import { Component, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TrendingNow = props => {
  /*   state = {
    Search: [],
  }; */

  const [search, setSearch] = useState([]);
  const navigate = useNavigate();
  const fetchSaga = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=d29d9bb8&s=" + props.fetch);
      if (resp.ok) {
        const data = await resp.json();

        setSearch(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*   componentDidMount = () => {
    this.fetchSaga();
  }; */
  useEffect(() => {
    fetchSaga();
  }, []);

  return (
    <>
      <Container fluid className="mt-5">
        <h2 className="">Trending Now</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center ">
          {search.slice(0, 6).map(film => (
            <Col key={film.imdbID} className="mt-2 mb-2 px-1">
              <img
                className="img-fluid"
                src={film.Poster}
                alt={film.Title}
                style={{ height: "300px" }}
                onClick={() => navigate("/MovieDetails/" + film.imdbID)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TrendingNow;
