import { Container } from 'react-bootstrap';

const Header = (props) => {
    return (
        <>
            <Container className="p-4 justify-content-center d-flex" >
                <h1>{props.titulo}</h1>
            </Container>
        </>
    )
}

export default Header; 