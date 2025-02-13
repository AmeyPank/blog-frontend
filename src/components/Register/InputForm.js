import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./InputForm.css";

function InputForm() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const apiUrl = process.env.REACT_APP_API_URL; // Update the variable name

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};

        if (!username.trim()) {
            newErrors.username = "Username is required.";
        }

        if (!name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid.";
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
                    toast.success("Registered Successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 2000); // Redirect after 2 seconds
                } else {
                    toast.error(res.data.message || "Registration failed. Please try again.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response?.data?.message || "An error occurred. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
            })
            .finally(() => {
                setIsSubmitting(false); // Re-enable submit button
            });
    };

    return (
        <div className="container mt-5">
            <Form className="register_form" onSubmit={handleSubmit}>
                <ToastContainer />
                <h1 className="mb-5">Register into Blog App</h1>

                {/* Username Field */}
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.username}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Name Field */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter a password"
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
                    {isSubmitting ? "Registering..." : "Register"}
                </Button>
            </Form>
        </div>
    );
}

export default InputForm;