import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./InputForm.css";

function InputForm() {
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    const handleSubmit = (e) => {
        e.preventDefault();
        const userObj = {
            name,
            username,
            email,
            password,
        };

        axios
            .post(`https://blog-app-backend-3o3o.onrender.com/user/register`, userObj)
            .then((res) => {
                console.log(res.data.status);
                if (res.data.status === 201) {
                    
                    toast('Registerd Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    window.location.href = "/login";
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
    };
    return (
        <Form className="register_form" onSubmit={handleSubmit}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <h1 className="mb-5">Register into Blog App</h1>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter a password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button type="submit">Register</Button>
        </Form>
    );
}

export default InputForm;