import { Button, Row, Container, Form, Col, Nav, Navbar } from "react-bootstrap";


function Header() {
    return (
        <>
            <Container className="pt-5 pb-5">
                <Row className="d-flex align-items-center">
                    <Col><div className="d-inline-block"><img src="https://placehold.co/50x50" alt="Logo" /></div></Col>
                    <Col md={{ span: 3 }} className="d-none d-md-block"></Col>
                    <Col>
                        <Navbar expand="md" className="d-flex justify-content-end w-100">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#home">HOME</Nav.Link>
                                    <Nav.Link href="#shop">SHOP</Nav.Link>
                                    <Nav.Link href="#about">ABOUT</Nav.Link>
                                    <Nav.Item className="d-md-none">
                                        <div className="d-inline-block"><img src="https://placehold.co/50x50" alt="Carrito" /></div>
                                    </Nav.Item>
                                    <Nav.Item className="d-md-none">
                                        <div className="d-inline-block"><img src="https://placehold.co/50x50" alt="Clear carrito" /></div>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col md={{ span: 3 }} className="d-none d-md-block"></Col>

                    <Col className="d-none d-md-block">
                        <div className="d-inline-block"><img src="https://placehold.co/50x50" alt="Carrito" /></div>

                        <div className="d-inline-block"><img src="https://placehold.co/50x50" alt="Clear carrito" /></div>
                    </Col>

                </Row>
            </Container>

        </>
    );
}
export default Header;