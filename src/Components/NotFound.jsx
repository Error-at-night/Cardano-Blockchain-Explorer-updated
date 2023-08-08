import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-4">
                    <h1>Page Not Found</h1>
                    <p className="mt-3"><Link>Back to homepage</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;