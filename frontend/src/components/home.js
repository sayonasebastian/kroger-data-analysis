import React from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();
  const move = (page)=>{
    navigate("/"+page);
  }
  return (
    <div className="text-center">
      <Navbar bg="light" expand="lg" class="align-right">
        <Container>
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link onClick={() => move("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => move("login")}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 className="main-title home-page-title">
        welcome to the Insights Portal
      </h1>
      <h3>Get Started</h3>
      <div class="mt-10 mb-10">
        <ListGroup>
          <ListGroup.Item action onClick={() => move("dashboard")}>
            Dashboard using household number = 10
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => move("dashboardCustHNum")}>
            Dashboard using Custom Householdnumber
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => move("upload")}>
            Upload Custom Data Set
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => move("demoFactDashboard")}>
            Demographic Factors
          </ListGroup.Item>
        </ListGroup>
      </div>
      {/* <Button variant="secondary" onClick={(e) => navigate("/")}>
        Logout
      </Button> */}
    </div>
  );
}
