import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

const Imgbox = {
  width: "550px",
  // height: "350px",
  marginBottom: "15px"
};

const Portfolio = ({ images }) => {
  return (
    <div style={{ background: "lightgray" }}>
      <Container style={{ paddingTop: "80px" }}>
        <Row className="image-container">
          {images.map((value, index) => {
            return (
              <Col lg={4} md={6} sm={6}>
                <Card className="image img-thumbnail" style={Imgbox}>
                  <Card.Img
                    variant="top"
                    key={index}
                    src={value.src}
                    alt={value.title}
                    title={value.description}
                  />
                  <Card.Body>
                    <Card.Title className="title">{value.title}</Card.Title>
                    <Button variant="primary">Open</Button>
                    <Button style={{ margin: "5px" }} variant="primary">
                      Source code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
