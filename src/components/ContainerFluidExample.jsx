import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ContainerFluidExample.css'
import "bootstrap-icons/font/bootstrap-icons.css"

const amountOfRows = 12

export default function ContainerFluidExample() {

  const columnArray = []

for(let i=0; i<amountOfRows; i++) {
  columnArray.push(<Col className="col" xs={12 ? 1: 12/amountOfRows} >Hey</Col>)
}

  return (
    <Container fluid>
       <Row>
        <Col className="col" xs={{ span: 6, order: 1 }} lg={{ span: 6, order: 2}}>WASSUP</Col>
        <Col className="col" xs={{ span: 6, order: 2 }} lg ={{ span: 6, order: 1}}>
          <i class="bi bi-eye-fill"></i>
        </Col>
      </Row>
  </Container>
  );
}