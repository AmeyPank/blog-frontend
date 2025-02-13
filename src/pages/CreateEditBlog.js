import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function CreateEditBlog({ pageTitle, btnText }) {
    const [title, setTitle] = useState("");
    const [textBody, setTextBody] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("user"));
    const apiUrl = process.env.REACT_APP_API_URL; // Ensure .env is configured correctly

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!title.trim() || !textBody.trim()) {
            alert("Both title and text body are required!");
            return;
        }

        setLoading(true);

        const blogObj = { title, textBody };
        const endpoint =
            pageTitle === "Create Blog"
                ? `${apiUrl}/blog/createBlog/${userData?.userId}`
                : `${apiUrl}/blog/editBlog/${userData?.userId}`;

        try {
            const response = await axios({
                method: pageTitle === "Create Blog" ? "post" : "put",
                url: endpoint,
                data: blogObj,
            });

            alert(`Blog ${pageTitle === "Create Blog" ? "created" : "updated"} successfully!`);
            navigate("/myblogs");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Form className="register_form p-4 shadow-sm bg-white rounded" onSubmit={handleSubmit}>
                    <h2 className="mb-4 text-center">{pageTitle}</h2>

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Text Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            placeholder="Enter text body"
                            value={textBody}
                            onChange={(e) => setTextBody(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : btnText}
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default CreateEditBlog;
