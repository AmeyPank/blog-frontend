import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Login() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    useEffect(() => {
        if (localStorage.getItem("user")) {
            window.location.href = "/homepage";
        }
    }, []);

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};

        if (!loginId.trim()) {
            newErrors.loginId = "Login ID is required.";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if form is invalid
        }

        setIsSubmitting(true); // Disable submit button during submission

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
                alert(err.response?.data?.message || "Login failed. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false); // Re-enable submit button
            });
    };

    return (
        <div className="container mt-5">
            <Form className="register_form" onSubmit={handleSubmit}>
                <h1 className="mb-5">Login into Blog App</h1>

                {/* Login ID Field */}
                <Form.Group className="mb-3" controlId="LoginId">
                    <Form.Label>Login ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter LoginId/ UserName"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        isInvalid={!!errors.loginId}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.loginId}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                </Button>
            </Form>
        </div>
    );
}

export default Login;