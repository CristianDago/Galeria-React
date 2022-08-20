import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
      <>  
        <Container fluid className="p-4 justify-content-center d-flex bg-dark text-light">
          <h3>
            Todos los derechos reservados <Button className="bg-danger border-0">Ver más</Button>
          </h3>
        </Container> 
      </>
    )
}

export default Footer; 