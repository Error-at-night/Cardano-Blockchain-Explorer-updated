// Bootstrap Imports
import { Col, Container, Row } from "react-bootstrap";

// Components
import CardanoExplorer from "./CardanoExplorer";
import CardanoFooter from "./CardanoFooter";
import CardanoAddressDetails from "./CardanoAddressDetails"

const CardanoDisplayPage = () => {
    return ( 
        <Container>
            <Row>
                <Col>
                    <CardanoExplorer/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardanoAddressDetails />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardanoFooter/>
                </Col>
            </Row>
        </Container>
    );
}
 
export default CardanoDisplayPage;