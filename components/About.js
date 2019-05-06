import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";

const Cardbox = {
  margin: "30px 0"
};

const About = () => (
  <div style={{ background: "lightgray", padding: "50px 0 10px 0" }}>
    <Container>
      <Card style={Cardbox}>
        <Card.Header>About</Card.Header>
        <Card.Body>
          <Card.Title>Resume</Card.Title>
          <Card.Text>
            Officia enim consectetur est consequat non nostrud minim duis fugiat
            ea cillum mollit. Exercitation ut qui aliqua et. Et fugiat aliquip
            esse consectetur esse proident aute reprehenderit. Voluptate anim
            veniam aliquip culpa. Tempor quis duis proident elit exercitation
            eiusmod fugiat non magna ipsum id amet eiusmod voluptate. Elit
            laborum do mollit exercitation eu incididunt mollit cupidatat ea.
            Culpa aliqua velit irure veniam in occaecat. In sunt enim
            adipisicing irure est consequat. Aute id laboris consequat esse quis
            adipisicing eu excepteur laboris exercitation est aliquip. Excepteur
            ut ea sunt proident id tempor officia ipsum. Officia magna fugiat
            nostrud tempor. Aute deserunt exercitation fugiat eu aliquip
            consectetur officia. Adipisicing esse velit consectetur laborum qui
            ipsum nulla laborum deserunt esse adipisicing occaecat incididunt.
            Irure voluptate ea nisi irure et mollit amet magna magna tempor
            labore. Incididunt cillum nisi reprehenderit sint. Sint Lorem fugiat
            ea labore. Reprehenderit tempor fugiat deserunt proident duis labore
            esse officia consequat. Fugiat esse qui nisi dolor. Nisi veniam in
            laborum enim dolor minim cillum enim elit aliqua aute. Enim nostrud
            pariatur do do cillum cillum. Do mollit proident id et pariatur
            laboris ea occaecat tempor. Ullamco consequat amet voluptate quis.
            Ut velit fugiat aliqua exercitation labore Lorem eu id. Laborum ad
            non in et officia est. Non commodo ipsum elit exercitation esse
            adipisicing occaecat voluptate. Id pariatur irure velit Lorem. Ex
            voluptate eu reprehenderit nulla amet ut sit sit adipisicing enim
            fugiat dolore fugiat. Nisi labore ut officia eu amet elit nostrud
            consequat amet fugiat sunt elit id.
          </Card.Text>
          <Button variant="primary">Download CV</Button>
        </Card.Body>
      </Card>
      <Card style={Cardbox} className="text-white">
        <Card.Img
          src="http://www.indiewire.com/wp-content/uploads/2012/06/5-things-you-might-not-know-about-the-goonies.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  </div>
);

export default About;
