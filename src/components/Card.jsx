import { Card, Col, Container, Row } from 'react-bootstrap';


const Tarjeta = (props) => {
    return (
        <>
            <Container>
                <Row className="justify-content-center d-flex">
                    <Col md={4}>
                    <Card className="m-2 bg-dark">
                        <Card.Body className="text-light">
                            <Card.Img variant="top" src={props.imagen}/>
                            <Card.Title className="pt-2 justify-content-center d-flex">{props.nombre}</Card.Title>
                            <Card.Text  className="justify-content-center d-flex">{props.descripcion}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>   
        </>
    )
}

export default Tarjeta; 