// React Imports
import { useContext } from "react";

// FetchData and ThemeContext Context
import { FetchData, ThemeContext } from "../../Layout/Layout";

// Bootstrap imports
import { Col, Container, Row } from "react-bootstrap";

// Sass
import "../../Sass/CardanoDetails.scss";

const CardanoAddressDetails = () => {
    // theme context 
    const { theme } = useContext(ThemeContext);
    const className = "cardano-blockchain-details-" + theme;

    // FetchData context
    const { data, error } = useContext(FetchData);
    
    return ( 
        <>
            {data && <Container fluid="lg" className={`${className} mt-1 mb-5 px-4 pt-4 pb-1`}>
                    <h2 className="mb-4">Cardano Address Details</h2>
                    {error && <p className="mt-2 mb-4 error"><span className="me-2">Error: </span>{error.message}</p>}
                    <Row className="mb-4 justify-content-between py-3 px-3 row-one">
                        <Col xs={12} sm={12} md={12} lg={4} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Address</h5>
                            <p>{data.address}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Stake Address</h5>
                            <p>{data.stakeAddress}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Amount Unit</h5>
                            <p>{data.amountUnit}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-between py-3 px-3 mb-4 row-two">
                        <Col xs={12} sm={12} md={12} lg={4} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Address Block_Height</h5>
                            <p>{data.blockHeight}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Address Type</h5>
                            <p>{data.type}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Address Block Time</h5>
                            <p>{data.blockTime}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-between py-3 px-3 mb-4 row-three">
                        <Col xs={12} sm={12} md={12} lg={4} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Tx Hash</h5>
                            <p>{data.txHash}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Tx Index</h5>
                            <p>{data.txIndex}</p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={3} className="column mb-3 mb-lg-0 me-lg-3 py-2">
                            <h5>Amount Quantity</h5>
                            <p>{data.amountQuanity}</p>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
}
 
export default CardanoAddressDetails;