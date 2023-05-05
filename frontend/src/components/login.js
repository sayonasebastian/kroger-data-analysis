import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Login() {
  // initial state
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const currentHost = `${window.location.protocol}//${window.location.hostname}`;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set Axiom configurations 
    const configuration = {
      method: "post",
      url: `${currentHost}/users/check`,
      data: {
       username
      },
    };

    // trigger Express API using axios
    axios(configuration)
      .then((result) => {
        setLogin(true);
        alert("Logged in successfully");
        navigate("/home");
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const move = ()=>{
    navigate("/register");
  }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
       {/* user-name */}
       <Form.Group controlId="userNameCtl">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="passwordCtl">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <div class="mt-2">
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
        </div>
        <p>New User? Click here to <a href="" onClick={(e) => move()}>Register</a></p>

        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Form>
    </>
  );
}