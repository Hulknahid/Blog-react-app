import React from "react";
import { Col, Container, Row } from "reactstrap";
import Base from "../Base/Base";
import AddPost from "../ProjectFiles/AddPost/AddPost";

const UserDashboard = () => {
  return (
    <Base>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }} className="my-3">
            <AddPost />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default UserDashboard;
