import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Foo = {
	padding: "80px 0",
  background: "white",
};

const Footer = () => (
    <div style={Foo}>
      <Container>
        <Row>
          <Col md={4}>
					<p>2019</p>
					</Col>
          <Col md={{ span: 4, offset: 4 }}>
					<p>FOOTER</p>
					</Col>
        </Row>
      </Container>
    </div>
);

export default Footer;
