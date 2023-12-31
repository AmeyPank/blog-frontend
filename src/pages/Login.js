import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Login() {
    const [loginId, setLoginId] = useState();
    const [password, setPassword] = useState();
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    useEffect(() => {
        if (localStorage.getItem("user")) {
            window.location.href = "/homepage";
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginObj = {
            loginId,
            password,
        };

        axios
            .post(`https://blog-app-backend-3o3o.onrender.com/user/login`, loginObj)
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("user", JSON.stringify(res.data.data));
                if (res.data.status === 200) {
                    window.location.href = "/homepage";
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div>
            <Form className="register_form" onSubmit={handleSubmit}>
                <h1 className="mb-5">Login into Blog App</h1>
                <Form.Group className="mb-3" controlId="LoginId">
                    <Form.Label>Login ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter LoginId/ UserName"
                        onChange={(e) => setLoginId(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
}

export default Login;