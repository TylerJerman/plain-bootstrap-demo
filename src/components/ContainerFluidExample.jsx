import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContainerFluidExample.css'

const amountOfRows = 12

export default function ContainerFluidExample() {

  const columnArray = []

for(let i=0; i<amountOfRows; i++) {
  columnArray.push(<Col className="col" xs={12 ? 1: 12/amountOfRows} >Hey</Col>)
}

  return (
    <Container fluid>
    <Row>
      <Col className= "col" xs="9">Column width 9</Col>
      <Col className= "col" xs="3">Column width 3</Col>
    </Row>
    <Row>
      <Col className="col" xs="6">Column</Col>
      <Col className= "col" xs="6">Fractions and such that require many different things like Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam hic distinctio, quisquam tempore consequatur magni nemo similique voluptas? Nostrum, incidunt! Commodi, consectetur accusamus? Aspernatur incidunt accusantium rem praesentium vel!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, illum? Neque excepturi perferendis voluptates repellendus cum, saepe earum, at, accusamus consequatur dolorem laborum? Maxime, quos. Enim ullam voluptas labore earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta, deleniti, nobis deserunt, maiores dolorum nihil temporibus explicabo reprehenderit facilis minima doloribus dolorem eveniet. Voluptatibus ad officia excepturi nisi esse?</Col>
      <Col className="col" xs="12">Column</Col>
    </Row>
  </Container>
  );
}