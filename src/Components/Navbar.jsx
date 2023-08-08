// Bootstrap Imports
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

// React Router Dom Imports
import { Form, NavLink } from 'react-router-dom';

// React Imports
import { useState } from "react";

// Heroicon Imports
import { UserIcon  } from "@heroicons/react/24/solid";

// Sass
import "../Sass/NavBar.scss"

// ThemeToggle
import ThemeToggle from "./Themetoggle";

const NavBar = () => {
        // useState to set the initial state of the navbar on mobile screen
        const [isOpen, setIsOpen] = useState(false);

        // useState to set initial width(state) of the navbar on mobile screen
        const [navWidth, setNavWidth] = useState(0);

        // function to open the navbar on mobile screen
        function openNav() {
          setIsOpen(true);
          setNavWidth(280);
        }

        // function to close the navbar on mobile screen
        function closeNav() {
          setIsOpen(false);
          setNavWidth(0);
        }
    return ( 
        <Navbar expand="lg" className="align-items-center d-flex py-5 px-sm-4"
            bg="dark" data-bs-theme="dark" 
        >
            <Container fluid className="d-flex align-items-center container">
                <div className="d-flex align-items-center">
                    <button className="me-2 me-sm-4 align-items-center d-lg-none d-inline burger-nav" onClick={openNav}>
                        <span>&#9776;</span>
                    </button>
                    <Navbar.Brand to="" className="d-flex align-items-center m-0"><NavLink className="brand">
                        <h1 className="m-0">Cardano</h1>
                    </NavLink></Navbar.Brand>
                </div>
                <div className="d-flex">
                    <Navbar.Collapse  id="mySidenav">
                        <Nav style={{ width: navWidth}} 
                            className={`mx-auto align-items-center d-flex justify-content-center ${isOpen ? 'open' : ''}`}
                        >
                            <button className="closebtn" onClick={closeNav} style={{fontSize: "40px"}}>&times;</button>
                            <Nav.Link to="#" className="px-3 nav-link home">Home</Nav.Link>
                            <NavDropdown title="Blockchain" className="px-3 nav-link" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#" className="nav-link-item">Mempool Transactions</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Transactions</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Blocks</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Epochs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#" className="nav-link-item">Contract Transaction</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Withdrawals</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Protocol Updates</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="#" className="px-3 nav-link">Metadata</Nav.Link>
                            <NavDropdown title="Tokens" className="px-3 nav-link" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#" className="nav-link-item">Tokens</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Tokens Transactions</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Mint Transactions</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link to="#" className="nav-link">Pools</Nav.Link>
                            <NavDropdown title="Certificates" className="px-3 nav-link" id="navbarScrollingDropdown">
                                <NavDropdown.Item to="#" className="nav-link-item">Pool Registration</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Pool Deregistration</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Delegations</NavDropdown.Item>
                                <NavDropdown.Item to="#" className="nav-link-item">Instaneous Rewards</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="d-flex form align-items-center">
                    <div className="me-5">
                        <NavDropdown title={<UserIcon width={20}/>} className="pe-md-5" id="navbarScrollingDropdown">
                            <Form method="post" action="/logout">
                                <button type="submit" className="button">Logout</button>
                            </Form>
                        </NavDropdown>
                    </div>
                    <div className="theme-toggle mt-2">
                        <ThemeToggle/>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}
 
export default NavBar;