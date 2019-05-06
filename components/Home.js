import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const Header = {
  height: "100vh",
  background: "lightgray",
  paddingTop: "40vh"
};

const Home = () => (
  <div style={Header}>
    <Container>
      <h1>Lorem Ipsum</h1>
      <p>
        Proident ullamco ipsum et enim sit id aliquip pariatur ea do aliquip
        incididunt.
      </p>
    </Container>
  </div>
);

export default Home;
