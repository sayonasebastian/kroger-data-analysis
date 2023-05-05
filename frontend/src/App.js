import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import DashboardWithCustomHNum from "./components/dashboard_using_custom_hNum";
import CustomDataSetUpload from "./components/custom-data-set-upload";
import DemographicFactorsDashboard from "./components/demographic_factors_dashboard";
import { Container, Col, Row } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Kroger Data Analysis</h1>
          {/* <section id="navigation">
            <a href="/home">Home</a>
            <a href="/login">Login</a>
            New user? <a href="/register">Register</a>
          </section> */}
        </Col>
      </Row>

      {/* create routes here */}
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboardCustHNum"
              element={<DashboardWithCustomHNum />}
            />
            <Route path="/upload" element={<CustomDataSetUpload />} />
            <Route path="/demoFactDashboard" element={<DemographicFactorsDashboard />} />
            
          </Routes>
        </div>
      </Router>
    </Container>
  );
}
