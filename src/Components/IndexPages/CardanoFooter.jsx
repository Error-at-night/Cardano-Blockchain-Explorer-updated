// Bootstrap Imports
import { Container, Row, Col } from 'react-bootstrap';

// React Router Imports
import { Link } from "react-router-dom";

// Sass
import "../../Sass/CardanoFooter.scss";

// React Imports
import { useContext } from 'react';

// ThemeContext
import { ThemeContext } from '../../Layout/Layout';

const CardanoFooter = () => {
    const { theme } = useContext(ThemeContext);
    const className = "cardano-footer-" + theme;
    return (
        <div className={`${className} mb-4`}>
            <Container className="container p-4">
                <Row className="footer-row py-3 px-3 justify-content-between">
                    <Col sm={12} md={3} lg={4} className='column py-3 py-md-2'>
                        <h4>Cardano</h4>
                        <p className="feature mb-0">Feature rich blockchain explorer and analytics platform for Cardano</p>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={4} className="py-3 py-md-2 mt-4 mt-md-0 mb-4 mb-md-0 column">
                        <h4>Useful links</h4>
                        <div className='my-3'><Link>Typhon wallet</Link></div>
                        <div><Link>Cardano Dev Portal</Link></div>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} className="column py-3 py-md-2">
                        <h4>Cardanoscan</h4>
                        <div className='my-3'><Link>Contact Us</Link></div>
                        <div className='my-3'><Link>Terms and Conditions</Link></div>
                        <div><Link>Privacy Policy</Link></div>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-between mt-4 mt-md-3 py-3 px-3 footer-row">
                    <Col xs={12} sm={12} md={3} lg={4} className='column py-3 py-md-2'>
                        <h4>Social Links</h4>
                        <div className='my-3'><Link><i className="fa-brands fa-twitter"></i><span className="ms-2">Twitter</span></Link></div>
                        <div className='my-3'><Link><i className="fa-brands fa-facebook"></i><span className="ms-2">Facebook</span></Link></div>
                        <div className='my-3'><Link><i className="fa-brands fa-instagram"></i><span className="ms-2">Instragram</span></Link></div>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={4} className="py-3 py-md-2 mt-4 mt-md-0 mb-4 mb-md-0 column">
                        <h4>Official Pools</h4>
                        <div className='my-3'> ❤ <Link> CSN3</Link></div>
                        <div className='my-3'> ❤ <Link> CSN2</Link></div>
                        <div className='my-3'> ❤ <Link> CSN1</Link></div>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} className="coinGecko column py-3 py-md-2">
                        <p className='mb-0'>Price and MarketCap info provided by <Link>CoinGecko</Link> </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardanoFooter;