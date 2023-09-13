/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";

const MovieDetails = propTypes => {
  const [movieDet, setMovieDet] = useState("null");
  const params = useParams();
  console.log(params.movieId);
  const fetchInfo = async () => {
    try {
      const respInfo = await fetch("http://www.omdbapi.com/?apikey=d29d9bb8&s=" + params.movieId);
      if (respInfo.ok) {
        const dataInfo = await respInfo.json();
        setMovieDet(dataInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <img src={movieDet.Poster} />
            <h2>{movieDet.Title}</h2>
            <span>{movieDet.Year}r</span>
            <span>{movieDet.Runtime}</span>
            <p>{movieDet.Plot}</p>
            <h4>Comments</h4>
            <p>
              Comments Lorem ipsum dolor sit amet consectetur adipisicing elit. shjsjs kciao cuaosmp nidfncien ioasdcjc
              kascju.
            </p>
            <Badge>rate</Badge>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
