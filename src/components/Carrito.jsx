import { Dropdown, Container } from 'react-bootstrap';

function Carrito() {


    return (
        <Container className="d-inline-block">
            <Dropdown >
                <Dropdown.Toggle as="div" id="dropdown-custom-components">
                    <img
                        src="https://via.placeholder.com/50x50"
                        alt="dropdown trigger"
                        style={{ cursor: 'pointer' }}
                    />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Item 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Item 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Item 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}


export default Carrito;