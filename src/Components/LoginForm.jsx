// React Router Dom
import { Form, Link } from "react-router-dom";

// Bootstrap Imports
import { Container, Row, Col } from "react-bootstrap";

// Images
import CardanoLoginImg from "../Images/cardano-login-img.jpg";

// Sass
import "../Sass/LoginForm.scss";

// React Imports
import { useContext } from 'react';

// ThemeContext
import { ThemeContext } from '../Layout/Layout';

const LoginForm = () => {
    const { theme } = useContext(ThemeContext);
    const className = "loginForm-" + theme;

    return ( 
        <Container className={`${className} d-flex align-items-center px-3`}>
            <Row className="justify-content-md-between align-items-center first-roww py-3"
            >
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={CardanoLoginImg} alt="" className="img-fluid"/>
                </Col>
                <Col xs={12} sm={12} md={6} lg={5} className="second-col mt-4 mt-lg-0">
                    <Form method="post">
                        <h1>Welcome onboard with us</h1>
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="userName" id="userName" 
                            placeholder="Enter your username"
                            required
                        />
                        <input type="hidden" name="_action" value="newUser"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="password" 
                            placeholder="Enter your password"
                            required
                        />
                        <p className="forget-password"><Link>Forget Password</Link></p>
                        <button type="submit" className='login'>Login</button>
                        <p className="new-to-cardano">New to Cardano? <Link><span>Register</span> Here</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
 
export default LoginForm;