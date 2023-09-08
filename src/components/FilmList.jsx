import { Component } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
const URL = "http://www.omdbapi.com/?apikey=74580c0c&s=";

class FilmList extends Component {
  state = {
    filmsList: [],
    working: false,
  };

  componentDidMount = () => {
    this.handleFetch();
  };

  handleFetch = async () => {
    const response = await fetch(URL + this.props.genre);
    const data = await response.json();
    // console.log(films.Search);
    const films = await data.Search;
    const slicedFilms = await films.slice(0, 6);
    this.setState({ filmsList: slicedFilms, working: true });
  };

  render() {
    return (
      <Container fluid>
        <Row style={{ backgroundColor: "#221F1F" }} class>
          <h4 className="text-start text-light mt-2 mb-0">{this.props.title}</h4>
          {!this.state.working && <Spinner animation="border" variant="info" className="ms-2" role="status"></Spinner>}
          {this.state.filmsList.map((film, index) => (
            <Col className="col-6 col-sm-4 col-md-4 col-lg-2 gy-3 px-2" key={index}>
              <Card style={{ backgroundColor: "#221f1f", border: "none" }}>
                <Card.Img style={{ height: "400px", objectFit: "contain" }} fluid src={film.Poster} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmList;
