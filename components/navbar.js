import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { TbSearch } from 'react-icons/tb';





const Navbar2 = () => {
    return (
        <>

            <style type="text/css">
                {`

                :root {
                    --verde-claro: #94E278;
                    --verde-escuro: #659C51;
                    --branco-icones: #D9D9D900; 
                }

                .header {
                    background-color: var(--verde-claro);
                }
                
                .navbar {
                    background-color: var(--verde-escuro);
                }
                
                .icons {
                    background: var(--branco-icones);
                }
            `}
            </style>



            <div className="header text-light text-center py-5 w-100">
                <img src='../public/logoteste.svg'></img>
            </div>
            <Navbar key={false} expand={false} variant="dark" className="mb-3 navbar">
                <Container fluid>
                    <TbSearch size={20} />
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-false`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                        placement="end"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-false`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbar2