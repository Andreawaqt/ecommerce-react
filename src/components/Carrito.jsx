import { Offcanvas, Container, Button } from 'react-bootstrap';
import { useState } from 'react';

function Carrito({carritoArray}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container className="d-inline-block">
            <img
                src="https://placehold.co/50x50"
                alt="Carrito"
                style={{ cursor: 'pointer' }}
                onClick={handleShow}
            />

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {carritoArray.map(e => <carritoCard nombre={e.nombre} cantidad={e.cantidad} precio={e.cantidad* e.precio}/>)}
                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    )
}


export default Carrito;