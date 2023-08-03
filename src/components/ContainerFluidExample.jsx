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
        <Col className="col" xs="12" sm="6" md="6" lg="3">
          Sidebar
        </Col>
        <Col className="col" xs="12" sm="6" md="6" lg="9">
          Main Content
        </Col>
      </Row>
  </Container>
  );
}